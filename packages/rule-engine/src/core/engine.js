const pick = require('lodash.pick');
const orderBy = require('lodash.orderby');

const Rule = require('./rule');
const Comparator = require('./comparator');
const Condition = require('./condition');

class RuleEngine {
  constructor() {
    Object.assign(this, {
      rules: [],
      skipFilter: true,
      ruleState: {},
      parseErrors: []
    });
  }

  appendRulesFromConfig(ruleConfigs) {
    ruleConfigs.forEach((ruleConfig) => {
      try {
        this.rules.push(new Rule(ruleConfig));
      } catch(err) {
        this.parseErrors.push(ruleConfig);
        console.debug('rule failed', err, ruleConfig);
      }
    });
  }

  appendComparator(condition) {
    condition.args.push(new Comparator());
  }

  appendCondition(operator) {
    const newOperator = new Condition(["and", []]);
    operator.args.push(newOperator);
    this.appendComparator(newOperator);
  }

  removeOperatorByIndex(operator, index) {
    operator.args.splice(index, 1);
  }

  // lets mutate incoming data by appending matched rules to matchedRules
  // hmm where why what
  build(data) {
    this.ruleState = this.buildRuleState();

    data.forEach((item) => {
      item.matchedRules = {};
      this.rules.forEach((rule) -> {
        if (rule.run(item)) {
          this.ruleState[rule.key].totalCount += 1;
          item.matchedRules[rule.key] = pick(rule, ['key', 'display']);
        }
      });
    });

    orderBy(this.rules, (rule) => (rule.display.rank));

    return this;
  }

  clearRuleSet() {
    this.clearRules();
    this.clearRuleState();
  }

  getRules() {
    return this.rules;
  }

  clearRules() {
    this.rules = []
  }

  clearRuleState() {
    Object.keys(this.ruleState).forEach((key) => {
      const rule = this.ruleState[key];
      rule.totalCount = 0;
      rule.currentCount = 0;
    });
  }

  run(data) {
    const activeRules = [];
    const inactiveRules = [];

    // reset counts and partition our rules once up here
    Object.keys(this.ruleState).forEach((key) => {
      const rule = this.ruleState[key];
      rule.currentCount = 0
      if(rule.active) {
        activeRules.push(rule);
      } else {
        inactiveRules.push(rule);
      }
    });

    // skip if we can due to all rules being active
    this.skipFilter = activeRules.length === 0
    if(this.skipFilter) {
      return data;
    }

    // filter our data
    return data.filter((item) => {
      const matched = activeRules.every((rule) => item.matchedRules[rule.key]);

      [...activeRules, ...inactiveRules].forEach((rule) => {
        if(item.matchedRules[rule.key] && matched) {
          this.ruleState[rule.key].currentCount += 1;
        }
      });

      return matched;
    });
  }

  toggleRuleByKey(ruleKey) {
    this.ruleState[ruleKey].active = !this.ruleState[ruleKey].active;
  }

  setRuleByKey(ruleKey, value) {
    this.ruleState[ruleKey].active = value;
  }

  buildRuleState() {
    return this.rules.reduce((acc, rule) => {
      acc[rule.key] = {
        key: rule.key,
        display: rule.display,
        meta: rule.meta,
        currentCount: 0,
        totalCount: 0,
        active: false,
        loading: false
      };
      return acc;
    }, {});
  }

  test(data, rule) {
    return data.filter((item) => rule.run(item));
  }
}

module.exports = RuleEngine;

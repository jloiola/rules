Rule = require './Rule.coffee'
predicates = require('./operators/predicates.coffee')
conditions = require('./operators/conditions.coffee')
fields = require('./fields/index.coffee')
editors = require('./editors.coffee')
Predicate = require('./Predicate.coffee')
Condition = require('./Condition.coffee')

class RuleEngine

  constructor: () ->
    @ruleSet =
      rules: [],
      skipFilter: true
      ruleState: {}
    @errorLoadingRules = []  

  appendRulesFromConfig: (ruleConfigs) =>
    ruleConfigs.forEach (ruleConfig) =>
      try
        @ruleSet.rules.push new Rule ruleConfig
      catch err
        @errorLoadingRules.push ruleConfig
        console.debug 'rule failed', err, ruleConfig

  appendPredicate: (operator) ->
    operator.args.push new Predicate()

  appendCondition: (operator) ->
    newOperator = new Condition(["and", []])
    operator.args.push newOperator
    @appendPredicate newOperator
  
  removeOperatorByIndex: (operator, index) =>
    operator.args.splice index, 1

  getEditorsMap: () ->
    editors.reduce (acc, editor) => 
      acc[editor.key] = editor
      acc
    , {}

  getFieldOptions: ->
    _.map(fields, (field) => field).filter (field) => !field.disabled

  getPredicateOptions: ->
    predicates

  getConditionOptions: ->
    conditions
    
  # lets mutate incoming data by appending matched rules to matchedRules
  build: (data) ->
    @buildRuleSet()
    
    data.forEach (item) =>
      item.matchedRules = {}
      @ruleSet.rules.forEach (rule) =>
        if rule.run(item)
          @ruleSet.ruleState[rule.key].totalCount += 1
          item.matchedRules[rule.key] = _.pick rule, ['key','display']

    # return a tuple of the stats and the mutated data
    _.sortBy @ruleSet.rules, (rule) -> rule.display.rank
    @ruleSet

  clearRuleSet: ->
    @clearRules()
    @clearRuleState()

  getRules: () ->
    @ruleSet.rules

  clearRules: () ->
    @ruleSet.rules = []
    
  clearRuleState: () ->
    _.forEach @ruleSet.ruleState, (rule) =>
      rule.totalCount = 0
      rule.currentCount = 0
  
  run: (data) ->
    activeRules = []
    inactiveRules = []
    
    _.forEach @ruleSet.ruleState, (rule) =>
      rule.currentCount = 0
      if rule.active
        activeRules.push rule
      else 
        inactiveRules.push rule
    
    @ruleSet.skipFilter = activeRules.length is 0
    return data if @ruleSet.skipFilter

    data.filter (item) =>
      matched = _.every activeRules, (rule) => 
        item.matchedRules[rule.key]
      
      inactiveRules.forEach (rule) =>
        if item.matchedRules[rule.key] and matched
          @ruleSet.ruleState[rule.key].currentCount += 1

      activeRules.forEach (rule) =>
        if item.matchedRules[rule.key] and matched
          @ruleSet.ruleState[rule.key].currentCount += 1

      matched

  toggleRuleByKey: (ruleKey) ->
    @ruleSet.ruleState[ruleKey].active = !@ruleSet.ruleState[ruleKey].active

  setRuleByKey: (ruleKey, value) ->
    @ruleSet.ruleState[ruleKey].active = value

  buildRuleSet: () ->
    @ruleSet.ruleState = @ruleSet.rules.reduce (acc, rule) =>
      acc[rule.key] = 
        key: rule.key,
        display: rule.display
        meta: rule.meta
        currentCount: 0,
        totalCount: 0,
        active: false,
        loading: false
      acc
    , {}

  test: (data, rule) ->
    data.filter (item) => rule.run(item)

module.exports = RuleEngine
RuleExecutor = require('./RuleExecutor.coffee')
uuid = require "node-uuid"
{contrast} = require('../../../utils.coffee')

# represents serializable rule in kvstore
class Rule
  # precondition configs are cloned and mutable before they get here
  constructor: (initConfig={}) ->
    Object.assign @, {
      id: null
      storeType: null
      readOnly: false
      key: uuid.v4().toUpperCase()
      display: {
        rank: 0,
        name: "",
        description: ""
        color: "#4444FF",
        showBadge: true,
        showFolderAggregate: false,
        filterGroupKey: "actionItems"
      }
      meta: 
        created: null
        updated: null
      operator: [["and", []]]
    }

    @deserialize initConfig
    @display.fontColor = @badgeFontColor @display.color

  badgeFontColor: (color) ->    
    colorParts = [
      parseInt(color.slice(1,3), 16),
      parseInt(color.slice(3,5), 16),
      parseInt(color.slice(5,7), 16),
    ]

    white = [255,255,255]
    gray = [119,119,119]

    g = contrast colorParts, gray
    w = contrast colorParts, white

    if g > w then '#777777' else '#ffffff'    

  deserialize: (initConfig) ->
    Object.assign @, initConfig
    @executor = new RuleExecutor(@operator)
    delete @operator
    @

  serialize: ->
    operator = @executor.serialize()
    Object.assign {},
      _.pick(@, ['id', 'storeType', 'readOnly', 'key', 'display', 'meta']),
      {operator: operator}

  clone: () ->
    cloned = JSON.parse(JSON.stringify(@serialize()))
    @deserialize(cloned)

  run: (context) ->
    @executor.exec(context)

module.exports = Rule
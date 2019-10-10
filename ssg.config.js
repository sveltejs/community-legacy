const fs = require('fs')
const path = require('path')
const yaml = require('@ssgjs/source-yaml').default

exports.plugins = {
  yamlFiles: yaml({ dirPath: 'data' }),
}

let eventsData = null
// optional. called repeatedly, can be expensive
exports.getDataSlice = async (key, uid) => {
  console.log('optional getDataSlice action')
  // we dont really use the key here
  if (key === 'events') {
    // uid == the event's ID
    return eventsData[uid]
  } else {
    throw new Error('invalid key ' + key)
  }
}

exports.createIndex = async (mainIndex = {}) => {
  // do expensive initial fetches and cache them in .ssg/data.json
  // console.log({ mainIndex: Object.keys(mainIndex.data) })
  eventsData = mainIndex.yamlFiles['data-events-yml'].data.EventsList
  mainIndex.events = eventsData
  mainIndex.resources = mainIndex.yamlFiles['data-resources-yml'].data
  return mainIndex
}

// optional lifecycle hook
exports.postExport = async (mainIndex) => {
  // eg for RSS
  // console.log('postExport', mainIndex)
}

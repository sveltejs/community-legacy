const fs = require('fs')
const path = require('path')
const YAML = require('yaml')
const eventsData = YAML.parse(fs.readFileSync(path.resolve('data/events.yml'), 'utf8'))

// optional. called repeatedly, can be expensive
exports.getDataSlice = async (key, uid) => {
  console.log('optional getDataSlice action')
  // we dont really use the key here
  if (key === 'events') {
    // uid == the event's ID
    return eventsData.EventsList[uid]
  } else {
    throw new Error('invalid key ' + key)
  }
}

exports.createIndex = async (mainIndex = {}) => {
  // do expensive initial fetches and cache them in .ssg/data.json
  mainIndex.events = eventsData.EventsList
  return mainIndex
}

// optional lifecycle hook
exports.postExport = async (mainIndex) => {
  // eg for RSS
  // console.log('postExport', mainIndex)
}

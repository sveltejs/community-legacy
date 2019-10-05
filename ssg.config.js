const fs = require('fs')
const path = require('path')
const eventsData = JSON.parse(fs.readFileSync(path.resolve('data/events.json'), 'utf8'))

// optional. called repeatedly, can be expensive
exports.getDataSlice = async (key, uid) => {
  console.log('optional getDataSlice action')
  // we dont really use the key here
  if (key === 'events') {
    // uid == the event's ID
    return eventsData.events[uid]
  } else {
    throw new Error('invalid key ' + key)
  }
}

exports.createIndex = async (mainIndex = {}) => {
  // do expensive initial fetches and cache them in .ssg/data.json
  mainIndex.events = eventsData.events
  return mainIndex
}

// optional lifecycle hook
exports.postExport = async (mainIndex) => {
  // eg for RSS
  // console.log('postExport', mainIndex)
}

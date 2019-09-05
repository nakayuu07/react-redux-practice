import { READ_EVENTS } from '../actions'

const events = (events = [], action) => {
  switch (action.type) {
    case READ_EVENTS:
      return [...action.responce.data]
    default:
      return events
  }
}

export default events
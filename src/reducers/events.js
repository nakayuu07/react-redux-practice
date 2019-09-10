import { READ_EVENTS, CREATE_EVENT } from '../actions'

const events = (events = [], action) => {
  switch (action.type) {
    case READ_EVENTS:
      return [...action.responce.data]
    case CREATE_EVENT:
      return [...events, action.responce.data]
    default:
      return events
  }
}

export default events
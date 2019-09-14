import { READ_EVENTS, CREATE_EVENT, DELETE_EVENT, READ_EVENT } from '../actions'

const events = (events = [], action) => {
  switch (action.type) {
    case READ_EVENTS:
      return [...action.responce.data]
    case CREATE_EVENT:
      return [...events, action.responce.data]
    case DELETE_EVENT:
      return events.filter(event => event.id !== action.id)
    case READ_EVENT:
      const data = action.responce.data
      return [...events, data]
    default:
      return events
  }
}

export default events
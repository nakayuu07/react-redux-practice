import _ from 'lodash'
import { READ_EVENTS } from '../actions'

const events = (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return (_.mapKeys(action.responce.data, 'id'))
    default:
      return events
  }
}

export default events
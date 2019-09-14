import React from 'react';
import { Link } from 'react-router-dom'

const Event = ({ event }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{event.id}</td>
          <td>
            <Link to={`events/${event.id}`}>
              {event.title }
            </Link>
          </td>
          <td>{event.body}</td>
        </tr>
      </tbody>
    </table>
  )
}


export default Event
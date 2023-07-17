import React from 'react';

function AttendeesList(props){
    if (props.attendees === undefined) {
        return null;
      }
    return (


          <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Conference</th>
                </tr>
              </thead>
              <tbody>
                {props.attendees.map(attendee => {
                  return (
                    <tr key={attendee.href}>
                      <td>{ attendee.name }</td>
                      <td>{ attendee.conference }</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

      );

}

export default AttendeesList;

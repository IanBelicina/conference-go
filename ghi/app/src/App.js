import React from 'react';
import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <React.Fragment>
      <Nav />
      <LocationForm />
      <div className="container">
        {/* <AttendeesList attendees={props.attendees}/> */}
      </div>
    </React.Fragment>
  );
}
export default App;

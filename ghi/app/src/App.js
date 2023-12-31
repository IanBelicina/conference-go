import React from 'react';
import Nav from './Nav';
import AttendeesList from './AttendeesList';
import LocationForm from './LocationForm';
import ConferenceForm from './ConferenceForm';
import AttendConferenceForm from './AttendConferenceForm'
import PresentationForm from './PresentationForm';
import MainPage from './MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (

    <BrowserRouter>
      <Nav />

      <Routes>
        <Route index element={<MainPage />} />
        <Route path="attendees/new" element={<AttendConferenceForm />} />
        <Route path="conferences/new" element={<ConferenceForm />} />
        <Route path="locations/new" element={<LocationForm />} />
        <Route path="attendees" element={<AttendeesList attendees={props.attendees} />}/>
        <Route path="presentations/new" element={<PresentationForm />}/>
      </Routes>

    </BrowserRouter>


  );
}
export default App;

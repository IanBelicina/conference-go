import React, { useEffect, useState } from 'react';

function ConferenceForm () {
    const [locations, setLocations] = useState([]);
    const [name, setName] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [description, setDescription] = useState("");
    const [maxPresentations, setMaxPresentations] = useState("");
    const [maxAttendees, setMaxAttendees] = useState("");
    const [location, setLocation] = useState("");

    const handleLocationChange = (event) => {
        const value = event.target.value;
        setLocation(value);
    }

    const handleMaxAttendeesChange = (event) => {
        const value = event.target.value;
        setMaxAttendees(value);
    }

    const handleMaxPresentationsChange = (event) => {
        const value = event.target.value;
        setMaxPresentations(value);
    }

    const handleDescriptionChange = (event) => {
        const value = event.target.value;
        setDescription(value);
    }

    const handleEndChange =  (event) => {
        const value = event.target.value;
        setEnd(value);
    }

    const handleStartChange =  (event) => {
        const value = event.target.value;
        setStart(value);
    }

    const handNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const arrayLocation = location.split("/");
        const locationId = arrayLocation[3];
        console.log(locationId);


        const data = {};
        data.name = name;
        data.starts = start;
        data.ends = end;
        data.description = description;
        data.max_presentations = maxPresentations;
        data.max_attendees = maxAttendees;
        data.location = locationId;






        const conferenceUrl = "http://localhost:8000/api/conferences/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(conferenceUrl, fetchConfig);
        if (response.ok) {
            const newConference = await response.json();
            console.log(newConference);

            setName("");
            setStart("");
            setEnd("");
            setDescription("");
            setMaxPresentations("");
            setMaxAttendees("");
            setLocation("");


        }


    }


    const fetchData = async() => {
        const url = 'http://localhost:8000/api/locations/';
        const response = await fetch(url);

        if (response.ok) {
          const data = await response.json();
          const location = data.locations;
          setLocations(location);
        }
    }

    useEffect(() => {
        fetchData();
      }, []);

    return (
        <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new conference</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input onChange={handNameChange} placeholder="Name"
                       required type="text"
                       name="name"
                       id="name"
                       className="form-control"
                       value={name} />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleStartChange} placeholder="Starts"
                       required type="date"
                       name="starts" id="starts"
                       className="form-control"
                       value={start} />
                <label htmlFor="starts">Starts</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleEndChange} placeholder="Ends"
                       required type="date"
                       name="ends"
                       id="ends"
                       className="form-control"
                       value={end}/>
                <label htmlFor="Ends">Ends</label>
              </div>
              <div className="mb-3">

                <label htmlFor="Description" className="form-label">Description</label>
                <textarea onChange={handleDescriptionChange} value={description} className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"></textarea>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleMaxPresentationsChange} placeholder="Max Presentations"
                       required type="number"
                       name="max_presentations"
                       id="max_presentations"
                       className="form-control"
                       value={maxPresentations}/>
                <label htmlFor="max_presentations">Max Presentations</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleMaxAttendeesChange} placeholder="Max Attendees"
                       required type="number"
                       name="max_attendees"
                       id="max_attendees"
                       className="form-control"
                       value={maxAttendees} />
                <label htmlFor="max_attendees">Max Attendees</label>
              </div>
              <div className="mb-3">
                <select onChange={handleLocationChange}
                        value={location}
                        required name="location"
                        id="location"
                        className="form-select">
                  <option value="">Choose a location</option>
                  {locations.map(location => {
                    return(
                        <option key={location.href} value={location.href}>
                            {location.name}
                        </option>
                    );
                  })}

                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default ConferenceForm;

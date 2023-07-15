console.log("linked")
// Get the cookie out of the cookie store
const payloadCookie = await cookieStore.get("jwt_access_payload")// FINISH THIS
// console.log(payloadCookie)
if (payloadCookie) {
    // The cookie value is a JSON-formatted string, so parse it
    const encodedPayload = JSON.parse(payloadCookie.value);

    // Convert the encoded payload from base64 to normal string
    const decodedPayload = atob(encodedPayload);// FINISH THIS

    // The payload is a JSON-formatted string, so parse it
    const payload = JSON.parse(decodedPayload)// FINISH THIS

    // Print the payload
    console.log(payload);

    // Check if "events.add_conference" is in the permissions.
    // If it is, remove 'd-none' from the link
    const newConferenceTag = document.getElementById("hide-new-conference")
    if (payload.user.perms.includes("events.add_conference")){
        newConferenceTag.classList.remove("d-none");
    }



    // Check if "events.add_location" is in the permissions.
    // If it is, remove 'd-none' from the link
    const newLocationTag = document.getElementById("hide-new-location");
    if (payload.user.perms.includes("events.add_location")){
        newLocationTag.classList.remove("d-none");
    }

  }

//   console.log("linked")
// // Get the cookie out of the cookie store
// const payloadCookie = cookieStore.get("jwt_access_payload")// FINISH THIS
// // console.log(payloadCookie)
// if (payloadCookie) {
//     // The cookie value is a JSON-formatted string, so parse it
//     const encodedPayload = JSON.parse(payloadCookie.value);

//     // Convert the encoded payload from base64 to normal string
//     const decodedPayload = atob(encodedPayload);// FINISH THIS

//     // The payload is a JSON-formatted string, so parse it
//     const payload = JSON.parse(decodedPayload)// FINISH THIS

//     // Print the payload
//     console.log(payload);

//     // Check if "events.add_conference" is in the permissions.
//     // If it is, remove 'd-none' from the link


//     // Check if "events.add_location" is in the permissions.
//     // If it is, remove 'd-none' from the link

//   }

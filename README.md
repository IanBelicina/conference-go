# ConferenceGo!

Conference Go is a web application that simplifies conference management for organizers while providing a user-friendly experience for attendees. Built with a robust tech stack and modern development practices, this application seamlessly brings together JavaScript, React, Python, Django, and employs a microservices architecture.



## How to Run this App
 -Required software
  -Git
  -Node.js
  -Docker

  1. Fork and clone this repository to your computer <https://github.com/IanBelicina/conference-go.git>
  2. Build the project and run the project in docker using the following commands in the terminal
    - docker volume create pgdata
    - docker-compose build
    - docker-compose up
  3. Open Docker desktop to confirm all of your containers are running.
  4. View the react project at http://localhost:3000/
    - If your project does not load, stop the docker container for react.
    - Open a seperate terminal and navigate to the directory with pacakage.json.
    - Run the commands:
      - npm install
      - npm start
    - This will open a new window in your browser running the react application.


## Accounts 

The Accounts microservice in this application provides a set of CRUD APIs, allowing users to seamlessly manage and interact with account infromation. These APIs empower users to Create new accounts, Read existing accounts, Update account information, and Delete accounts as needed. Below is a table of how you can access these endpoints and examples of expected input and output json responses.

| Action                     | Method | URL                                                 |
| -------------------------- | ------ | --------------------------------------------------- |
| Get all accounts   | GET    | http://localhost:8000/api/accounts/  |
| Get account                | GET    | http://localhost:8000/api/accounts/{str:email}/ |
| Update account  | PUT    | http://localhost:8000/api/accounts/{str:email}/ |
| Delete account  | DELETE | http://localhost:8000/api/accounts/{str:email}/ |
| Create account  | POST   | http://localhost:8000/api/accounts/             |

### Get all accounts


Response Body:

```
{
	"accounts": [
		{
			"email": "ian@example.com",
			"first_name": "Ian",
			"last_name": "Belicina"
		},
		{
			"email": "jiji@example.com",
			"first_name": "Jiji",
			"last_name": "Montenegro"
		},
	]
}
```

### Get account

Endpoint Input: {str:email}

Response Body:

```
{
	"email": "ian@example.com",
	"first_name": "Ian",
	"last_name": "Belicina"
}
```

### Update account
Endpoint Input: {str:email}
Input body:

```
{
  "first_name": "Noor",
  "last_name": "Sayid-Alexanderson"
}
```

Response Body:
```
{
	"email": "noor@example.com",
	"first_name": "Noor",
	"last_name": "Sayid-Alexanderson"
}
```

### Delete account
Endpoint Input: {str:email}

Response Body:
```
{
	"deleted": true
}
```

### Create account

Input body:

```
{
  "username": "ian",
  "email": "ian@example.com",
  "password": "yqVy8SSZ",
  "first_name": "ian",
  "last_name": "belicina"
}
```

Response body:
```
{
	"email": "ian@example.com",
	"first_name": "ian",
	"last_name": "belicina"
}
```


## Presentations 

The Presentations microservice in this application provides a set of CRUD APIs, allowing users to seamlessly manage and interact with presentation infromation. These APIs empower users to Create new presentations, Read existing presentations, Update presentation information, and Delete presentations as needed. Below is a table of how you can access these endpoints and examples of expected input and output json responses.

| Action                     | Method | URL                                                 |
| -------------------------- | ------ | --------------------------------------------------- |
| Get all presentations   | GET    | http://localhost:8000/api/conferences/{int:conference_id}/presentations/  |
| Get presentation                | GET    | http://localhost:8000/api/presentations/{int:conference_id}/ |
| Update presentation  | PUT    | http://localhost:8000/api/presentations/{int:conference_id}/{str: accepted or str:rejection}/ |
| Delete presentation  | DELETE | http://localhost:8000/api/presentations/{int:conference_id}/ |
| Create presentation  | POST   | http://localhost:8000/api/conferences/{int:conference_id}/presentations/             |

### Get all presentations
Response Body:
```
{
	"presentations": [
		{
			"href": "/api/presentations/3/",
			"title": "jiji is cool",
			"status": "SUBMITTED"
		}
	]
}
```

### Get presentation

Response body:

```
{
	"href": "/api/presentations/1/",
	"presenter_name": "Jiji",
	"company_name": "Jiji Inc",
	"presenter_email": "jiji@gmail.com",
	"title": "Jiji Talk",
	"synopsis": "Testing testing",
	"created": "2023-06-28T22:28:55.809740+00:00",
	"conference": {
		"href": "/api/conferences/1/",
		"name": "Oracle Developer Live"
	},
	"status": "SUBMITTED"
}
```

### Update presentation
Endpoint Input: {int: presentation_id} and {str: accepted or str:rejection}

Input body:

```
{
	"href": "/api/presentations/1/",
	"presenter_name": "Jiji",
	"company_name": "Jiji Inc",
	"presenter_email": "jiji@gmail.com",
	"title": "Jiji Talk",
	"synopsis": "Testing testing",
	"created": "2023-06-28T22:28:55.809740+00:00",
	"conference": {
		"href": "/api/conferences/1/",
		"name": "Oracle Developer Live"
	},
	"status": "SUBMITTED"
}
```

Response body:
```
{
	"href": "/api/presentations/1/",
	"presenter_name": "Jiji",
	"company_name": "Jiji Inc",
	"presenter_email": "jiji@gmail.com",
	"title": "Jiji Talk",
	"synopsis": "Testing testing",
	"created": "2023-06-28T22:28:55.809740+00:00",
	"conference": {
		"href": "/api/conferences/1/",
		"name": "Oracle Developer Live"
	},
	"status": "REJECTED"
}
```

### Delete presentation 
Endpoint Input: {int:presentation_id}

Response Body:

```
{
	"deleted": true
}
```

### Create presentation:

Body input:

```
{
	"presenter_name": "test3",
	"company_name": "test 3",
	"presenter_email": "test3@gmail.com",
	"title": "test3 test3",
	"synopsis": "test3 test3 test3 test3 test3 test3",
	"status": "SUBMITTED",
	"conference": "2"
}
```

Body response:
```
{
	"href": "/api/presentations/4/",
	"presenter_name": "test3",
	"company_name": "test 3",
	"presenter_email": "test3@gmail.com",
	"title": "test3 test3",
	"synopsis": "test3 test3 test3 test3 test3 test3",
	"created": "2023-06-22T23:36:17.600909+00:00"
}
```

## Attendees 
The attendees microservice in this application provides a set of CRUD APIs, allowing users to seamlessly manage and interact with attendee infromation. These APIs empower users to Create new attendees, Read existing attendees, Update attendee information, and Delete attendees as needed. Below is a table of how you can access these endpoints and examples of expected input and output json responses.

| Action                     | Method | URL                                                 |
| -------------------------- | ------ | --------------------------------------------------- |
| Get all attendees   | GET    | http://localhost:8001/api/conferences/{int:conference_id}/attendees/  |
| Get attendee                | GET    | http://localhost:8001/api/attendees/{int: attendee_id}/ |
| Update attendee  | PUT    | http://localhost:8000/api/attendees/{int: attendee_id}/ |
| Delete attendee  | DELETE | http://localhost:8000/api/attendees/{int: attendee_id}/ |
| Create attendee  | POST   | http://localhost:8001/api/conferences/{int: conference_id}/attendees/             |

### Get all attendees

Response body:
```
{
	"attendees": [
		{
			"href": "/api/attendees/{int: conference_id}/",
			"name": "Test",
			"conference": "New Conference 1"
		}
	]
}
```

### Get attendee

Endpoint input: {int: attendee_id}

Response body:

```
{
	"href": "/api/attendees/1/",
	"email": "jd@example.com",
	"name": "John Doe",
	"company_name": null,
	"created": "2023-07-13T20:43:49.537235+00:00",
	"conference": {
		"name": "Cat Conference",
		"import_href": "/api/conferences/6/"
	},
	"has_account": false
}
```

### Update attendee

Endpoint input: {int: attendee_id}

Input body:

```
{
	"email": "angelo@example.com",
	"name": "Angelo",
	"company_name": "BlogXS"
}
```

Response body:

```
{
	"href": "/api/attendees/5/",
	"email": "angelo@example.com",
	"name": "Angelo",
	"company_name": "BlogXS",
	"created": "2023-07-14T19:47:47.419524+00:00",
	"conference": {
		"name": "Blockchain USA Conference 2025",
		"import_href": "/api/conferences/1/"
	},
	"has_account": false
}
```

### Delete attendee

Endpoint input: {int: attendee_id}

Response body:

```
{
	"deleted": true
}
```

### Create attendee

Input body:
```
{
  "email": "angelo@example.com",
  "name": "Angelo",
	"conference": "/api/conferences/1/"
}
```

Response body:
```
{
	"href": "/api/attendees/5/",
	"email": "angelo@example.com",
	"name": "Angelo",
	"company_name": null,
	"created": "2023-07-14T19:47:47.419524+00:00",
	"conference": {
		"name": "Blockchain USA Conference 2025",
		"import_href": "/api/conferences/1/"
	},
	"has_account": false
}
```

## Locations 

The locations microservice in this application provides a set of CRUD APIs, allowing users to seamlessly manage and interact with location infromation. These APIs empower users to Create new locations, Read existing locations, Update location information, and Delete locations as needed. Below is a table of how you can access these endpoints and examples of expected input and output json responses.


| Action                     | Method | URL                                                 |
| -------------------------- | ------ | --------------------------------------------------- |
| Get all locations   | GET    | http://localhost:8000/api/locations/  |
| Get location                | GET    | http://localhost:8000/api/locations/{int: location_id}/|
| Update location  | PUT    |  http://localhost:8000/api/locations/{int: location_id}/ |
| Delete location  | DELETE | http://localhost:8000/api/locations/{int: location_id}/ |
| Create location  | POST   | http://localhost:8000/api/locations/             |


### Get all locations

Response body:
```
{
	"locations": [
		{
			"href": "/api/locations/4/",
			"name": "Columbia Tower",
			"id": 4
		},
		{
			"href": "/api/locations/1/",
			"name": "George R. Brown Convention Center",
			"id": 1
		},
		{
			"href": "/api/locations/5/",
			"name": "House",
			"id": 5
		},
		{
			"href": "/api/locations/2/",
			"name": "McCormick Place",
			"id": 2
		},
		{
			"href": "/api/locations/7/",
			"name": "Moda Center",
			"id": 7
		},
		{
			"href": "/api/locations/6/",
			"name": "Naruto House",
			"id": 6
		},
		{
			"href": "/api/locations/3/",
			"name": "Space Needle",
			"id": 3
		}
	]
}
```

### Get location

Enpoint input: {int: location_id}

Response body:

```
{
	"href": "/api/locations/{location_id}/",
	"name": "Naruto House",
	"city": "Seattle",
	"room_count": 1,
	"created": "2023-07-12T22:41:46.012805+00:00",
	"updated": "2023-07-12T22:41:46.012824+00:00",
	"picture_url": "https://images.pexels.com/photos/2441334/pexels-photo-2441334.jpeg",
	"state": "WA"
}
```

### Update location

Enpoint input: {int: location_id}
Input body:
```
{
  "name": "Columbia Tower",
  "city": "Seattle",
  "room_count": 10,
  "state": "WA"
}
```

Response body:

```
{
	"href": "/api/locations/4/",
	"name": "Columbia Tower",
	"city": "Seattle",
	"room_count": 10,
	"created": "2023-07-11T22:52:23.439036+00:00",
	"updated": "2023-07-11T22:52:23.439054+00:00",
	"picture_url": "https://images.pexels.com/photos/14775586/pexels-photo-14775586.jpeg",
	"state": "WA"
}
```

### Delete location

Endpoint input: {int: location_id}

Response body:
```
{
	"deleted": true
}
```

### Create location


Input body:
```
{
  "name": "Columbia Tower",
  "city": "Seattle",
  "room_count": 10,
  "state": "WA"
}
```

Response body:

```
{
	"href": "/api/locations/4/",
	"name": "Columbia Tower",
	"city": "Seattle",
	"room_count": 10,
	"created": "2023-07-11T22:52:23.439036+00:00",
	"updated": "2023-07-11T22:52:23.439054+00:00",
	"picture_url": "https://images.pexels.com/photos/14775586/pexels-photo-14775586.jpeg",
	"state": "WA"
}
```

## Conferences MicroService


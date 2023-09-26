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


## Accounts Microservice

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


## Presentations Microservice

## Attendees Microservice

## Locations Microservice

## Conferences MicroService


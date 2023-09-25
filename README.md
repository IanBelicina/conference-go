# ConferenceGo!

Conference Go is a web application that simplifies conference management for organizers while providing a user-friendly experience for attendees. Built with a robust tech stack and modern development practices, this application seamlessly brings together JavaScript, React, Python, Django, and employs a microservices architecture.



## How to Run this App
 -Required software
  -Git
  -Node.js
  -Docker

  1. Fork and clone this repository to your computer <[[https://gitlab.com/vancebelicina/project-beta](https://github.com/IanBelicina/wheel-works.git)](https://github.com/IanBelicina/conference-go.git)>
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

## Presentations Microservice

## Attendees Microservice

## Locations Microservice

## Conferences MicroService


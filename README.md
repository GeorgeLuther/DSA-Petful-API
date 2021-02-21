# Petful Server

## Summary

Live Link: https://petful-client-template.georgeluther.vercel.app/
Frontend Git: https://github.com/GeorgeLuther/DSA-Petful-API
Backend Git: https://github.com/GeorgeLuther/DSA-Petful-App

The intent of this app is to connect pets with people. Petful is a first come first serve pet adoption agency. Those who join the waiting list put into a queue. They can then see the available cats and dogs. When it is their turn they are given the choice between the cat and dog that have been in the kennel the longest. The API keeps track of the pets and people in the respective queues.

### API Functions

GET /api/dog

returns a sample dog

GET /api/cat

returns a sample cat

## Pets

GET /pets

returns the cat and dog who have been in the kennel the longest.

DELETE /pets/:type

deletes the 'cat' or 'dog' who has been in the kennel the longest.

## People

GET /people

returns all names on the people list

POST /people
body: {"person" : "your name"}

adds the name provided in the body to the bottom of the people queue and returns the list

DELETE /people

removes the name that has been in the people queue the longest

## Tech Stack

This project uses JavaScript, React, HTML, and CSS on the front end and Node with express on the backend. There is currently no database, but instead an JS implementation of a queue. The front end is hosted with Vercel and the backend is hosted with Heroku.
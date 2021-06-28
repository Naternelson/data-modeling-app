# React Demonstration
-- Api for Data Modeling Software 

Please Check out this video for a quick overview.
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/tBeZIz6GHAs/0.jpg)](https://www.youtube.com/watch?v=tBeZIz6GHAs)

## Premise 
- A React based Application, that allows users to upload csv file and run it through a data modeling program
- Users can create a secured account, upload a csv file, and change information about it.

## Components 
This project is split into two parts: frontend and backend.
- Frontend
-- React 17.0.2
-- Redux 4.1.0
- Backend
-- Ruby on Rails 6.1.3

## Features
Components will Redirect you to login if there is no authentication token. A JWT will be sent when logging in or signing up. Except for those interactions, you cannot access any other part of the Rails API without a JWT.

A Multi-level form to send files utilizing axios and the carrierwave gem. Files then are stored using Rails API.

Custom Redux Middleware for api calls and responses for calls for async dispatches.


## Setup
### ENV
Both the Rails and React application employ hidden environment variables. This will not be included in the  repositiory so be sure to add .env files to both programs. 

RAILS /backend/.env: 
``` JWT_SECRET=my-secret-key```

REACT /frontend/.env:
```REACT_APP_BASE_URL=http://localhost:3001```
Remember in React application, an ENV variable must be prefaced with "REACT_APP".

### CORS
The Rails Application implements CORS, so if you are coming from a server other than ``` http://localhost:3000 ``` be sure to edit the ```/backend/config/initializers/cors.rb ``` file.

### Installation
From your bash line 
``` 
$ cd /backend
$ bundle install
$ rails db:migrate
```


To install the gems and dependencies for the RAILS API

``` 
$ cd /frontend
$ npm install
```
To install the node packages and dependencies for the React App, this may take a sec.

### Launch Servers
Be sure to launch your servers on different port; if you're npm start on port 3000 for React, be sure to launch rails on a different port.
``` $/backend rails s -p 3001 ```

Start the React Server with
``` $/frontend npm i ```

# Licencing
Go crazy!




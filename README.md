# Truth or Dare API

## Preps

Prior to deploying the API, certain preparatory steps must be completed:

1. Install all necessary dependencies by running the command `npm install`.
2. Create a file named `.env` in the root directory of this project. Within this file, declare an environment variable `BACKEND_PORT` and assign it your preferred port number, for example, `BACKEND_PORT=8080`. If the `BACKEND_PORT` was not specified, the default is `8080`. 
3. Within the `.env` file, declare another environment variable `FRONTEND_PORT` to allow the front end to make connection with the backend, for example, `FRONTEND_PORT=3000`. If the `FRONTEND_PORT` was not specified, the default is `3000`.
4. Whitin the `.env` file, declare the variable `OPENAI_API_KEY` to have the access to the AI.



## Run

Running the command `npm start` will let the server go live.



## Endpoints

This API offers two primary endpoints:

- `/truth`
- `/dare`

For each endpoint, the client must specify the desired language and target audience for the game. For instance, the URL `http://localhost:8080/truth/english/family` would request a random *truth* question suitable for an *English-speaking* audience categorized as *family-friendly*.

### Supported Languages

- `english`
- `spanish`
- `french`
- `latin`
- `mandarin`

### Supported Audiences

- `family`
- `adults`
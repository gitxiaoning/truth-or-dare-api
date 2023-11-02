# Truth or Dare API

## Preps

1. Prior to deploying the API, certain preparatory steps must be completed:
   1. Install all necessary dependencies by running the command `npm install`.
   2. Create a file named `.env` in the root directory of this project. Within this file, declare an environment variable `PORT` and assign it your preferred port number, for example, `PORT=8080`.



## Endpoints

This API offers two primary endpoints:

- `/truth`
- `/dare`

For each endpoint, the client must specify the desired language and target audience for the game. For instance, the URL `http://localhost:8080/truth/english/family` would request a random *truth* question suitable for an *English-speaking* audience categorized as *family-friendly*.

### Supported Languages

- English
- Spanish

### Supported Audiences

- Family
- Adults
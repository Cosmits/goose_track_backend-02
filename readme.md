# Goose Track Project Backend
The Goose Track Project Backend serves as the application's backend, offering a range of valuable functionalities for user and task management. It facilitates tasks like user authentication and authorization, user data manipulation, task creation and modification, as well as the management of reviews and various other beneficial features.

## Functionality

### User Authentication and Authorization
1. Registering new users while allowing for email confirmation.
2. Allowing registered users to log in to the system.
3. Enabling users to modify and update their personal information.
4. Confirming user authorization.
5. Conducting email verification.
6. Sending password reset emails to users who have forgotten their passwords.
7. Facilitating password changes.


### User Task Management
1. Introducing new tasks for users.
2. Modifying and refreshing user tasks.
3. Removing tasks based on their unique IDs.
4. Fetching a comprehensive list of the user's tasks for the present month.
5. Populating the database with dummy tasks for frontend testing purposes.


### User Review Management
1. Incorporating fresh reviews for the user.
2. Modifying and updating user reviews.
3. Removing user reviews based on their unique IDs.
4. Fetching a complete list of all reviews.


### Configuration of Environment Variables
In the project's root directory, create a .env file and configure environment variables to suit your requirements. It's important to note that these are merely sample variables. For security reasons, refrain from including .env files in your repository. You can use .env.example as a reference for the configuration. Need to configure the oauth configuration in [Google Cloud console](https://console.cloud.google.com/apis/credentials)


```plaintext

DB_HOST=HOST+DB
PORT=5000
JWT_SECRET=SECRET
UKR_NET_EMAIL_FROM=mail.com
UKR_NET_EMAIL_PASSWORD=pass
BASE_URL_BACK=http://localhost
BASE_URL_FRONT=http://localhost
GOOGLE_CLIENT_ID=*.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=123-456-7890

```

### Backend
[Goose Track Backend Swagger](https://goose-track-backend-02.onrender.com/docs/)
[Goose Track Backend Postman](https://documenter.getpostman.com/view/29075567/2s9YXiZgfD#c4670345-463e-48a6-9224-6ddd02a4ea5e)


### Frontend
[Goose Track Project Frontend](https://cosmits.github.io/goose_track_frontend-02/)

[Goose Track Project Frontend Git](https://github.com/Cosmits/goose_track_frontend-02)


### Team Lead 
[Hennadii Samofal](https://github.com/Cosmits)

### Scrum Master
[Daryna Merkulova](https://github.com/DarinaMerkulova)


### Development Team Backend

1. [Hennadii Samofal](https://github.com/Cosmits)
2. [Illia Shatokhin](https://github.com/Illia-Shatokhin)
2. [Kateryna Kharkova](https://github.com/KaterinaKha)
3. [Gabriella Marusyak](https://github.com/GabriellaMar)
4. [Ruslana Onyshchuk](https://github.com/Ruslaana)


### Commands:

- `yarn start` &mdash; server start in production mode
- `yarn start:dev` &mdash; start the server in development mode
- `yarn lint` &mdash; run a code check run with eslint, must run before each PR and fix all linter errors
- `yarn lint:fix` &mdash; the same linter check, but with automatic fixes for simple errors
- `yarn test` &mdash; running tests
- `yarn clearCache` &mdash; clear the test cache

### Create files:  
.env.development  
.env.production  
.env.test

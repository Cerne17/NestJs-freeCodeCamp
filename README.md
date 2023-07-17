This is the step by step guide to programming a full functional REST API with NestJs, by freeCodeCamp (bookmark application)
----------------------------------------------------------------
CHAPTER 1: PROJECT SETUP

  We won't need the app.service.ts, app.controller.ts and the app.controller.spec.ts files
  Thus, we delete them in the app.module.ts file.

  The app.module.ts file is the main module of the application, responsible for importing all the other modules that we are going to develop.
----------------------------------------------------------------
CHAPTER 2: MODULES

  What is a module?
  A Module is a class, anotated with the @Module() decorator. 
  A decorator is a function, that add more properties to the class/function/code itself. Adding more metadata to it.
  A Module can import other modules, controllers and providers.

  Organizing Modules into features to make the app easier to modularize the code and make it more scalable.
----------------------------------------------------------------
FEATURES: CREATE USER/AUTHENTICATE THE USER

  MODULES ARE TO BE ADDED TO FEATURE DIRECTORIES, THE ONLY MODULE THAT IS ALLOWED NOT TO FOLLOW THIS CONVENTION IS THE APP.MODULE.TS (THE MAIN MODULE OF THE APPLICATION) -> IT IMPORTS ALL THE OTHER MODULES
----------------------------------------------------------------
CREATING THE auth DIRECTORY MANUALLY:

  The controller call the service, receiving a request from the client, treating it through the service and returning it back to the client.
----------------------------------------------------------------
CREATING THE user AND bookmark MODULES VIA THE NEST CLI:

  In the terminal, insert:
    nest g module user
    nest g module bookmark
----------------------------------------------------------------
ADDING THE LOGIN LOGIC:

  Separating the logic in controllers and services.
  Controllers ->        Receives requests and returns responses
  Services/Providers -> Executes the business logic
  
  In the auth module, we create a controller and a service file 

----------------------------------------------------------------
COMBINING BUSINESS LOGICS WITH THE DATABASE:

  We'll use docker.
----------------------------------------------------------------
CREATING THE DATABASE

  Using the docker compose.

  To run the database, after configuring the docker-compose.yml
  file, we open a terminal and insert the following:

    docker compose up dev-db -d
    where dev-db is the name of the database that we want to run
    -d is to run the database in the background

  (Learn a bit more about docker, because I didn't understand
  this part 100%) 

----------------------------------------------------------------
HOW TO ACESS THE DOCKER DB

  Prisma (we could use typeorm and others)
  Prisma will create the database structure and interact with 
  the docker database.

  Installing Prisma:
    Prisma needs two libraries to be installed: 
    1. Prisma CLI (maintaince):
      npm install @prisma/client
    2. Prisma itself:
      npm install prisma
  
  Initializing prisma:
    npx prisma init (generates some boilerplate files)

  The prisma schema.prisma file is where we declare our models

  Prettier plugin for Prisma:
    npm i -D prettier-plugin-prisma

  Change, in the .env file, the information according 
  to docker-compose.yml

----------------------------------------------------------------
RUNNING PRISMA:

  In need of help: npx prisma --help

  Generating the migration: npx prisma migrate dev
  When running this code, prisma also runs - under the hood - 
  the command npx prisma generate, which takes the schema and 
  created typescripts types for your entities

  So, we can now go to the auth.service.ts file and import the
  User and Bookmark types for using directly in te code.

----------------------------------------------------------------
PRISMA STUDIO:

  
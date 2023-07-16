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
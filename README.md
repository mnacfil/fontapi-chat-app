# Melvin Chat App

A chat app where user chat his friend, know when his/her frind is online or not. User can receive notification and real time message.

## Getting Started

### Running this chat app on your local

Clone this repo by typing in your command line.

    git clone git@github.com:mnacfil/fontapi-exam-chat-app.git

After cloning, you will see two folder name, server and client.

the server contains the backend logic.
the client contains the frontend logic,

Navigate to server folder by typing.

    cd ./server
In, server folder install all the dependencies by typing. 

    npm install
In order to start the server in development mode, you need an .env file 
which contains the mongo_db connection url, token_secret, token_expiration.

To add that, make a file called .env in the root directory of server folder
and copy this value. 

MONGO_URL = mongodb+srv://mnacfil:phidias22@test-projects.93f5pnx.mongodb.net/My-Chat-app?retryWrites=true&w=majority
TOKEN_SECRET= QWERTYUIOP
TOKEN_EXPIRATION = 2d

After creating the env file you can now start the server by typing this command. 

    npm run dev

this will start the server in development mode. You will see on the log that the
server is listening on port 8080

note: if you already use the port 8080 in your local, you can simply change the value of it
under the app.js file and look for a variable name port.

Once you succesfully run the server, go to client folder by typing this command 

    cd ../
Once you succesfully run the server, go to client folder by typing this command 

    cd ../client

On client folder, install the packages or dependencies by typing, 

    npm install 
    
Once the installation is finish, you can now start the app by typing 

    npm start
    
this will start the app in localhost:3000

## How to use and test the app

Once the server run and client start the app, You need to open new browser in incognito mode since
I save the token and user details in localStorage, if you dont do that you will login the same user for
every browser you open. Once you open two browser, one is in incognito mode and one is regular browser,
you can login or register the user. I will give sample user in order for you to test it, otherwise you 
can create your own user and this will save in my mongodb. 

### Sample user

email: melvin@gmail.com
password: passw0rd

email: apple@gmail.com
password: passw0rd

email: gates@gmail.com
password: passw0rd

## Built With

- Create-react-app boilerplate
- React, Context API, Styled-components
- NodeJS, Mongoose, Mongodb, ExpressJs


## Author
- **Melvin Nacfil**
  [linkedIn](https://www.linkedin.com/in/melvin-nacfil-9596a8206)


// const express = require( "express" );
import express from 'express';
import {Request, Response, NextFunction} from "express";
import cors from 'cors';

if(process.env.NODE_ENV !== "production") {
  if(!require("dotenv").config()) {
    throw new Error("You must add a .env file.");
  }
}

const app: express.Application = express();

import path from "path";
import database from "./tools/database";
import login from "./services/login";
import getAllUsers from "./services/getAllUsers";
import blockUser from "./services/blockUser";
import addNewUser from "./services/addNewUser";
import me from "./me";
import session from "express-session";
import bodyParser from "body-parser";

database();

const mongoDBStore = require("connect-mongodb-session")(require("express-session"));

const expressSessionSetup = {
  secret: process.env.SESSION_SECRET!,
  resave: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    secure: false,
    // httpOnly: false,
    // sameSite: false,
  },
  // proxy: false,
  saveUninitialized: true,
  store: new mongoDBStore({
    uri: process.env.SESSION_URI!,
    collection: process.env.SESSION_COLLECTION!
  }),
  name: process.env.SESSION_NAME!,
  
};

const staticClient = express.static(path.join(path.resolve(__dirname), "..", "client", 'build'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({limit: "1mb"}));
app.use(session(expressSessionSetup));

app.use('/', staticClient);
app.get('/', (req, res, next) => res.sendFile(path.join(path.resolve(__dirname), "..", "client", 'build')));

app.use(cors());

app.get('/me', me);
app.post('/login', login);
app.post('/add/new/user', addNewUser);
app.get('/get/all/users', getAllUsers);
app.put('/block/user', blockUser);

app.get('/logout', (req,res,next)=>{
  req.session.destroy((err: any)=>{});
  res.redirect('/');
})

app.use("*", staticClient);

// start the Express server
app.listen( 3030, () => { console.log( `server started at http://localhost: 8000` ); } );

// karbeb
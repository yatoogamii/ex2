// const express = require( "express" );
import express from 'express';
import {Request, Response, NextFunction} from "express";

if(process.env.NODE_ENV !== "production") {
  if(!require("dotenv").config()) {
    throw new Error("You must add a .env file.");
  }
}



// 2.. Mongo : nested documents	React : login , soft avec fetch, mise a jour de bdd nested etc ...   login ??
// Faire un model : le jeune en recherche de stage a une liste d'entreprises à cont&acter, il doit pouvoir en ajouter et retirer
// Ex 3/4 : faire un second modèle



const app: express.Application = express();

import path from "path";
import database from "./tools/database";

database(process.env.DATABASE_URL!);

const staticClient = express.static(path.join(path.resolve(__dirname), "..", "client", 'build'));
// define a route handler for the default home page
// app.get( "/", ( Request, Response ) => {
//     Response.send( "Hello world!" );
// } );
//
app.use('/', staticClient);
app.get('/', (req, res, next) => res.sendFile(path.join(path.resolve(__dirname), "..", "client", 'build')));
app.use("*", staticClient);
// start the Express server
app.listen( 3000, () => { console.log( `server started at http://localhost:${ 3000 }` ); } );

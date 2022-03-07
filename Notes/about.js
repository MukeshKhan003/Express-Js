/***Express JS */
/*******
 *  What is A Express :
 *  -----------------
 * 
 *  Express is a fast, unopinionated and minimalist web framework for Node Js.
 * 
 *  Express is a "Server-side" or "back-end" framework. It is not comparable to client-side frameworks
 *  like React, Angular and Vue. It can be used to combination with those frameworks to build full  *  stack applications.
 * 
 *  Why use Express ?
 *  -----------------
 * 
 *  1. Make building web applications with Node.js much easier.
 *  2. Used for both server render apps as well as API/Microservices
 *  3. Extremely light, fast and free
 *  4. Full control of request and response
 *  5. By for the most popular node framework 
 *  6. Great to use with client side frameworks as it's all Javascript
 * 
 *  What to know first ? 
 *  --------------------
 * 
 *  1. Javascript fundamentals (Objects, Arrays, Conditional and etc)
 *  2. Basic Node.Js and NPM.
 * 
 *  It may help to learn these first
 *  --------------------------------
 * 
 *  1. HTTP status code 
 *  2. JSON
 *  3. High order Array methods - forEach, map, filter
 *  4. Arrow functions
 * 
 * *******************************************
 *                                           
 *  Basic Server Synatx:                        
 *  --------------------        
 * 
 *  const express = require('express');
 * 
 *  ****Init Express***********
 *  const app = express();
 * 
 *  ****Create your endpoints/route handlers
 *  app.get('/', function(req, res){
 *      res.send('Hello World');
 *  });
 * 
 *  ****Listen on a port***
 *  app.listen(5000);
 * 
 *  *********************************************
 * 
 * *********************************************************************************
 *  Basic Route Handling
 *  --------------------
 * 
 *  1. Handling requests/routes is sample
 *  2. app.get(), app.post(), app.put(), app.delete(), etc
 *  3. Access to params, query strings, url parts, etc
 *  4. Express has a router so we can store routes in separate files and export
 *  5. We can parse incoming data with th Body Parse
 * 
 *  app.get('/', function(req, res){
 *      ** Fetch from database
 *      ** Load pages
 *      ** Return JSON
 *      ** Full access to request and response
 *  })
 * ************************************************************************************
 * 
 *  ***Express Middleware***
 * 
 *  Middleware functions are functions that have access to the request and response object. Express  
 *  has build in middleware but middleware also comes from 3rd party packages as well as custom 
 *  middleware.  
 * 
 *  1. Execute any code
 *  2. Make changes to the request/response objects
 *  3. End response cycle
 *  4. Call next middleware in the stack
 * 
 */








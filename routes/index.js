var express = require('express');
var router = express.Router();

/**
 * With Express, you are given the router.METHOD() methods for handling each specific HTTP method. However, it is possible to have
 * multiple HTTP methods that affect the same path. Instead of using router.Method1(samepath), router.Method2(samepath), etc.,
 * Express lets you handle all Methods for a single path naturally with the router.route() method. You can still control what additional
 * middleware is called using the next() method.
 * 
 * If you need to do some functionality involving all HTTP methods, you can use the router.all() method to do so.
 * 
 * Steps:
 * 1.) Use router.route() to set up a single route for the '/' path.
 * 2.) For all HTTP methods, include a simple message.
 * 3.) For GET/PUT/POST/DELETE methods, add another string saying which request was executed.
 *     Output both strings into the console log at this moment.
 * 4.) For the GET request, render the template.
 * 5.) For the PUT and DELETE request only, make a special middleware function that adds another string and outputs the string
 *     and the specific Method that called the middleware into the console log. This method should also redirect the user back to the template.
 */
router.route('/')
/**
 * Code goes here.
 */

module.exports = router;

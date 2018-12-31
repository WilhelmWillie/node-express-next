# Node-Express-Next Boilerplate

Boilerplate for developing web apps with Node.js, Express, and Next.js. Next.js
allows for an awesome React development experience as it supports file-based
routing, automatic code splitting, and server side rendering.

This boilerplate specifically supports Next + Express SSR and uses next-routes to
allow for pretty routes (/link/:id vs. /link?id=XYZ)

## Installation and Usage
* Clone this repository onto your local system: `git clone https://github.com/WilhelmWillie/node-express-next.git`
* CD into directory and run `npm install`
* Run `npm run dev` to start server
  * Changes to JS code will restart server [To-do: ignore changes made to pages and components directory]

## To-Do
* Add support for CSS frameworks (i.e. Bulma)
* Implement basic CRUD routes for Link model
* Build out actual React interface for interacting w/ API
* Add linting support
* Demonstrate how to easily deploy this app to the cloud

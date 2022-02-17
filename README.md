# Coding Alliance Tech Blog

![MIT License](https://img.shields.io/badge/license-MIT-important)

## Table of Contents

- [Description](#description)
- [Built With](#built-with)
- [Installation Instructions](#installation-instructions)
- [Usage Instructions](#usage-instructions)
- [License Section](#license)

- [Contact Me](#contact-me)

## Description

This app allows a user to post an article from another source and other users can comment on the post.

## Built With

- HTML
- CSS
- JavaScript
- Insomnia (for testing)
- Jest (for testing)
- Handlebars.js
- MySQL
- Sequelize
- dotenv (to create the environmental variables)
- JawsDB (to deploy mySQL to Heroku)

## Installation Instructions

### Node.js Installation

Make sure that you have Node.js installed on your computer by entering node -v in the command line. If successful, the command prompt will return a version number. If not, try reinstalling Node.js by following this link: https://nodejs.org/en/ and clicking on the LTS version. If you are on Windows, make sure to look for the section that says `Download for Windows (x64)`. If you are using macOS, make sure to look for the section that says `Download for MacOS (x64)`

### Clone the Code

Once Node.js is downloaded, click on the green code button and copy the link to this repository. Then open up your favorite code editor and open the terminal. In the terminal use `cd` to go to the root directory you want this repository to be cloned to. Finally, in the terminal, type `git clone <file link>` to clone this repository to your directory.

### Express.js Installation

You must also install the Express.js npm package to run the server. Since Express.js is an npm package instead of being built directly into node.js, you must type `npm init` into the command line to allow npm packages to be installed. Next, go to the server.js file, and in the command line, type `npm install express` to install Express.js on your computer. For documentation on Express.js follow this link https://expressjs.com/en/4x/api.html.

## Usage Instructions

To see and use the deployed site, follow this link to Heroku: https://tech--blog--application.herokuapp.com/

1. After following the link, click the login button at the top right of the screen to be navigated to the login page.

2. Once on the login page, either login using the top login form, or create a new account using the bottom sign-up form.

3. After you login, you will be navigated to the homepage.

4. On the homepage, you can click on the comments button under a post to add a comment on a post.

5. If you wish to create a new post, click on the dashboard button to the left of the logout button at the top of the screen to be navigated to your dashboard where you can create a new post, or view your existing posts.

## License

Permission to use this application is granted under the MIT license.
Click on the link for more information: [MIT License Information](https://opensource.org/licenses/MIT)

## Tests
### Jest
Jest was used to test the helper functions, which are functions that can be called from a handlebars.js template. 

1. To see how these tests work, install jest using the command npm i. This should install jest as well as all the other dependencies for this project.

2. After jest is installed, make sure to go to your `package.json` file, and look under `scripts`. In order for jest to work, you must have `"test": "jest"` written in the `scripts` section. 

3. Next, type `npm test` in the command line to run the tests. After running the `npm test` command, you should see passing tests in the command line as shown below.

![Passing Tests](https://user-images.githubusercontent.com/88728912/154498773-3b3107dc-8c94-4242-9005-68ceabadb2d4.png)

### Insomnia

Insomnia was used to seed and test the routes for this app. There is no command for running these tests. 
1. To test the application, download insomnia. For more information on Insomnia, follow this link: https://docs.insomnia.rest/.

2. Run `npm run seeds` in the command-line to get preseeded data. 

3. Run `npm start` to start the server

4. Go to Insomnia and test for the route you want to test. Make sure to change the route from GET to POST, PUT, Or DELETE depending on what you want to test for. 

5. The routes will be as follows (change users to posts or comments if you would like to test those routes and change :id to the id of the user, post, or comment you want to look for):
- GET (all users): http://localhost:3001/api/users 
- GET (one user): http://localhost:3001/api/users/:id
- POST: http://localhost:3001/api/users
- PUT: http://localhost:3001/api/users/1
- DELETE: http://localhost:3001/api/users/2


## Contact Me

GitHub Link: (https://github.com/nicnolen)<br>
Email Address: <nicnolen@ymail.com>

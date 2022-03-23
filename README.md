# What's for dinner? App

## Summary

A problem I'm often phasing is regarding the never ending question of, what should we have for dinner? I have my 2 kids every other week and on that particular week, in the middle of everything else that needs to be done, my imagination is not always what I'd hope. Because of that, together with my children I have written down (on paper) a range of dishes that everyone likes and then when we try to decide we can look at that one. In this app I have gathered all these dishes. And you can also generate a random suggestion of what to pick. What's for dinner?

## Vision

To create and inspiring app for me and my kids, helping us in our daily life, making it more fun to decide on dinner. Engaging my children in the process always makes them more eager to eat and help with the cooking. The idea is that they can add their own ideas when they arise. I decided that it would only be food that we ourselves add, because then it would be more likely that it would be something they like. If there are recipes that we want to add, then that will be link, but many dishes don't have recipes.

## What I would like to develop

Initially the plan was also to have a user register and login, which I started but put aside for now. The I would include a JWT token and use that for authentication. This would be good if anyone else would like to use the app.

For now in the frontend I can only create (POST) a new dish and read (GET) what already exist in the database, but I can't delete or update (PUT and DELETE). This exist in the backend but is not in the frontend, that will be added.

Another idea would be to include recipe ideas from another API, for inspiration.

Also I would like to have some visual representation of our dishes, maybe photograph them at home. Engaging the kids even more.

Next step would also be to generate a whole menu for the week, and then be able to save those as favorites.

## What would be good added

Write things that I did not include. Like statemanagment, tests etc.

## Tech

This is a MERN app using MongoDB, Express.js, React and Node.js. It is deployed through Herouku.
The backend is set up Node.js using Express for the routing, connecting to a database in MongoDB together with Mongoose. It's developed locally in VScode.

## To the project

To start the project locally you need to clone it from here and then run:

### `npm install`

## To start frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

## To start backend server

### `npm run server`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

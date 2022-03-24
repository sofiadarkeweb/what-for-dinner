# What's for dinner? App

## Summary

A problem I'm often phasing is regarding the never ending question of, what should we have for dinner? I have my 2 kids every other week and on that particular week, in the middle of everything else that needs to be done, my imagination is not always what I'd hope. Because of that, together with my children I have written down (on paper) a range of dishes that everyone likes and then when we try to decide we can look at that one. In this app I have gathered all these dishes. And you can also generate a random suggestion of what to pick. What's for dinner?

## Vision

To create and inspiring app for me and my kids, helping us in our daily life, making it more fun to decide on dinner. Engaging my children in the process always makes them more eager to eat and help with the cooking. The idea is that they can add their own ideas when they arise. I decided that it would only be food that we ourselves add, because then it would be more likely that it would be something they like. If there are recipes that we want to add, then that will be link, but many dishes don't have recipes.

## What I would like to develop (and was asked for but did not manage within the time)

Initially the plan was also to have a user register and login, which I started but put aside for now. The I would include a JWT token and use that for authentication. This would be good if anyone else would like to use the app. This would have added that extra layer of state management and validation for the app.

For now in the frontend I can create (POST) a new dish and read (GET) what already exist in the database, but I can't delete or update (PUT and DELETE). This is set up in the backend but is not in the frontend, that will be added later.

Reusable code, the button is a reusable component, I would like to incorporate a few more key elements if I build out the app.

The structure in the front end, I would like to divide it up more into components, normally I prefer to have as little as possible in App.js, however again, because of time, a little bit too muc code ended up there.

Another idea would be to include recipe ideas from another API, for inspiration...

Also I would like to have some visual representation of our dishes, maybe photograph them at home. Engaging the kids even more. Perhaps add a link below the name of the dish for some more info, linking to a recipe or another page within this app with more content added.

Next step would also be to generate a whole menu for the week, and then be able to save those as favorites.

I did not do any tests for this, it's a small app but testing is always good to bare in mind. That would have been good to add.

## Tech

This is a MERN app using MongoDB, Express.js, React and Node.js. It is deployed through Herouku.
The backend is set up Node.js using Express for the routing, connecting to a database in MongoDB together with Mongoose. It's developed locally in VScode.

## To run the project

## To start the backend

Run:

### `npm install`

## To start frontend

Cd into frontend and run:

### `npm install`

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

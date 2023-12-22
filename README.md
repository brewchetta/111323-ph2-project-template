# Project Setup Steps w/ React Router

## Getting Started

To create your repo first run `npx create-react-app project-name` substituting `project-name` with your project's name (you can always change this later).

After everything's done installing you can `cd project-name` and open it with `code .` to see your files.

## What Can you Delete?

You can delete a lot of the boilerplate files from the project `src` if you want:

- `setupTests.js`
- `App.test.js`
- `reportWebVitals.js`
- `App.css` (you can write all your css in the index.css if you want)

If you delete these files then you'll also need to delete anything related to `reportWebVitals` from the `index.js` and the line `"test": "react-scripts test"` from the `package.json`.

## How to Architect Your App

I often create a new `components` folder in `src` and move `App.js` into it. From there you can add any and all components into your `components` folder.

One thing I'd recommend is to create a sub-directory for each router page. For example, if you're making a gift giving app and you have three or four components for the `NewGift.js` page you should put them all in a `NewGift` folder/directory.

This is only one way of architecting your app, there are many others...

## Setting Up React Router

To begin, inside your project terminal run `npm install react-router-dom`. After a brief install you should be able to see your new package in `package.json`.

It's good practice to create a `routes.js` file in your `src` which controls all your routes. An example of your routes might look like the one in this project. Be sure to export it.

Import the routes in `index.js` along with `RouterProvider` and `createBrowserRouter` from `react-router-dom`.

Below the imports your create your router with code that looks like this:

```js
import routes from './routes'

const router = createBrowserRouter(routes)
```

Remove the code inside `root.render` and replace it with your `RouterProvider` so it looks like this:

```js
root.render( <RouterProvider router={router} /> );
```

## Adding a `db.json`

Create a `db.json` at the top level of your project. Use the code below as a template:

```json
{
    "whatever": [
        {
            "id": 1,
            "name": "Something"
        },
        {
            "id": 2,
            "name": "Something else"
        }
    ]
}
```

Replace `"whatever"` with the name of your resource (for example an app about gifts might call it `"gifts"`) and shape your data to your liking.

Inside your `package.json` add a new line in `scripts` to make it easy to run your server:

```json
"server": "json-server --watch db.json -p 8000"
```

You can replace `-p 8000` with whichever port you want for your fetch requests.

This will allow you to run your `db.json` using the command `npm run server`.

## Finishing Up

From here you should be able to build out the rest of your project. Because `create-react-app` makes this a repo, you should be able to go to github and use the `upload an existing project` directions to upload it.

Good luck and have fun!
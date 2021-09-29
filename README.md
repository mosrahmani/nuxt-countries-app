# Countries


## Technologies
- [NuxtJs](https://nuxtjs.org) (The Intuitive VueFramework)
- [TailwindCss](https://tailwindcss.com) (The Modern utility-first CSS framework)

## Demo

You can see the demo of the website that was deployed on [Heroku](https://heroku.com) through the following link: [Website Demo](http://countries-rahmani.herokuapp.com)

## Running with Docker

You can run the project by doing the following steps using Docker

```bash
# Building the Container
$ cd
$ docker build -t countries .

# Running the Container
$ docker run -it -p 3000:3000 countries
```
After you run this commands, you should be able to visit http://localhost:3000 in your browser.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

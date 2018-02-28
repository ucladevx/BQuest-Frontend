# PickMyBruin - Front end

built with:
* React.js + Redux
* Webpack
* scss

## setup (development)

- clone the repository and `cd` in
- `npm install` or `yarn` to install node modules
- `make dev` to launch webpack-dev-server
    - visit `localhost:8080`

## run inside a docker container

- `make build_image` to build the latest bundle inside a baked image
- `make run` to start nginx inside of a docker container

## Project Organization
```
.
├── images
│   ├── landingPage
│   │   └── profile
│   └── profile
├── lib
│   ├── build
│   └── images
│       └── landingPage
├── pages
└── src
    ├── components
    │   ├── loading
    │   ├── navbar
    │   ├── pages
    │   │   ├── completeRegistration
    │   │   ├── home
    │   │   │   └── topBar
    │   │   ├── login
    │   │   ├── mentorDetail
    │   │   ├── profile
    │   │   ├── register
    │   │   ├── requests
    │   │   └── search
    │   ├── searchBar
    │   └── util
    │       ├── Button
    │       └── divider
    ├── container
    ├── reducer
    ├── selectors
    └── style
```

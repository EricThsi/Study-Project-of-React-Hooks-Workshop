# React Hooks Workshop

## Requirements

- node `^2.x`
- npm '^6.14.x'

## Installation

```bash
$ git clone https://github.com/EricThsi/Study-Project-of-React-Hooks-Workshop <your-porject-name>
$ cd <your-porject-name>
$ npm init # or yarn
```

## Running the Project

```bash
$ npm start # or `yarn start`
```

## Project Structure

```text
├── build                           # All build-related code
├── public                          # Static public assets (not imported anywhere in source code)
│   ├── index.html                  # Main HTML page container for app
├── src                             # Application source code
│   ├── components                  # Global Reusable Components
│   ├── constants                   # Global Reusable Constants
│   ├── store                       # Global State
│   │   ├── store.ts                # Store with initial state
│   │   ├── storeContainer.ts       # Store container components
│   │   ├── actions                 # Global actions 
│   │   │   ├── actions.ts          # State actions constants
│   │   │   ├── actionsCreator.ts   # Action creator functions
│   │   └── reducers                # Global reducers
│   │       └── appReducer.ts       # Action reducers functions
│   └── styles                      # Application-wide styles 
├── tests                           # Unit tests
└── app.ts                          # Application entry
```

Enjoy this workshop!!!
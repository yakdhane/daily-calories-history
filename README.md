# Calories Tracker

A simple React application to track daily calories. The application allows users to add and delete food items and displays the total number of calories consumed for the day.

## Installation

To install the dependencies, run the following command:

```
npm install
```

## Usage

To start the application, run the following command:

```
npm start
```

The application will be available at `http://localhost:3000`.

## Docker

To run the application using Docker, run the following commands:

```
docker build -t calories-tracker .
docker run -p 3000:3000 calories-tracker
```

The application will be available at `http://localhost:3000`.

## Files

- `App.js`: The main component of the application.
- `AddFood.js`: A component to add new food items.
- `FoodList.js`: A component to display the list of food items.
- `Dockerfile`: A Dockerfile to build and run the application in a container.
## Charging Station Finder - An application which will assist you to get the locations of charging points for your electrical vehicles.

E-mobility charging stations are spread around the world and users want to find charging stations that fit their car configurations. A charging station can have 1 or more connectors (or plugs) that have different connector types (i.e. Type 2, CHAdeMO, CCS).

The objective of this little product is to lookup charging stations that are in a specific distance to the user and serve the connector type that the user's car requires and to present it in a map view with some additional information.

## Tech Stack

- JavaScript
- React
- CSS

## How to run the application

- Step 1: Clone or download the app: git clone https://github.com/aripan/chargingStation-finder.git
- Step 2: Enter the app directory: cd chargingStation-finder
- Step 3: Install dependency packages: npm install or yarn add (make sure you already have Node, npm/yarn installed)
- Step 4: Get your own API key to access data from Open Charge Map API as well as Mapbox access token to include Mapbox into your application.
- Step 5: Run the app: npm start or yarn start
- Step 6: Enjoy finding the charging points near you.

## Decision Tree

- The application is based on a simple decision tree.
- Depending on the choices of connector types and max distance from your location, a decision is made behind the scenes.

## Notes

- Sometimes the server responds slow, so please be patient.

- However, do check your browser console for any potential bad requests or errors.

- Raise an issue in case you find any.

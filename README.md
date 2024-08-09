# React Native App - ListView and DetailsView Screens

This project is a React Native application that fetches and displays data from an API using a `FlatList` (equivalent to Android's `RecyclerView`). The app is designed to support a landscape layout on tablets with a dedicated layout.

## Features
- Fetches data from the API: `https://api.restful-api.dev/objects`.
- Displays data in a list format (`FlatList`).
- Provides a detailed view of each item when selected.
- Supports dedicated landscape layout for tablets.

## Tech Stack
- **React Native**
- **Expo**: Used to build, develop, and test the app.
- **Yarn**: Used as the package manager.

## Installation and Setup Instructions

1. **Clone the repository:**
    ```
    git clone https://github.com/yschristian/ampersand-challenge.git
    cd ampersand-challenge
    ```

2. **Install dependencies using Yarn:**
    ```
    yarn install
    ```

3. **Run the app using Expo:**
    ```
    npx expo start
    ```

   This will start the Expo development server, and you can scan the QR code using the Expo Go app on your mobile device or run the app in an emulator.

## Dedicated Landscape Layout for Tablets
- The app includes a dedicated landscape layout for tablets, which adapts the user interface to better utilize the available screen space. This includes a grid layout in the ListView and an adjusted card layout in the DetailsView.

## Additional Libraries
- **axios**: For making HTTP requests to fetch data from the API.

## Assumptions and Design Decisions
- **Expo** was used to simplify the setup and development process. Expo provides a managed workflow that handles many native configurations for you.
- **FlatList** was used instead of `RecyclerView`, which is the native Android equivalent. This choice was made to maintain cross-platform compatibility in React Native.
- The landscape layout was optimized for tablets by detecting screen size and orientation, ensuring a better user experience on larger screens.

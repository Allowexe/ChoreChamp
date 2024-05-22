# Task Manager Application

## Project Overview

This is a task manager application that allows users to register, log in, create, update, delete, and view tasks. The project is divided into two parts:

- **Backend**: Built with Node.js, Express.js, and MongoDB.
- **Frontend**: Built with React Native and Expo.

## Backend Setup

1. **Navigate to the backend directory**:

   ```sh
   cd backend
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Create a `.env` file for environment variables**:

   ```sh
   touch .env
   ```

   Add the following variables to the `.env` file:

   ```
   MONGO_URI=your_mongo_db_uri
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the backend server**:
   ```sh
   nodemon server.js
   ```

The backend server should now be running on `http://localhost:3000`.

## Frontend Setup

1. **Navigate to the frontend directory**:

   ```sh
   cd frontend
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

3. **Setup the API's IP address**:

   ```sh
   vim api.js
   ```

   Add your IP address into the `api.js` file:

   ```js
   const API_URL = "http://192.168.X.X:3000"; // Your IP address here
   ```

4. **Start the Expo development server**:

   ```sh
   npx expo start
   ```

5. **Run the app on your device**:
   - For iOS: Use the Expo Go app to scan the QR code displayed in the terminal or browser.
   - For Android: Use the Expo Go app to scan the QR code displayed in the terminal or browser.

## Usage

### Register a New User

1. Open the app on your device.
2. Navigate to the registration screen.
3. Enter your username, email, and password.
4. Click the "Register" button.

### Log In

1. Open the app on your device.
2. Navigate to the login screen.
3. Enter your email and password.
4. Click the "Login" button.

### Create a Task

1. After logging in, navigate to the task list screen.
2. Click the "Create Task" button.
3. Enter the task title and description.
4. Click the "Save Task" button.

### View Task Details

1. On the task list screen, click on a task to view its details.

### Update Task Status

1. On the task detail screen, click the button to change the task status between "pending" and "done".

### Delete a Task

1. On the task detail screen, click the "Delete Task" button.

## Technologies Used

- **Backend**:

  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT for authentication

- **Frontend**:
  - React Native
  - Expo
  - Axios for API requests

## License

This project is licensed under the MIT license - see the [LICENSE](LICENSE) file for details.

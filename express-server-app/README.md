# Express Server Application

This is a simple Express server application that listens on port 8001. It is set up to use Nodemon for automatic code reloading during development.

## Project Structure

```
express-server-app
├── src
│   └── app.js          # Entry point of the application
├── package.json        # Configuration file for npm
├── yarn.lock           # Dependency version lock file
├── Dockerfile          # Instructions to build the Docker image
├── .gitignore          # Files and directories to ignore by Git
└── README.md           # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository** (if applicable):
   ```
   git clone <repository-url>
   cd express-server-app
   ```

2. **Install dependencies**:
   ```
   yarn install
   ```

3. **Run the server**:
   ```
   yarn start
   ```

   This will start the server using Nodemon, which will automatically reload the server when changes are made to the code.

## Docker

To build and run the application in a Docker container, use the following commands:

1. **Build the Docker image**:
   ```
   docker build -t express-server-app .
   ```

2. **Run the Docker container**:
   ```
   docker run -p 8001:8001 express-server-app
   ```

The server will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License.
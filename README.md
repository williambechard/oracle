# Oracle App

Oracle App is a web application with a backend powered by Python and Flask, and a frontend built with Angular, Ionic, and Capacitor. It leverages the AskSage API for language model interactions. This README provides an overview of the project structure and instructions for setting up and running the application.

## Project Structure

The project is organized as follows:


- **`backend/`**: Contains the Flask-based backend API.
    - `Dockerfile`: Defines the Docker image for the backend.
    - `.env`: Environment variables for local configuration (e.g., AskSage credentials). This file is not provided; you must create it yourself.
    - `app.py`: The main Flask application script.

- **`frontend/`**: Contains the Angular-based frontend application.
    - `Dockerfile`: Defines the Docker image for the frontend.

- **`docker-compose.yml`**: Configuration file for Docker Compose to set up and manage both frontend and backend services.

## Getting Started

Follow these steps to get the application up and running:

### Prerequisites

- **Docker**: Ensure Docker is installed on your machine. [Install Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: Install Docker Compose if it’s not included with Docker. [Install Docker Compose](https://docs.docker.com/compose/install/)
- **AskSage API Key**: You need an AskSage API key to interact with the language model. [Sign up for AskSage](https://asksage.com/)
- **Environment Variables**: Create a `.env` file in the `backend/` directory with the following content:

    ```bash
    EMAIL=<your-asksage-email>
    API_KEY=<your-asksage-api-key>````

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/williambechard/oracle.git
   ```
   
2. **Navigate to the Project Directory**

   ```bash
      cd oracle
   ```

3. **Make sure Docker is open and running, and start the containers**

   ```bash
    docker-compose up
    ```
 4. **Access the Application**
 
    The application will be available at `http://localhost:80` in your browser.
    Note that the application front end and the backend are both being served from the docker container
    The backend is serving data from `http://localhost:5000` and the frontend is serving the application from `http://localhost:80`
 
5. **Stop the Application**

   To stop the application, press `Ctrl+C` in the terminal where the `docker-compose up` command was run. Then, run the following command to stop and remove the containers:

   ```bash
   docker-compose down
   ```




import logging
from flask import Flask, jsonify, request
import os
from dotenv import load_dotenv
from asksageclient import AskSageClient
from flask_cors import CORS  # Import CORS
import requests

# Configure logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load environment variables from .env file
load_dotenv()

# Declare the global variables
stored_email = None
stored_api_key = None

@app.route('/login', methods=['POST'])
def login():
    global client  # Declare client as global to modify the global variable
    data = request.json
    email = data.get('email')
    api_key = data.get('api')

    if not email or not api_key:
        return jsonify({"error": "Email and API key are required"}), 400

    try:
        # Initialize the client after successful login
        client = AskSageClient(email, api_key)
        global stored_email, stored_api_key
        stored_email = email
        stored_api_key = api_key
        logging.info("Ask Sage client successfully initialized.")
        return jsonify({"message": "Login successful", "access_token": "dummy_token"}), 200
    except Exception as e:
        logging.error("Failed to initialize Ask Sage client: %s", str(e))
        return jsonify({"error": "Login failed. Please check your credentials."}), 401


@app.route('/status', methods=['GET'])
def status():
    auth_header = request.headers.get('Authorization')
    if not auth_header:
        return jsonify({"error": "No Authorization header"}), 401
    
    token = auth_header.split(' ')[1]
    # Here you would typically validate the token with the AskSageClient API
    # For now, we'll just return true if a token is present
    return jsonify(is_authenticated=bool(token)), 200

@app.route('/ask', methods=['POST'])
def ask():
    global client  # Declare client as global to modify the global variable

    try:
        print(f"Email: {stored_email}")
        if not client:
            return jsonify({"error": stored_email}), 401
            client = AskSageClient(stored_email, stored_api_key)
        data = request.json
        content = data.get("content")
        if not content:
            return jsonify({"error": "Content is required"}), 400

        # Query the Ask Sage API
        response = client.query(message=content)
        followUp = client.query_with_file(message="can you guess 3 follow up questions to the members originall question? " + content)
        return jsonify({"response": response, "followUp": followUp})
    except Exception as e:
        logging.error("Error during query: %s", str(e))
        # Retry login if query fails
        try:
            client = AskSageClient(stored_email, stored_api_key)
            response = client.query(message=content)
            follow_up_questions = response.get('follow_up_questions', [])
            return jsonify({"response": response, "follow_up_questions": follow_up_questions})
        except Exception as retry_e:
            logging.error("Retry login failed: %s", str(retry_e))
            return jsonify({"error": str(retry_e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

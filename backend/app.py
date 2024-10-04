import logging  # Ensure this line is include
from flask import Flask, jsonify, request
import os
from dotenv import load_dotenv
from asksageclient import AskSageClient
from flask_cors import CORS  # Import CORS
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from datetime import timedelta


# Configure logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load environment variables from .env file
load_dotenv()

# JWT Configuration
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET')  # JWT secret key
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)  # <-- Set token expiration here
jwt = JWTManager(app)

# Declare the global variable
global client
client = None


@app.route('/login', methods=['POST'])
def login():
    global client  # Declare client as global to modify the global variable

    data = request.json
    email = data.get('email')
    api_key = data.get('api')

    if not email or not api_key:
        return jsonify({"error": "Email and API key are required"}), 400

    try:
        client = AskSageClient(email, api_key)  # Initialize without logging
        client.logger = logging.getLogger(__name__)  # Set logger if not already set
        access_token = create_access_token(identity=email)
        return jsonify({"message": "Login successful", "access_token": access_token}), 200
    except Exception as e:
        logging.error(f"Failed to initialize Ask Sage client: {str(e)}")
        return jsonify({"error": "Login failed. Please check your credentials.", "details": str(e)}), 401




@app.route('/status', methods=['GET'])
@jwt_required()
def status():
    current_user = get_jwt_identity()
    return jsonify({"email": current_user, "status": "authenticated"}), 200


@app.route('/ask', methods=['POST'])
@jwt_required()
def ask():
    global client
    if not client:
        return jsonify({"error": "Ask Sage client not initialized"}), 500

    try:
        data = request.json
        content = data.get("content")
        if not content:
            return jsonify({"error": "Content is required"}), 400

        # Query the Ask Sage API
        response = client.query(message=content)
        return jsonify(response)
    except Exception as e:
        logging.error("Error during query: %s", str(e))
        return jsonify({"error": str(e)}), 500



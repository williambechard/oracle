import logging
from flask import Flask, jsonify, request
import os
from dotenv import load_dotenv
from asksageclient import AskSageClient  # Import AskSageClient

# Configure logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

app = Flask(__name__)

# Load environment variables from .env file
load_dotenv()

# Get email and API key from environment variables
EMAIL = os.getenv("EMAIL")
API_KEY = os.getenv("API_KEY")

# Initialize the Ask Sage client
try:
    client = AskSageClient(email=EMAIL, api_key=API_KEY)
    logging.info("Ask Sage client successfully initialized.")
except Exception as e:
    logging.error("Failed to initialize Ask Sage client: %s", str(e))
    client = None  # Ensure client is defined to handle the route properly

# Flask route to handle the API request
@app.route('/ask', methods=['POST'])
def ask():
    if client is None:
        return jsonify({"error": "Ask Sage client is not initialized"}), 500

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

if __name__ == '__main__':
    app.run(debug=True)

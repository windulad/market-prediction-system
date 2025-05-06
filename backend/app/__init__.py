# Create and configure Flask app
from flask import Flask
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)

# Secret key for sessions
app.config['SECRET_KEY'] = 'bwiohgo@uw#dmcd/hjoigbwoi'

# Enable CORS (allow frontend access)
CORS(app, origins=['http://localhost:3000'], supports_credentials=True)

# Import views to register routes (must come after app creation)
from app import views

# Views
# --> API endpoints
# --> Handles HTTP requests and responses
# --> Routes & Controllers

from flask import request
from app import app
from app.services import create_user_account

@app.route("/")
def home():
	return "Server is running"

@app.route('/signup', methods=['POST', 'GET'])
def signup():
	json_data = request.get_json()
	if not json_data:
		return {'message': 'Invalid or missing JSON data'}, 400

	name = json_data.get('name')
	email = json_data.get('email')
	password = json_data.get('password')

	print(name, email, password)

	result = create_user_account(name, email, password)
	return result

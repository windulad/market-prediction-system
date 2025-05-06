# Views
# API endpoints, Handles HTTP requests and responses, Routes & Controllers
from flask import request
from app import app
from app import services

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

	result = services.create_user_account(name, email, password)
	return result

@app.route('/login', methods=['POST', 'GET'])
def login():
	json_data = request.get_json()
	if not json_data:
		return {'message': 'Invalid or missing JSON data'}, 400

	email = json_data.get('email')
	password = json_data.get('password')

	result = services.verify_user_credentials(email, password)
	return result
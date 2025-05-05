# Services
# --> Contains core app logic
# --> Processes data
# --> Calls models or integrates multiple models

from flask import session
from app import models

def create_user_account(name, email, password):
    # Check if user already exists
    existing = models.get_user_by_email(email)
    if existing:
        return {
            'code': 'signup_error0'
            'message': 'Email already exists'
        }

    # Insert new user
    models.insert_user(name, email, password)

    # Retrieve user ID and set session
    user_id = models.get_user_id_by_credentials(email, password)
    if user_id:
        session['session_value'] = user_id
        return {
            'code': 'signup_success'
            'message': 'User signup success',
            'session_value': session['session_value']
        }
    else:
        return {
            'code': 'signup_error1'
            'message': 'Error retrieving user ID'
        }

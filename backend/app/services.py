# Services
# Contains core app logic, Processes data, Calls models or integrates multiple models
from flask import session
from app import app
from app import models
import datetime
import jwt
from werkzeug.security import generate_password_hash, check_password_hash

# Generate Access Token
def generate_access_token(user_id):
    payload = {
        'user_id': user_id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1),
        'iat': datetime.datetime.utcnow()
    }
    return jwt.encode(payload, app.config['SECRET_KEY'], algorithm='HS256')

# Decode Access Token
def decode_token(token):
    try:
        payload = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
        return payload['user_id']
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None

# Sign Up Logic --
def create_user_account(name, email, password):
    # Check if user already exists
    existing = models.get_user_by_email(email)
    if existing:
        return {
            'code': 'signup_error',
            'message': 'Email already exists'
        }

    # Step 2: Hash (Encrypt) password
    enc_password = generate_password_hash(password)  # Default method: pbkdf2:sha256

    # Insert new user
    user_id = models.insert_user(name, email, enc_password)

    # Retrieve user ID and set session
    if user_id:
        session_value = generate_access_token(user_id)
        print("Sign up success for ", email)
        return {
            'code': 'signup_success',
            'message': 'User signup success',
            'session_value': session_value
        }

    else:
        print("Sign up failure for ", email)
        return {
            'code': 'signup_error',
            'message': 'Error retrieving user ID'
        }

# Log In Logic --
def verify_user_credentials(email, input_password):
    # Fetch user by email
    user = models.get_user_by_email(email)
    
    if user and check_password_hash(user['password'], input_password):
        user_id = user['user_id']
        session_value = generate_access_token(user_id)
        print("Log in success for ", email)
        return {
            'code': 'login_success',
            'message': 'User login success',
            'session_value': session_value
        }

    else:
        print("Log in failure for ", email)
        return {
            'code': 'login_error',
            'message': 'Invalid email or password. Please try again.'
        }
    
    # return None  # Invalid credentials
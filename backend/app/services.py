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

# Restaurant ranking logic
def rank_restaurants(data):
    # Get categories from json
    occasions = data.get('occasions', {})
    time_based = data.get('time_based', {})
    dietary_needs = data.get('dietary_needs', {})
    drink_selection = data.get('drink_selection', {})
    budget = data.get('budget', {})
    experience_type = data.get('experience_type', {})
    cleanliness_focused = data.get('cleanliness_focused', {})

    # get preset tags from filters
    dateNight = occasions.get('dateNight', False)
    familyFriendly = occasions.get('familyFriendly', False)
    birthdayDinner = occasions.get('birthdayDinner', False)
    soloDining = occasions.get('soloDining', False)
    groupHangout = occasions.get('groupHangout', False)

    quickLunch = time_based.get('quickLunch', False)
    lateNightEats = time_based.get('lateNightEats', False)
    weekendBrunch = time_based.get('weekendBrunch', False)
    OpenNow = time_based.get('OpenNow', False)

    veganOptions = dietary_needs.get('veganOptions', False)
    halalFriendly = dietary_needs.get('halalFriendly', False)
    glutenFree = dietary_needs.get('glutenFree', False)
    lowCalorie = dietary_needs.get('lowCalorie', False)

    extensiveBarMenu = drink_selection.get('extensiveBarMenu', False)
    craftCocktails = drink_selection.get('craftCocktails', False)
    nonAlcoholicVariety = drink_selection.get('nonAlcoholicVariety', False)
    premiumBeverages = drink_selection.get('premiumBeverages', False)

    budgetFriendly = budget.get('budgetFriendly', False)
    midRange = budget.get('midRange', False)
    highEndDining = budget.get('highEndDining', False)

    romanticVibes = experience_type.get('romanticVibes', False)
    trendySpots = experience_type.get('trendySpots', False)
    quietAndCozy = experience_type.get('quietAndCozy', False)
    greatForPhotos = experience_type.get('greatForPhotos', False)
    liveMusic = experience_type.get('liveMusic', False)

    spotlessDining = cleanliness_focused.get('spotlessDining', False)
    cleanBathrooms = cleanliness_focused.get('cleanBathrooms', False)
    highHygieneStandards = cleanliness_focused.get('highHygieneStandards', False)

    # Get restaurant data from database
    restaurant_data = models.retrieve_data_restaurants()

    # Calculate score for each restaurant
    for row in restaurant_data:
        res_id = row[1]
        res_score = 0.0
        total_weights = 0

        # Helper function to handle scoring
        def score_yes_no(value):
            return 1.0 if value == "YES" else 0.0

        def score_level(value):
            return {"LOW": 0.0, "MID": 0.5, "HIGH": 1.0}.get(value, 0.0)

        if dateNight:
            res_score += score_yes_no(row[10])  # reservations
            total_weights += 1

        if familyFriendly:
            res_score += score_yes_no(row[10]) # reservations
            total_weights += 1

        if birthdayDinner:
            res_score += score_yes_no(row[10]) # reservations
            total_weights += 1

        if soloDining:
            res_score += score_yes_no(row[10]) # reservations
            total_weights += 1

        if groupHangout:
            res_score += score_yes_no(row[10]) # reservations
            total_weights += 1

        if quickLunch:
            print("yayyy")

        if lateNightEats:
            print("yayyy")

        if weekendBrunch:
            print("yayyy")

        if OpenNow:
            print("yayyy")

        if veganOptions:
            res_score += score_yes_no(row[13])  # cuisine_vegan
            total_weights += 1

        if halalFriendly:
            res_score += score_yes_no(row[14])  # cuisine_halal
            total_weights += 1

        if glutenFree:
            res_score += score_yes_no(row[15])  # cuisine_gluten_free
            total_weights += 1

        if lowCalorie:
            res_score += score_yes_no(row[16])  # cuisine_low_calorie
            total_weights += 1

        if craftCocktails:
            res_score += score_yes_no(row[17])  # beverage_cocktail
            total_weights += 1

        if nonAlcoholicVariety:
            res_score += score_yes_no(row[17])  # beverage_non_alchoholic
            total_weights += 1

        if premiumBeverages:
            res_score += score_yes_no(row[17])  # beverage_premium
            total_weights += 1

        if budgetFriendly:
            res_score += score_level(row[12]) if row[12] == "LOW" else 0.0
            total_weights += 1

        if midRange:
            res_score += score_level(row[12]) if row[12] == "MID" else 0.0
            total_weights += 1

        if highEndDining:
            res_score += score_level(row[12]) if row[12] == "HIGH" else 0.0
            total_weights += 1

        if romanticVibes:
            res_score += score_yes_no(row[20])  # location_type
            total_weights += 1

        if quietAndCozy:
            res_score += score_level(row[21])  # location_noise_level
            total_weights += 1

        if greatForPhotos:
            res_score += score_yes_no(row[22])  # location_decor
            total_weights += 1

        if liveMusic:
            res_score += score_yes_no(row[23])  # location_music
            total_weights += 1

        if spotlessDining:
            res_score += score_level(row[11])
            total_weights += 1

        if cleanBathrooms:
            res_score += score_level(row[11])
            total_weights += 1

        if highHygieneStandards:
            res_score += 0.5 if row[11] == "MID" else 0.0
            total_weights += 1

        # Normalize the score
        final_score = res_score / total_weights if total_weights > 0 else 0.0
        print(f"{res_id} Final Score: {final_score}")

    
    return {
        'code': 'submit_success',
        'message': 'Filters submitted successfully'
    }

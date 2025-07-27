import mysql.connector

# Get DB Connection to "flask_db" ------------------------------

DB_CONFIG = {
    'host': 'localhost',
    'user': 'root',
    'password': '1234',
    'database': 'flask_db'
}

def get_db_connection():
    return mysql.connector.connect(
        host=DB_CONFIG['host'],
        user=DB_CONFIG['user'],
        password=DB_CONFIG['password'],
        database=DB_CONFIG['database']
    )

# "users" Table Creation ------------------------------

def create_table_users():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS USERS (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id VARCHAR(20) UNIQUE NOT NULL,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    """)
    cursor.close()
    conn.close()

# "restaurants" Table Creation ------------------------------

def create_table_restaurants():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS RESTAURANTS (
            id INT AUTO_INCREMENT PRIMARY KEY,
            res_id VARCHAR(20) UNIQUE NOT NULL,
            res_name VARCHAR(255) NOT NULL,
            address VARCHAR(255),
            latitude VARCHAR(100),
            longitude VARCHAR(100),
            opening_time TIME,
            closing_time TIME,
            opening_day VARCHAR(10),
            closing_day VARCHAR(10),
            reservations VARCHAR(10),
            cleanliness VARCHAR(10),
            budget VARCHAR(10),
            cuisine_vegan VARCHAR(10),
            cuisine_halal VARCHAR(10),
            cuisine_gluten_free  VARCHAR(10),
            cuisine_low_calorie VARCHAR(10),
            beverage_cocktail VARCHAR(10),
            beverage_non_alchoholic VARCHAR(10),
            beverage_premium VARCHAR(10),
            location_type VARCHAR(10),
            location_noise_level VARCHAR(10),
            location_decor VARCHAR(10),
            location_music VARCHAR(10)
        );
    """)
    cursor.close()
    conn.close()



# Table creation execution -----------------------------

# create_table_users()
create_table_restaurants()
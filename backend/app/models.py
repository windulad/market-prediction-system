# Models
# Interacts with the database, DB read/write logic, Queries

import mysql.connector

# MySQL DB Config
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

# Get user data by email
def get_user_by_email(email):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT user_id, email, password FROM users WHERE email=%s",(email,))
    user = cursor.fetchone()
    conn.close()
    return user

# Insert new user
def insert_user(name, email, password):
    conn = get_db_connection()
    cursor = conn.cursor()

    # Step 1: Generate next user_id (e.g., USR001)
    # count + 1 --> increments value, 0 --> pad with zeros, 4 --> total no. of digits, d --> integer/decimal
    cursor.execute("SELECT COUNT(*) FROM users;")
    count = cursor.fetchone()[0]
    user_id = f"USR{count + 1:04d}"
    
    # Step 3: Insert the new user
    cursor.execute("INSERT INTO users (user_id, name, email, password) VALUES (%s, %s, %s, %s)",(user_id, name, email, password))
    conn.commit()
    conn.close()
    return user_id

# Get data from restaurants table
def retrieve_data_restaurants():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM restaurants;")
    data = cursor.fetchall()
    conn.commit()
    conn.close()
    return data


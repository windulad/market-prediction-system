# Models
# --> Interacts with the database
# --> ORM models (e.g., SQLAlchemy)
# --> DB read/write logic
# --> Queries

import mysql.connector
from app import DB_CONFIG

def get_db_connection():
    return mysql.connector.connect(
        host=DB_CONFIG['host'],
        user=DB_CONFIG['user'],
        password=DB_CONFIG['password'],
        database=DB_CONFIG['database']
    )

def get_user_by_email(email):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT email FROM users_biodata WHERE email=?",
        (email,)
    )
    data = cursor.fetchone()
    conn.close()
    return data

def insert_user(name, email, password):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO users_biodata (name, email, password) VALUES (?, ?, ?)",
        (name, email, password)
    )
    conn.commit()
    conn.close()

def get_user_id_by_credentials(email, password):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT userid FROM users_biodata WHERE email=? AND password=?",
        (email, password)
    )
    data = cursor.fetchone()
    conn.close()
    return data[0] if data else None

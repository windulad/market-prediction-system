import mysql.connector

# Database Creation -------------------------------------

# DB_CONFIG = {
#     'host': 'localhost',
#     'user': 'root',
#     'password': '1234'
# }

# def get_db_connection():
#     return mysql.connector.connect(
#         host=DB_CONFIG['host'],
#         user=DB_CONFIG['user'],
#         password=DB_CONFIG['password']
#     )

# def create_database_flask_db():
#     conn = get_db_connection()
#     cursor = conn.cursor()
#     cursor.execute(
#         "CREATE DATABASE flask_db;"
#     )
#     print("Database 'flask_db' created or already exists.")
#     conn.commit()
#     conn.close()

# create_database_flask_db()
# show_databases()

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

create_table_users()

# "users" Table Creation ------------------------------

# def create_table_users():
#     conn = get_db_connection()
#     cursor = conn.cursor()
#     cursor.execute("""
#         CREATE TABLE IF NOT EXISTS preset_tag_variable_group_mapping (
#             id INT AUTO_INCREMENT PRIMARY KEY,
#             user_id VARCHAR(20) UNIQUE NOT NULL,
#             name VARCHAR(100) NOT NULL,
#             email VARCHAR(100) UNIQUE NOT NULL,
#             password VARCHAR(255) NOT NULL
#         );
#     """)
#     cursor.close()
#     conn.close()

# create_table_users()

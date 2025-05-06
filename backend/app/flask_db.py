import mysql.connector

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

# def show_databases():
#     conn = get_db_connection()
#     cursor = conn.cursor()
#     cursor.execute(
#         "SHOW DATABASES;"
#     )
#     print("Databases:")
#     for db in cursor.fetchall():
#         print(f" - {db[0]}")
#     cursor.close()
#     conn.close()

# create_database_flask_db()
# show_databases()

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

def create_table_users():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id VARCHAR(20) UNIQUE NOT NULL,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    """)
    print("Table 'users' created successfully.")
    cursor.close()
    conn.close()


## Commands
create_table_users()
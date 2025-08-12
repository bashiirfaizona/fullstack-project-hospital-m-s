from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
from werkzeug.security import generate_password_hash
import os

app = Flask(__name__)
CORS(app)  # Allow React frontend to talk to Flask

# -------------------------
# Database Setup
# -------------------------
DB_NAME = "faazcare.db"

def init_db():
    with sqlite3.connect(DB_NAME) as conn:
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                first_name TEXT NOT NULL,
                last_name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE,
                phone TEXT NOT NULL,
                password TEXT NOT NULL
            )
        """)
        conn.commit()

init_db()

# -------------------------
# Routes
# -------------------------

@app.route("/users", methods=["POST"])
def create_user():
    data = request.get_json()

    required_fields = ["firstName", "lastName", "email", "phone", "password"]
    if not all(field in data and data[field] for field in required_fields):
        return jsonify({"error": "Missing required fields"}), 400

    # Hash the password
    hashed_password = generate_password_hash(data["password"])

    try:
        with sqlite3.connect(DB_NAME) as conn:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT INTO users (first_name, last_name, email, phone, password)
                VALUES (?, ?, ?, ?, ?)
            """, (
                data["firstName"],
                data["lastName"],
                data["email"],
                data["phone"],
                hashed_password
            ))
            conn.commit()
        return jsonify({"message": "Account created successfully!"}), 201

    except sqlite3.IntegrityError:
        return jsonify({"error": "Email already exists"}), 400

@app.route("/users", methods=["GET"])
def get_users():
    with sqlite3.connect(DB_NAME) as conn:
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        cursor.execute("SELECT id, first_name, last_name, email, phone FROM users")
        users = [dict(row) for row in cursor.fetchall()]
    return jsonify(users)

if __name__ == "__main__":
    app.run(debug=True)

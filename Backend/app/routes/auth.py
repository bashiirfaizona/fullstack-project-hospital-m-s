from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
from models.auth import db, User

auth_bp = Blueprint("auth", __name__)
bcrypt = Bcrypt()

@auth_bp.route("/users", methods=["POST"])
def create_user():
    data = request.get_json()

    # Validate passwords match
    if data.get("password") != data.get("confirmPassword"):
        return jsonify({"error": "Passwords do not match"}), 400

    # Check email exists
    if User.query.filter_by(email=data.get("email")).first():
        return jsonify({"error": "Email already registered"}), 400

    hashed_pw = bcrypt.generate_password_hash(data.get("password")).decode("utf-8")

    new_user = User(
        firstName=data.get("firstName"),
        lastName=data.get("lastName"),
        email=data.get("email"),
        phone=data.get("phone"),
        hashed_password=hashed_pw
    )

    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully", "user_id": new_user.id}), 201

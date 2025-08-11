from flask import Flask
from models.auth import db
from routes.auth import auth_bp, bcrypt

app = Flask(__name__)

# Database config (SQLite file)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Initialize extensions
db.init_app(app)
bcrypt.init_app(app)

# Register blueprint
app.register_blueprint(auth_bp)

# Create DB automatically
with app.app_context():
    db.create_all()

@app.route("/")
def home():
    return {"message": "API is running"}

if __name__ == "__main__":
    app.run(debug=True)

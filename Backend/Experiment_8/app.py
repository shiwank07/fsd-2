# guard imports so that missing dependencies give a clear message
try:
    from flask import Flask
except ModuleNotFoundError:
    raise RuntimeError(
        "Flask is not installed. activate your venv and run `pip install -r requirements.txt`"
    )

from routes.student_routes import student_bp
# from middleware.logger import register_middlewares

def create_app():
    app = Flask(__name__)

    # Register Blueprints
    app.register_blueprint(student_bp)

    # Register Middlewares
    # register_middlewares(app)

    return app

app = create_app()

@app.route("/")
def home():
    return {"message": "Backend Server is running"}
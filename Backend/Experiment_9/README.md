# Setup & Running 🔧

1. Change to the experiment directory:
   ```powershell
   cd "C:\Users\mngsh\Full Stack\fsd-2\Backend\Experiment_9"
   ```
2. Boot a Python virtual environment and activate it:
   ```powershell
   python -m venv venv
   .\venv\Scripts\activate
   ```
3. Install the required libraries:
   ```powershell
   pip install -r requirements.txt
   ```
4. Launch the app:
   ```powershell
   python app.py
   ```

> Errors such as `ModuleNotFoundError: No module named 'flask'` indicate the environment isn't prepared.

---

# Learning Outcomes

1. Understand the difference between basic, token-based, and JWT authentication.
2. Set up `flask_jwt_extended` in a Flask application and configure a secret key.
3. Generate JWTs using `create_access_token` and protect routes with `@jwt_required()`.
4. Extract the current user's identity from a JWT using `get_jwt_identity()`.
5. Recognize when JWTs are appropriate for stateless authentication and how to include additional claims if needed.

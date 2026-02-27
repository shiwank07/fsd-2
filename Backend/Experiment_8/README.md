# Experiment 8: Developing RESTful APIs with a Backend Framework

## Setup & Running 🔧

1. Navigate into the experiment folder:
   ```powershell
   cd "C:\Users\mngsh\Full Stack\fsd-2\Backend\Experiment_8"
   ```
2. Create and activate a virtual environment (Windows example):
   ```powershell
   python -m venv venv
   .\venv\Scripts\activate
   ```
3. Install dependencies:
   ```powershell
   pip install -r requirements.txt
   ```
4. Start the server:
   ```powershell
   python run.py
   ```

> If you see `ModuleNotFoundError: No module named 'flask'` it means the packages haven't been installed or the venv isn't active.

---

## Learning Outcomes

1. Explain RESTful principles – describe the architectural style of REST, including statelessness, resource-based modeling, and standard HTTP methods (GET, POST, PUT, DELETE).
2. Design API endpoints – plan and structure clear, consistent routes and resources using a backend framework, ensuring proper naming conventions and versioning.
3. Implement CRUD operations – build backend logic for creating, reading, updating, and deleting data through RESTful endpoints using framework features.
4. Handle requests and responses – process incoming data, validate inputs, manage errors, and return appropriate HTTP status codes and JSON payloads.
5. Integrate middleware and authentication – apply middleware for tasks like logging, parsing, and security, and implement basic authentication/authorization mechanisms in the API.

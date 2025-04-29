# Views
# --> API endpoints
# --> Handles HTTP requests and responses
# --> Routes & Controllers

from app import app

@app.route("/")
def index():
    return "Hello World"

@app.route("/about")
def about():
    return "About"
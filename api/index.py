# api/index.py
import sys
import os

# Add the root directory to the path so it can find the 'backend' folder
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from backend.server import app

# Vercel's Python runtime needs the FastAPI instance named 'app' or 'handler'
handler = app

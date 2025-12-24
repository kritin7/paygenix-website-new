# api/index.py
from backend.server import app

# This allows Vercel to pick up the FastAPI app
handler = app

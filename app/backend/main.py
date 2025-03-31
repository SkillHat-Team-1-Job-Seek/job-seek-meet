from fastapi import FastAPI
from app.backend.routes import auth
from fastapi.staticfiles import StaticFiles
from pathlib import Path

app = FastAPI()

# # Path to the frontend build folder
# frontend_path = Path(__file__).parent.parent / "frontend" / "build"

# # Serve static files (React frontend)
# if frontend_path.exists():
#     app.mount("/", StaticFiles(directory=frontend_path, html=True), name="static")

# @app.get("/")
# def health_check():
#     return {"status": "API is running"} 
# Serve React frontend (if it exists)
frontend_path = Path(__file__).parent.parent / "frontend" / "build"
if frontend_path.exists():
    app.mount("/", StaticFiles(directory=frontend_path, html=True), name="static")

app.include_router(auth.router)
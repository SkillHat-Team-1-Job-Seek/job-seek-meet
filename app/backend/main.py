from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from app.backend.routes import auth
# from routes import auth


app = FastAPI()

# Path to the frontend build folder
frontend_path = Path(__file__).parent.parent / "frontend" / "build"

# Serve React frontend if it exists
if frontend_path.exists():
    app.mount("/", StaticFiles(directory=frontend_path, html=True), name="static")


# Enable CORS (only needed if frontend is running separately)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Allow frontend dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register the auth router
app.include_router(auth.router)

# @app.get("/")
def health_check():
    return {"status": "API is running"} 


app.include_router(auth.router, prefix="/api")

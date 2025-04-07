from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from fastapi.responses import FileResponse
from fastapi import FastAPI
from app.backend.api.main import api_router
from app.backend.core.config import settings


app = FastAPI()

# Path to the frontend build folder
# updated to point to the correct Vite build output directory to properly display landing page in the browser
frontend_path = Path(__file__).resolve().parent.parent / "frontend" / "dist"

# Register the auth router.
# Moved it above the app.mount() to ensure it is registered before the static files so signup & login function properly in the browser.
app.include_router(api_router, prefix=settings.API_V1_STR)

# Serve React frontend if it exists
if frontend_path.exists():
    app.mount("/", StaticFiles(directory=frontend_path, html=True), name="static")

# Fallback route to serve index.html for React Router
@app.get("/{full_path:path}")
async def serve_react_app(full_path: str):
    index_file = frontend_path / "index.html"
    if index_file.exists():
        return FileResponse(index_file)
    return {"detail": "Frontend not found"}

# Enable CORS (only needed if frontend is running separately)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Allow frontend dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# @app.get("/")
def health_check():
    return {"status": "API is running"}
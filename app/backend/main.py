from fastapi import FastAPI, Request
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from pathlib import Path

app = FastAPI()

# Path to the frontend build folder
# frontend_path = Path(__file__).parent.parent / "frontend" / "build"
frontend_path = (Path(__file__).resolve().parent / "../../frontend/build").resolve()


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
    allow_origins=["*"],  # Allow frontend dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register the auth router
# app.include_router(auth.router)

# @app.get("/")
# def health_check():
#     return {"status": "API is running"} 


app.include_router(auth.router)
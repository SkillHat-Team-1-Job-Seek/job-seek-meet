from fastapi.staticfiles import StaticFiles
from pathlib import Path
from fastapi import FastAPI

from starlette.middleware.cors import CORSMiddleware

from app.backend.api.main import api_router
from app.backend.core.config import settings

app = FastAPI(title=settings.PROJECT_NAME)

# Path to the frontend build folder
frontend_path = Path(__file__).parent.parent / "frontend" / "build"

# Serve static files (React frontend)
if frontend_path.exists():
    app.mount("/", StaticFiles(directory=frontend_path, html=True), name="static")

@app.get("/")
def health_check():
    return {"status": "API is running"} 

# # Set all CORS enabled origins
# if settings.all_cors_origins:
#     app.add_middleware(
#         CORSMiddleware,
#         allow_origins=settings.all_cors_origins,
#         allow_credentials=True,
#         allow_methods=["*"],
#         allow_headers=["*"],
#     )
app.include_router(api_router, prefix=settings.API_V1)
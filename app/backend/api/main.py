from fastapi import APIRouter
from app.backend.api.routes import auth, user


api_router = APIRouter()
api_router.include_router(auth.router)
api_router.include_router(user.router)



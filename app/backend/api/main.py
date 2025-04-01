from fastapi import APIRouter
from ..api.routes import auth, user
# from  ..core.config import settings

api_router = APIRouter()
api_router.include_router(auth.router)
api_router.include_router(user.router)



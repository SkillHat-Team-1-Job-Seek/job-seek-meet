from datetime import timedelta
from typing import Annotated, Any

from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from app.backend.core import security
from ..deps import CurrentUser, SessionDep
from app.backend.core.config import settings
from app.backend.core.security import get_password_hash
from app.backend.schema.auth import  NewPassword, Token
from app.backend.schema.user import UserPublic, UserCreate
from app.backend.crud import authenticate,get_user_by_email, create_user

router = APIRouter(prefix="/users", tags=["users"])

@router.post("/signup", response_model=UserPublic)
def signup(*, session: SessionDep, user_in: UserCreate):
    user = get_user_by_email(session=session, email=str(user_in.email))
    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this email already exists in the system.",
        )
    user = create_user(session=session, user_create=user_in)
    return user
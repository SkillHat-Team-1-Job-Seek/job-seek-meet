from datetime import timedelta
import uuid
from typing import Annotated, Any

from fastapi import APIRouter, Depends, HTTPException
from app.backend.api.deps  import CurrentUser, SessionDep
from app.backend.core.config import settings
from app.backend.core.security import get_password_hash
from app.backend.db.models import (
    UserCreate,
    UserPublic,
    UserRegister,
    User
)
from app.backend import crud

router = APIRouter(prefix="/users", tags=["users"])

@router.post("/signup", response_model=UserPublic)
def register_user(session: SessionDep, user_in: UserRegister) -> Any:
    """
    Create new user without the need to be logged in.
    """
    user = crud.get_user_by_email(session=session, email=user_in.email)
    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this email already exists in the system",
        )
    user_create = UserCreate.model_validate(user_in)
    user = crud.create_user(session=session, user_create=user_create)
    return user

@router.get("/{user_id}", response_model=UserPublic)
def get_user_by_id(
    user_id: uuid.UUID, session: SessionDep, current_user: CurrentUser
) -> Any:
    """
    Get a specific user by id.
    """
    user = session.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    if user == current_user:
        return user
    if user.id != current_user.id:
        raise HTTPException(
            status_code=403,
            detail="You do not have permission to access this user."
        )
    return user
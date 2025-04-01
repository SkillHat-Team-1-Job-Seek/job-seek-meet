from .schema.user import UserCreate, UserPublic
from core.security import get_password_hash,  verify_password
from db.models import User
from sqlalchemy.orm import Session
from sqlalchemy import select
from typing import Optional

def create_user(*, session: Session, user_create: UserCreate) -> UserPublic:
    db_obj = User(
        first_name=user_create.first_name,
        email=str(user_create.email),
        password=get_password_hash(user_create.password)  # Hash the password
    )
    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)
    return UserPublic.model_validate(db_obj)

def get_user_by_email(*, session: Session, email: str) -> Optional[User]:
    statement = select(User).where(User.email == email)
    session_user = session.execute(statement).scalar_one_or_none()
    return session_user


def authenticate(*, session: Session, email: str, password: str) -> User | None:
    db_user = get_user_by_email(session=session, email=email)
    if not db_user:
        return None
    if not verify_password(password, db_user.password):
        return None
    return db_user

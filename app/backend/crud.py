from .schema.user import UserCreate, UserPublic
from core.security import get_password_hash
from db.models import User
from sqlalchemy.orm import Session

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


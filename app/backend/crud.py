from .schema.user import UserCreate, UserPublic
from core.security import get_password_hash
from db.models import User
from sqlalchemy.orm import Session

def create_user(*, session: Session, user_create: UserCreate) -> UserPublic:
    db_obj = User.model_validate(
        user_create, update={"hashed_password": get_password_hash(user_create.password)}
    )
    session.add(db_obj)
    session.commit()
    session.refresh(db_obj)
    return db_obj

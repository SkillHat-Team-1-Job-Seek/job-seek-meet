from core.security import get_password_hash
from db.models import User  # Import your SQLAlchemy User model
from sqlalchemy.orm import Session

def create_user(*, session: Session, user_create: dict) -> User:
    # Create a new User object
    db_user = User(
        first_name=user_create["first_name"],
        email=user_create["email"],
        password=get_password_hash(user_create["password"])
    )
    session.add(db_user)
    session.commit()
    session.refresh(db_user)
    return db_user
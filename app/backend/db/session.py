from sqlalchemy import create_engine
from collections.abc import Generator
from sqlmodel import Session, create_engine, select
from app.backend.core.config import settings

# Create the SQLAlchemy engine
engine = create_engine(str(settings.SQLALCHEMY_DATABASE_URI))
print("SQLAlchemy engine created successfully.")

try:
    with engine.connect() as connection:
        print("Database connection successful!")
except Exception as e:
    print(f"Error connecting to the database: {e}")



# Create a configured "Session" class


# Base class for models
# Base = declarative_base()
#
# #Dependency to get the database session
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()'
def get_db() -> Generator[Session, None, None]:
    with Session(engine) as session:
        yield session
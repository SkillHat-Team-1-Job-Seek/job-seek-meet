from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from  models import User
from app.backend.core.config import settings

# Create the database engine and session
engine = create_engine(settings.SQLALCHEMY_DATABASE_URI)
Session = sessionmaker(bind=engine)
session = Session()

# Destroy all records from tables before executing the rest of the seed code so tables don't get too big while experimenting with project 
session.query(User).delete()

print("🌱 Seeding data...")

# Define seed data
users = [
    User(first_name="John", email="john.doe@example.com", password="hashed_password_1"),
    User(first_name="Jane", email="jane.doe@example.com", password="hashed_password_2"),
    User(first_name="Alice", email="alice.smith@example.com", password="hashed_password_3"),
]

# Insert the data into the users table
session.add_all(users)

# Commit the transaction
session.commit()

# Close the session
session.close()

print("Seed data has been added to the users table.")

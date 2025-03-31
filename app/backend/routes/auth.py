from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

# Define the expected request body
class SignUpRequest(BaseModel):
    firstName: str
    email: str
    password: str



@router.post("/signup")
def signup(user: SignUpRequest):
    # Simulate storing user data
    if user.email == "existing@example.com":
        raise HTTPException(status_code=400, detail="Email already registered")
    return {"message": "User signup successful with user: test_user@test.com"}

@router.post("/login")
def login():
   return {"message": "User login successful with user: test_user@test.com"}
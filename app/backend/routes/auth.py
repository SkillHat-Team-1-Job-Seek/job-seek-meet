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

# Define request model
class LoginRequest(BaseModel):
    email: str
    password: str

@router.post("/login")
async def login(request: LoginRequest):
    if request.email == "test_user@test.com" and request.password == "password123":
        return {"message": f"User login successful with user: {request.email}"}
    raise HTTPException(status_code=400, detail="Invalid credentials")
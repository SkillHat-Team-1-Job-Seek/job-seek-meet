from fastapi import APIRouter

router = APIRouter()

@router.post("/signup")
def signup():
    return {"message": "User signup successful with user: test_user@test.com"}

@router.post("/login")
def login():
   return {"message": "User login successful with user: test_user@test.com"}
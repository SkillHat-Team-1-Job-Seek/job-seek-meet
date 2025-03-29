from pydantic import BaseModel, Field
from typing import Optional

# When the user logs in, this is the response
class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"

# When we decode a JWT token, this is the payload
class TokenPayload(BaseModel):
    sub: Optional[str] = None  # "sub" stores the user's email

# When a user resets their password, they send this request
class NewPassword(BaseModel):
    token: str
    new_password: str = Field(min_length=8, max_length=40)

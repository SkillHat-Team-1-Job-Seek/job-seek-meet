from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

# Shared properties
class UserBase(BaseModel):
    email: EmailStr
    first_name: str

# Properties to receive via API on creation
class UserCreate(UserBase):
    password: str

# Properties to receive via API on update
class UserUpdate(BaseModel):
    first_name: Optional[str] = None
    email: Optional[EmailStr] = None
    password: Optional[str] = None

# Properties to return via API
class UserPublic(UserBase):
    id: int
    created_at: datetime
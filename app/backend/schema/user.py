from pydantic import BaseModel, EmailStr, Field
from typing import Optional
import uuid

class UserBase(BaseModel):
    email: EmailStr
    full_name: Optional[str] = None
    is_active: bool = True
    is_superuser: bool = False

class UserCreate(UserBase):
    password: str = Field(min_length=8, max_length=40)

class UserUpdate(BaseModel):
    full_name: Optional[str] = None
    email: Optional[EmailStr] = None

class UserPublic(UserBase):
    id: uuid.UUID

# app/models/user.py
from sqlalchemy import Column, Integer, String, DateTime, func, Enum
from app.core.database import Base
import enum

class RoleEnum(str, enum.Enum):
    ADMIN = "ADMIN"
    EMPLOYEE = "EMPLOYEE"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(120), nullable=False)
    email = Column(String(255), unique=True, index=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    role = Column(Enum(RoleEnum), default=RoleEnum.EMPLOYEE, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


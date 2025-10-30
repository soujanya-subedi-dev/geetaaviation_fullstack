# app/services/user_service.py
from sqlalchemy.orm import Session
from app.models.user import User, RoleEnum
from app.core.security import hash_password, verify_password
from app.schemas.user import UserCreate

def get_user_by_email(db: Session, email: str) -> User | None:
    return db.query(User).filter(User.email == email).first()

def create_user(db: Session, user_in: UserCreate, role: RoleEnum = RoleEnum.EMPLOYEE) -> User:
    hashed = hash_password(user_in.password)
    user = User(name=user_in.name, email=user_in.email, password_hash=hashed, role=role)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

def authenticate_user(db: Session, email: str, password: str) -> User | None:
    user = get_user_by_email(db, email)
    if not user:
        return None
    if not verify_password(password, user.password_hash):
        return None
    return user

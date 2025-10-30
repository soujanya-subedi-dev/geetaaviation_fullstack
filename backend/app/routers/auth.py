# app/routers/auth.py
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from app.schemas.user import UserCreate, UserOut, Token
from app.core.deps import get_db, oauth2_scheme, get_current_user
from app.services.user_service import create_user, authenticate_user, get_user_by_email
from app.core.security import create_token
from app.models.user import RoleEnum

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/register", response_model=UserOut, status_code=status.HTTP_201_CREATED)
def register(user_in: UserCreate, db: Session = Depends(get_db)):
    existing = get_user_by_email(db, user_in.email)
    if existing:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    user = create_user(db, user_in)
    return user

@router.post("/login", response_model=Token)
def login(form_data: UserCreate | None = None, db: Session = Depends(get_db)):
    """
    Accepts JSON body { email, password } or you can adapt to OAuth2PasswordRequestForm.
    Returns access_token & refresh_token.
    """
    # If you want to use standard OAuth2 form:
    # from fastapi.security.oauth2 import OAuth2PasswordRequestForm
    # then change signature to form_data: OAuth2PasswordRequestForm = Depends()

    if form_data is None:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email & password required")
    user = authenticate_user(db, form_data.email, form_data.password)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    access_token = create_token(subject=str(user.id), token_type="access")
    refresh_token = create_token(subject=str(user.id), token_type="refresh")
    return {"access_token": access_token, "token_type": "bearer", "refresh_token": refresh_token}

@router.post("/refresh", response_model=Token)
def refresh(token: str, db: Session = Depends(get_db)):
    # token should be the refresh token
    from app.core.security import decode_token
    try:
        payload = decode_token(token)
        if payload.get("type") != "refresh":
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token type")
        user_id = int(payload.get("sub"))
    except Exception:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid refresh token")
    user = db.query("users")  # placeholder - fix below
    # Proper fetch:
    from app.models.user import User
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="User not found")
    new_access = create_token(subject=str(user.id), token_type="access")
    new_refresh = create_token(subject=str(user.id), token_type="refresh")
    return {"access_token": new_access, "token_type": "bearer", "refresh_token": new_refresh}

@router.get("/me", response_model=UserOut)
def me(current_user=Depends(get_current_user)):
    return current_user

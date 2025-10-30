# seed_admin.py
from app.core.database import SessionLocal
from app.services.user_service import create_user
from app.models.user import RoleEnum
from app.schemas.user import UserCreate

def seed_admin():
    db = SessionLocal()
    admin_email = "admin@geetaaviation.com"
    admin_password = "Admin@123"

    # Check if admin already exists
    from app.services.user_service import get_user_by_email
    existing = get_user_by_email(db, admin_email)
    if existing:
        print(f"Admin already exists: {existing.email}")
        db.close()
        return

    admin_data = UserCreate(
        name="Super Admin",
        email=admin_email,
        password=admin_password
    )

    admin = create_user(db, admin_data, role=RoleEnum.ADMIN)
    print(f"Admin created: {admin.name}, {admin.email}")
    db.close()

if __name__ == "__main__":
    seed_admin()


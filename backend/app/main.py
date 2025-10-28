from fastapi import FastAPI
from app.routes import health

app = FastAPI(title="Geeta Aviation Backend")

app.include_router(health.router, prefix="/api")

@app.get("/")
def root():
    return {"message": "Welcome to Geeta Aviation Backend"}

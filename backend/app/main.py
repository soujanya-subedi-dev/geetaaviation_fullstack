from fastapi import FastAPI
from app.core.database import Base, engine

app = FastAPI(title="Geeta Aviation API")

@app.get("/")
def root():
    return {"message": "Backend is running smoothly"}
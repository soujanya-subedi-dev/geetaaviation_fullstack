from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "GeetaAviation"
    environment: str = "development"
    database_url: str
    postgres_url: str | None = None
    secret_key: str
    algorithm: str
    access_token_expire_minutes: int

    class Config:
        env_file = ".env"

settings = Settings()
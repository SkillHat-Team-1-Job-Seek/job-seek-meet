from fastapi import FastAPI
from app.backend.routes import auth

app = FastAPI()

@app.get("/")
def health_check():
    return {"status": "API is running"} 

app.include_router(auth.router)
from fastapi import APIRouter


router = APIRouter()


@router.get("/")
def hello_world():
    return "hello world!"
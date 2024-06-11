from sqlalchemy import Column, String
from marshmallow import Schema, fields, post_load
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()

class User(Base):
    __tablename__ = 'user'

    username = Column(String, primary_key=True)
    # TODO: Encrypt Decrypt
    password = Column(String)

    def __init__(self, username, password):
        self.username = username
        self.password = password

class UserSchema(Schema):
    username = fields.Str()
    password = fields.Str()

    @post_load
    def create_user(self, data, **kwargs):
        return User(**data)
    
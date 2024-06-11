from sqlalchemy import Column, String, Integer
from marshmallow import Schema, fields, post_load
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()

class Ability(Base):
    __tablename__ = 'ability'

    id = Column(Integer, primary_key=True)
    name = Column(String)

    def __init__(self, id, name):
        self.id = id
        self.name = name

class AbilitySchema(Schema):
    id = fields.Int()
    name = fields.Str()

    @post_load
    def create_ability(self, data, **kwargs):
        return Ability(**data)
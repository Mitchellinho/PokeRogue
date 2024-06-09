from flask import Flask, jsonify
from ability import Ability, AbilitySchema
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

app = Flask(__name__)

db_url = 'localhost:5432'
db_name = 'pokerogue'
db_user = 'postgres'
db_password = '12345678'
engine = create_engine(f'postgresql://{db_user}:{db_password}@{db_url}/{db_name}')
Session = sessionmaker(bind=engine)

@app.route('/abilities')
def get_abilities():
    session = Session()
    ability_objects = session.query(Ability).all()
  
    schema = AbilitySchema(many=True)
    abilities = schema.dump(ability_objects)

    return jsonify(abilities)
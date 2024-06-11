from flask import Flask, jsonify, request
from flask_cors import CORS
from ability import Ability, AbilitySchema
from user import User, UserSchema
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

app = Flask(__name__)
# remove CORS in the future
CORS(app)

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

    session.close()
    return jsonify(abilities)

@app.route('/createAbility', methods=['POST'])
def create_ability():
    # Create Ability from json
    created_ability = AbilitySchema(only=('id', 'name'))\
        .load(request.get_json())

    # add created ability to database
    session = Session()
    session.add(created_ability)
    session.commit()

    # return new ability as response to frontend
    new_ability =AbilitySchema().dump(created_ability)
    session.close()
    return jsonify(new_ability)

@app.route('/users')
def get_users():
    session = Session()
    user_objects = session.query(User).all()
    
    schema = UserSchema(many=True)
    users = schema.dump(user_objects)

    session.close()
    return jsonify(users)

@app.route('/createUser', methods=['POST'])
def create_user():
    #create user from json
    created_user = UserSchema(only=('username', 'password'))\
        .load(request.get_json())

    # add created user to database
    session = Session()
    session.add(created_user)
    session.commit()

    # return new user as response to frontend
    new_user = UserSchema().dump(created_user)
    session.close()
    return jsonify(new_user)
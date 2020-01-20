
from flask import Flask, jsonify, request
from flask_cors import CORS
import threading
import datetime
import requests
import json
import time
import operator
app = Flask(__name__)
CORS(app)

URL = "http://127.0.0.1:5000/getlist"
#
# Task
#  screens:
#
# ● Students list - showing a  table with each row being a student
#
# Student page - showing a single student entry
# ○ Edit capabilities
#
# ● Add new student page - for adding new students
#
# ● Add dashboard to show all students - showing stats about students
# ○ How many students were added per day/month
# ○ Pie chart of student skillz and desired skillz


student_list = {"students": [
                    {"id": 1,
                         "first_name": "Joe",
                         "last_name": "Demagio",
                        "creation_time": datetime.datetime.now().strftime("%d/%m/%Y - %H:%M:%S"),
                        "last_update_time": datetime.datetime.now().strftime("%d/%m/%Y - %H:%M:%S"),
                         "existing_skills": [
                             {"skill": "Animation", "level": 2},
                             {"skill": "Conjuror", "level": 4},
                             {"skill": "Disintegration", "level": 3}
                         ],
                        "desired_skills": [
                              {"skill": "Poison", "level": 4},
                              {"skill": "Possession", "level": 3}
                          ],
                           "course": "Dating with magic"
                     },

                {"id": 2,
                 "first_name": "Michael",
                 "last_name": "Jordan",
                 "creation_time": datetime.datetime.now().strftime("%d/%m/%Y - %H:%M:%S"),
                 "last_update_time": datetime.datetime.now().strftime("%d/%m/%Y - %H:%M:%S"),
                    "existing_skills": [
                     {"skill": "Healing", "level": 4},
                     {"skill": "Illusion", "level": 1}
                 ],
                    "desired_skills": [
                     {"skill": "Self-detonation", "level": 4},
                     {"skill": "Summoning", "level": 4}
                 ],
                 "course": "Alchemy advanced"
                 }
                ]
                }


@app.route("/getstudent/<id>")
def get_student(id):
    global student_list
    return student_list["students"][int(id)-1]


@app.route("/getlist")
def get_student_list():
    global student_list
    return student_list


@app.route("/add_student", methods=['POST'])
def add_student():
    global student_list
    student_data = request.json
    new_id_var = student_list['students'][-1]['id']
    student_data['id'] = new_id_var + 1
    student_data["creation_time"] = datetime.datetime.now().strftime("%d/%m/%Y - %H:%M:%S")
    student_data["last_update_time"] = datetime.datetime.now().strftime("%d/%m/%Y - %H:%M:%S")
    student_list['students'].append(student_data)
    print(student_list)
    return "ok"


if __name__ == "__main__":
    app.run()




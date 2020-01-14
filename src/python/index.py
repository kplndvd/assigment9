
from flask import Flask, jsonify
from flask_cors import CORS
import threading
import time
import requests
import json
app = Flask(__name__)
CORS(app)
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


student_list = {"students": [{"id": 1, "first name": "Joe", "last_name": "Demagio", "creation_time": time.time(),
                "last_update_time": "12:54", "magic_skillz": [{"Animation": 2}, {"Conjuror": 4}, {"Disintegration": 3}],
                              "desired_skillz": [{"Poison": 4}, {"Possession": 3}]},
                {"id": 2, "first name": "Michael", "last_name": "Jordan",
                 "creation_time": time.time(), "last_update_time": "11:43", "magic_skillz": [{"Healing": 4}, {"Illusion": 1}],
                 "desired_skillz": [{"Self-detonation": 4}, {"Summoning": 4}]}
                  ]}


# Magic skillz = ["Alchemy", "Animation", "Conjuror", "Disintegration", "Elemental",
#                 "Healing", "Illusion" ,"Immortality", "Invisibility" ,"Invulnerability" ,"Necromancer",
#                 "Omnipresent", "Omniscient" , "Poison" , "Possession", "Self-detonation", "Summoning", "Water breathing"]


# courses = ["Alchemy basics", "Alchemy advanced", "Magic for day-to-day life"
#             , "Magic for medical professionals", "Dating with magic"]

#
# @app.route("/add_student", methods=['POST'])
# def add_new_student(student_data):
#     # student_data = {
#     #     "id": id_code,
#     #     "first_name": fname,
#     #     "last_name": lname,
#     #     "creation_time": time.time(),
#     #     "last_update_time": last_time,
#     #     "magic_skillz": magic_skills,  # dictionary skills-levels 1-5
#     #     "desired_skillz": desired_skillz  # name-skill level 1-5
#     # }
#     global student_list
#     student_list.append(student_data)

@app.route("/getstudent/<id>")
def get_student(id):
    global student_list
    return student_list["students"][int(id)-1]


@app.route("/getlist")
def get_student_list():
    global student_list
    student_list = json.dumps(student_list)
    return student_list


if __name__ == "__main__":
    import threading
    threading.Thread(target=app.run).start()
    print("yay")
    import time
    time.sleep(0.5)
    import requests
    requests.get("http://127.0.0.1:5000/getstudent/1" )
    #app.run()



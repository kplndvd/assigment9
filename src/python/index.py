
from flask import Flask
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
# ● Students list - showing a bug table with each row being a student
#
# Student page - showing a single student entry
# ○ Edit capabilities
#
# ● Add new student page - for adding new students
#
# ● Add dashboard to show all students - showing stats about students
# ○ How many students were added per day/month
# ○ Pie chart of student skillz and desired skillz


student_list = {"Students":[{"first_name":"Joe", 
                 "last_name": "Demgio", "creation_time": "time.time()",}] }


# Magic skillz = ["Alchemy", "Animation", "Conjuror", "Disintegration", "Elemental",
#                 "Healing", "Illusion" ,"Immortality", "Invisibility" ,"Invulnerability" ,"Necromancer",
#                 "Omnipresent", "Omniscient" , "Poison" , "Possession", "Self-detonation", "Summoning", "Water breathing"]


# courses = ["Alchemy basics", "Alchemy advanced", "Magic for day-to-day life"
#             , "Magic for medical professionals", "Dating with magic"]



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

# @app.route("/get")
# def get_student(id_code):
#     global student_list
#     return student_list[id_code]

@app.route("/getlist")
def get_student_list():
    global student_list
    student_list = json.dumps(student_list)
    return student_list



if __name__ == "__main__" :
    threading.Thread(target=app.run).start()
    time.sleep(0.5)
    response = requests.get('http://127.0.0.1:5000/getlist')
    if response.status_code == 200:
        print('OK')
    else:
        print('Error')

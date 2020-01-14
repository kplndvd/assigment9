from flask import Flask
import threading
import time
import requests
import json
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


student_data = {"newstudents":"check"} 

@app.route("/")
def student_list():
    student_list = json.dumps(student_data)
    return student_list

if __name__ == "__main__" :
    threading.Thread(target=app.run).start()
    time.sleep(0.5)
    response = requests.get('http://127.0.0.1:5000')
    if response.status_code == 200:
        print('OK')
    else :
        print('Error')
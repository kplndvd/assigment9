
import React from "react"
// import GetStudent from "../lib/api" 
import  "../css/student_page.css"


function StudentPage(){
    // this.props = GetStudent()
    return (
    <div className="student_page">
        <h1>Magic Student</h1>
        <h5>First Name: {this.props.first_name}</h5>
        <h5>Last Name: {this.props.last_name}</h5>
        <h5>Magic Skillz: {this.props.skills}</h5>
        <h5>Course Intrested: {this.props.course}</h5>
    </div>
    )
}

export default StudentPage



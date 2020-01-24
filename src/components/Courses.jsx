import React from "react"

function Courses(props) {
       const courses = ["Choose Course from Menu","Alchemy basics","Alchemy advanced","Magic for day-to-day life","Magic for medical professionals","Dating with magic"] 
    return (
        <div>
            <select name="course" onChange = {props.onChange}>
            {courses.map((course) =><option value={course} key={course}>{course}</option>)}
            </select>
        </div>
    )
}

export default Courses
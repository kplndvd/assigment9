
import React from "react"
import {GetStudentList} from "../lib/api" 

function ShowStudentList(){
    return(
        <div>
           <h1>Show student list placeholder </h1>
           <p> {GetStudentList()}</p>
        </div>
    )
}

export default ShowStudentList
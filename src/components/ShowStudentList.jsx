import { Link } from "react-router-dom"
import React from "react"
import { GetStudentList } from "../lib/api"



class ShowStudentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentlist: []
        }
    }

    componentDidMount() {
        GetStudentList().then(response => {
            this.setState({
                studentlist: response.data.students
            })
        })

    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.studentlist.map(student =>
                        <li key={student.id}>
                            <br />
                            <Link to={`/ShowSingleStudent?id=${student.id}`}>{student.id}</Link>
                            <br />
                            {student.last_name}
                            <br />
                            {student.first_name}
                            <br />
                            {student.creation_time}
                            <br />
                            Existing Skills: <br />
                            {student.existing_skills.map(item => <span key={item.skill}> "skill:"{item.skill} " level:"{item.level} <br /></span>)}
                            <br />
                            Desired Skills: <br />
                            {student.desired_skills.map(item => <span key={item.skill}> "skill:"{item.skill} " level:"{item.level} <br /></span>)}
                            Course: {student.course}
                            <br />

                        </li>
                    )
                    }
                </ul>
            </div >
        );
    }

}

export default ShowStudentList
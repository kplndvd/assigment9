
import React, { Component } from 'react';
import LevelUpdate from "../components/LevelUpdate"
import SkillzForNew from "../components/skillsForNew"
import Courses from "../components/Courses"
import "../css/new_student.css"
import { AddStudent } from '../lib/api';


class NewStudent extends Component {
    constructor(props) {
        super(props);

        this.skillRef = React.forwardRef()
        this.levelRef = React.createRef()

        this.state = {
            first_name: "",
            last_name: "",
            existing_skills: [],
            desired_skills: [],
            course: "",
            loadingServer: true,
            typedChars: ' '
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clearContents() {
        this.setState({ typedChars: "" })
    }

    handleSubmit(event) {
        const data =  {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            existing_skills: this.state.existing_skills,
            desired_skills: this.state.desired_skills,
            course: this.state.course,
        }
        console.log(data)
        AddStudent(data);
        // event.preventDefault();
    }


    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(value)
        this.setState({ [name]: value })
        event.preventDefault();
    }

    componentDidMount() {
        this.setState({
            loadingServer: true
        })
    }

    clickHandler(event) {
        const skill = this.skillRef.current.value
        const level = this.levelRef.current.value
        const target = event.target
        const name = target.name
        this.setState(prevState => ({
            [name]: [...prevState[name], { "skill": skill, "level": level }]
        }));
        event.preventDefault();
    }


    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)} >

                    <h1>Magic School</h1>
                    <h3>Student Register</h3>
                    <p>Fill form and submit when complete</p>

                    <label htmlFor="firstname"><b>First Name</b></label>
                    <input type="text" maxLength="20" onChange={(event) => this.handleChange(event)}
                        placeholder="Enter First Name" name="first_name" required /> <br />

                    <label htmlFor="lastname"><b>Last Name</b></label>
                    <input type="text" maxLength="20" onChange={(event) => this.handleChange(event)}
                        placeholder="Enter Last Name" name="last_name" required /> <br />

                    <h3><b> Select your exisiting and desired skills and levels: </b><br /></h3>

                    <SkillzForNew onChange={this.handleESkillChange} ref={this.passer} passer={this.skillRef} />
                    <LevelUpdate onChange={this.handleExistLevel} ref={this.passer} passer={this.levelRef} />

                    <br />
                    <br />
                    <button onClick={this.clickHandler} name="existing_skills">Add to Existing Skills</button>

                    <button onClick={this.clickHandler} name="desired_skills">Add to Desired Skills</button>

                    <br />

                    <br />
                    <h3><b> Select the course you are interested in: </b><br /></h3>
                    <Courses onChange={this.handleChange} />
                    <br /> <br />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default NewStudent;


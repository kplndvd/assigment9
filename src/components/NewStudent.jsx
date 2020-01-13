
import React, { Component } from 'react';
// import handleChange from "../components/handle_change"
// import handleButtonSubmit from "../components/handle_submit"
import Skillz from "../components/Skillz"
import "../css/new_student.css"


class NewStudent extends Component {


    render() {
        return (
            <div>
                {/* onsubmit={(event)=>handleButtonSubmit} */}
                <form action="/add_student" methods="['POST']">
                    <h1>Magic School</h1>
                    <h3>Student Register</h3>
                    <p>Fill form and submit when complete</p>
                    <label for="firstname"><b>First Name</b></label>
                    <input type="text" maxLength="20" onChange={(event) => this.handleChange} placeholder="Enter First Name" name="firstname" required /><br />

                    <label for="lastname"><b>Last Name</b></label>
                    <input type="text" maxLength="20" onChange={(event) => this.handleChange} placeholder="Enter Last Name" name="lastname" required /><br />

                    <h3><b> Select your exisiting skills and their levels: </b><br /></h3>


                    <Skillz type="existing" />
                    <br />

                    <h3><b> Select Desired skills and their levels: </b><br /></h3>

                    <Skillz type="desired" />

                    <br />

                    <h3><b> Select the course you are interested in: </b><br /></h3>
                    <select name="courses">
                        <option value="Alchemy basics">Alchemy basics</option>
                        <option value="Alchemy advanced">Alchemy advanced</option>
                        <option value="Magic for day-to-day life">Magic for day-to-day life</option>
                        <option value="Magic for medical professionals">Magic for medical professionals</option>
                        <option value="Dating with magic">Dating with magic</option>
                    </select>
                    <br /><br />
                    {/* disabled={this.state.loadingServer} */}
                    <input type="submit" value="Submit" />
                </form>
                {/* <div>
                {this.state.loadingServer && <img className="loadGif" src="https://media1.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif?cid=790b7611b62980205006279f615ca2d4386ed63ce2ae9101&rid=giphy.gif" />}
                {!this.state.loadingServer && <StudentList studentlist={this.state.studentlist} />}
                </div> */}
            </div>
        );
    }
}

export default NewStudent;


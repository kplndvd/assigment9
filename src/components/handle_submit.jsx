import React from "react"

    class HandleSubmit extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                first_name: "",
                last_name:"",
                creation_time:"",
                existing_skills:[],
                desired_skills:[],
                course_intrested:"",
                studentlist: [],
                loadingServer: true,
            }
          this.handleSubmit = this.handleSubmit.bind(this);   
        }
    
    clearContents() {
            this.setState({ typedChars: "" })
    }

    handleButtonSubmit(event) {

        const student = { first_name: this.state.first_name, last_name: this.state.last_name, 
            creation_time: new Date().toISOString(), existing_skills:this.state.existing_skills, 
            desired_skills:this.state.desired_skills }

        const updatedStudentList = [student, ...this.state.studnetlist]
        this.setState({ studnetlist: updatedStudentList });
        try {
            AddStudent(student).then(this.clearContents());
        }
        catch (error) {
            alert(error);
        }
        //Make api call, if needed
    }

    componentDidMount() {
        this.setState({
            loadingServer: true
        })
    
    const student = GetStudentList().then(
        response => {

            this.setState({
                studnetlist: response.data.studentlist,
                loadingServer: false
            })

        }
    )
    }

}

export default HandleSubmit
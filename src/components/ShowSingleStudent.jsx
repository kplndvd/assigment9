
import React from "react"
import { GetStudent } from "../lib/api"
import SkillzForNew from "../components/skillsForNew"
import LevelUpdate from "../components/LevelUpdate"
import { SkillUpdate } from "../lib/api" 


class ShowSingleStudent extends React.Component {
    constructor(props) {
        super(props);

        this.skillRef = React.createRef()
        this.levelRef = React.createRef()

        this.state = {
            loading:false,
            student: null,
            existing_skills: [],
            desired_skills: [],
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    clickHandler(event){
        const skill = this.skillRef.current.value
        const level = this.levelRef.current.value
        const target = event.target
        const name = target.name
        this.setState(prevState => ({
            [name]: [...prevState[name], { "skill": skill, "level": level }]
        }));
        event.preventDefault();
    }

    handleSubmit(event) {
        const data =  {
            existing_skills: this.state.existing_skills,
            desired_skills: this.state.desired_skills,
        }
        alert(data)
        SkillUpdate(data);
        // event.preventDefault();
    }
   
    componentDidMount() {                          
        const url = window.location
        const id = new URLSearchParams(url.search).get("id")
        this.fetchS(id).then()
    }
    
    async fetchS(id) {  
        this.setState({ loading: true });
         const response = await GetStudent(id);  
          const student = response.data;    
          this.setState({ student, loading: false });  }
    
    render() {

        return (
            
            <div>
                {this.state.loading && <h5>Loading...</h5>}          
                {!this.state.loading && this.state.student && (
                <div>
                   <h1>Magic Student</h1>
                   <h5>First Name: {this.state.student.first_name}</h5>
                   <h5>Last Name: {this.state.student.last_name}</h5>
                
                   <h5>Existing Skills: <br/> 
                   {this.state.student.existing_skills.map(item => <span key={item.skill}> "skill:"{item.skill} " level:"{item.level} <br /></span>)}</h5>
                    

                    <h5>Desired Skills: <br/> 
                    {this.state.student.desired_skills.map(item => <span key={item.skill}> "skill:"{item.skill} " level:"{item.level} <br /></span>)}</h5>
                             
                             

                    <h5>Course Intrested: {this.state.student.course}</h5>

                    <h3><b> Add exisiting/desired skills and levels: </b><br /></h3>

                    <SkillzForNew onChange={this.handleESkillChange} ref={this.passer} passer={this.skillRef} />
                    <LevelUpdate onChange={this.handleExistLevel} ref={this.passer} passer={this.levelRef} />
                    
                    <br />
                    
                    <button onClick={this.clickHandler} name="existing_skills">Add to Existing Skills</button>

                    <button onClick={this.clickHandler} name="desired_skills">Add to Desired Skills</button>
                  <br /><br />
                  <button onClick={this.handleSubmit}>Submit Skill updates</button>
                </div>
                )}
                </div>
            
        )
    }
}

export default ShowSingleStudent
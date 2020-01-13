
import React from "react"
import Skillz from "../components/Skillz"

class HandleOptionSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {}
        }

        this.HandleOptionSelect = this.HandleOptionSelect.bind(this);

        HandleOptionSelect = event =>
            this.setState({ selected: { event.item + "_level_" + props.type : event.target.value }, })
    }

}

export default handleCheckChange


            //   checked={this.state.checked}
            //   onChange={this.handleCheckboxChange}
         
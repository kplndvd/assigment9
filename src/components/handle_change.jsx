import React from "react"

class handleChange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typedChars: "",
        }
        this.handleChange = this.handleChange.bind(this);   
    }

    handleChange(event) {

        this.setState({ typedChars: event.target.value })
    }
}

export default handleChange
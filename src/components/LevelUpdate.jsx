
import React from 'react'

class LevelUpdate extends React.Component {
  
  render() {
    const levels = ["choose level", 1, 2, 3, 4, 5]
    return (
      <div>
        <label>
          update level:
          <select onChange={this.props.onChange} ref={this.props.passer}>
            <option>Select Skill:</option>
            {levels.map((level) => <option key={level} value={level}>{level}</option>)}
          </select>
        </label>
      </div>
    )
  }
}
export default LevelUpdate
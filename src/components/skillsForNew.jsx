
import React from "react"


class SkillzForNew extends React.Component {

    render() {

        const skillz = ["choose skill from menu", "Alchemy", "Animation",
            "Conjuror", "Disintegration", "Elemental",
            "Healing", "Illusion", "Immortality", "Invisibility", "Invulnerability",
            "Necromancer", "Omnipresent", "Omniscient", "Poison",
            "Possession", "Self-detonation", "Summoning", "Water breathing"];

        return (

            <div>
                <label>
                    <select onChange={this.props.onChange} ref={this.props.passer}>
                        {skillz.map((skill) => <option key={skill} value={skill}>{skill}</option>)}
                    </select>
                </label >

            </div>
        )
    }
}


export default SkillzForNew
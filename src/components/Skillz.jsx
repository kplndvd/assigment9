
import React from "react"

function Skillz(props) {
    
    const skillz = ["Alchemy", "Animation", "Conjuror", "Disintegration", "Elemental",
        "Healing", "Illusion", "Immortality", "Invisibility", "Invulnerability", "Necromancer",
        "Omnipresent", "Omniscient", "Poison", "Possession", "Self-detonation", "Summoning", "Water breathing"];

    return (
        <div>
            {skillz.map((item) => 
                <label for={item + "_level_" + props.type}>{item}
                    <select name={item + "_level_" + props.type} id={item + "_level_" + props.type}>
                        <option value="0">Select level if skill applies</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </label >
            )
            }
        </div>
    )
}


export default Skillz 
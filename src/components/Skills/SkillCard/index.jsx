import React from "react";
import "./SkillCard.css";
import { BsPatchCheckFill } from "react-icons/bs"; 

const SkillCard = ({ data, title }) => {
    return (
    <div className="skill__card">
        <h3>{title}</h3>
        <div className="skills__contentS">
            {
            data.map((list, index) => (
                <article classNmae='skill__details' key={index}>
                    <BsPatchCheckFill className="skill__icon" />
                    <div>
                        <h4 className="skill__name">{list.skill}</h4>
                        <small className="text__muted skill__level">{list.level}</small>
                    </div>
                </article>
            ))}
        </div>
    </div>
)

}

export default SkillCard;

import React from 'react'
import { useState } from 'react';
import { SkillsWrapper, SkillsContainer, SkillCard, HoverBar } from './SkillsElements';

const Skills: React.FC = () => {

    const skills = [
        {
            title: "javascript",
            img: "/assets/javascript.svg",
            id: 0,
            color: "linear-gradient(116.6deg, #13338F 0%, rgba(123, 32, 231, 0.9) 47.4%, #FFA3BF 100%)",
        },
        {
            title: "react",
            img: "/assets/react.svg",
            id: 1,
            style: {
                paddingTop: "15px"
            },
            color: "linear-gradient(117.03deg, #E92EFB 9.9%, #6EC1CC 58.33%, #52E2C1 83.85%)",
        },
        {
            title: "typescript",
            img: "/assets/typescript.svg",
            id: 2,
            style: {
                paddingTop: "10px"
            },
            color: "linear-gradient(117.03deg, #52E2C1 31.77%, #3CB9FC 100%)",
        },
        {
            title: "sass",
            img: "/assets/sass.svg",
            id: 3,
            style: {
                paddingTop: "35px"
            },
            color: "linear-gradient(117.03deg, #051960 0%, #5A1DA9 65.1%)",
        },
        {
            title: "git",
            img: "/assets/git.svg",
            id: 4,
            color: "linear-gradient(112.15deg, #8A2BE2 24.83%, #3CB9FC 94.42%)",
        },
        {
            title: "nodejs",
            img: "/assets/nodejs.svg",
            id: 5,
            color: "linear-gradient(117.03deg, #3CB9FC 34.9%, #52E2C1 85.94%)",
        },
    ];

    const [classHover, setClassHover] = useState("");

    return (
        <SkillsWrapper id="skills">
            <SkillsContainer>
                {
                    skills.map( skill => (
                <SkillCard key={skill.title} style={(skill.style)? skill.style : {}}>
                    <img src={skills[skill.id].img} alt={skills[skill.id].title} />
                    <p>{skills[skill.id].title}</p>
                    <HoverBar color={skills[skill.id].color} className={classHover} onAnimationEnd={() => setClassHover("open")}></HoverBar>
                </SkillCard>
                    ))

                }
            </SkillsContainer>
        </SkillsWrapper>
    )
}

export default Skills;

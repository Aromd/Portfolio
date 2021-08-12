import React from 'react'
import { useState } from 'react';
import { SkillsWrapper, SkillsContainer, SkillCard, HoverBar } from './SkillsElements';
import { skills } from '../../data/projectsData';

const Skills: React.FC = () => {

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

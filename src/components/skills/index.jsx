import {
    DivSkills,
    SkillsTitle,
    ImageSkillsTest,
    SpanSkillTest,
} from "./styles";

import ImageSkills from "../../assets/icons/icons8-javascript-480.png";

const Skills = (props) => {
    return (
        <DivSkills>
            <SkillsTitle>
                Principais habilidades
                
            </SkillsTitle>
            <ImageSkillsTest src={ImageSkills}></ImageSkillsTest>
                <SpanSkillTest>JavaScript</SpanSkillTest>
        </DivSkills>
    );
};
export default Skills;

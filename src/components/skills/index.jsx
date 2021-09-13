import {
    DivSkills,
    SkillsTitle,
    ImageSkillsTest,
    SpanSkillTest,
    DivSkillTest,
} from "./styles";

import ImageSkills from "../../assets/icons/icons8-javascript-480.png";

const Skills = (props) => {
    return (
        <DivSkills>
            <SkillsTitle>
                Principais habilidades
                
            </SkillsTitle>
            {/* <ImageSkillsTest src={ImageSkills}></ImageSkillsTest>
                <SpanSkillTest>JavaScript</SpanSkillTest> */}
            <DivSkillTest>
                {/* <img src={ImageSkills} width={'45px'} height={'45px'}></img>
                <span>JavaScript</span> */}
                <ImageSkillsTest src={ImageSkills}></ImageSkillsTest>
                <SpanSkillTest>JavaScript</SpanSkillTest>
            </DivSkillTest>
        </DivSkills>
    );
};
export default Skills;

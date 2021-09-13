import {
    DivSkills,
    SkillsTitle,
    ImageSkillsTest,
    SpanSkillTest,
    DivSkillTest,
} from "./styles";

import ImageSkillsJavaScript from "../../assets/icons/javascript.svg"
import ImageSkillsReactJS from "../../assets/icons/react.svg";
import ImageSkillsNative from "../../assets/icons/icons8-nativo-de-reagir-512 (1) 1.svg";
import ImageSkillsRuby from "../../assets/icons/ruby.svg";

const Skills = (props) => {
    return (
        <DivSkills>
            <SkillsTitle>Principais habilidades</SkillsTitle>
            {/* <ImageSkillsTest src={ImageSkills}></ImageSkillsTest>
                <SpanSkillTest>JavaScript</SpanSkillTest> */}
            <DivSkillTest>
                {/* <img src={ImageSkills} width={'45px'} height={'45px'}></img>
                <span>JavaScript</span> */}
                <ImageSkillsTest src={ImageSkillsJavaScript} width={'35px'} height={'35px'}></ImageSkillsTest>
                <SpanSkillTest>JavaScript</SpanSkillTest>
            </DivSkillTest>
            <DivSkillTest>
                {/* <img src={ImageSkills} width={'45px'} height={'45px'}></img>
                <span>JavaScript</span> */}
                <ImageSkillsTest src={ImageSkillsReactJS} width={'35px'} height={'35px'}></ImageSkillsTest>
                <SpanSkillTest>React JS</SpanSkillTest>
            </DivSkillTest>
            <DivSkillTest>
                {/* <img src={ImageSkills} width={'45px'} height={'45px'}></img>
                <span>JavaScript</span> */}
                <ImageSkillsTest src={ImageSkillsNative} width={'35px'} height={'38px'}></ImageSkillsTest>
                <SpanSkillTest>React Native</SpanSkillTest>
            </DivSkillTest>
            <DivSkillTest>
                {/* <img src={ImageSkills} width={'45px'} height={'45px'}></img>
                <span>JavaScript</span> */}
                <ImageSkillsTest src={ImageSkillsRuby} width={'30px'} height={'37px'}></ImageSkillsTest>
                <SpanSkillTest>Ruby on Rails</SpanSkillTest>
            </DivSkillTest>
        </DivSkills>
    );
};
export default Skills;

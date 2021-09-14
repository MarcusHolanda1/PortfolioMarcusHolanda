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
import ImageSkillsRuby from "../../assets/icons/ruby3.svg";

import ImageSkillsGit from '../../assets/icons/git.svg'
import ImageSkillsMySQL from '../../assets/icons/mysql.svg'
import ImageSkillsSwagger from '../../assets/icons/swagger.svg'
import ImageSkillsFigma from '../../assets/icons/figma.svg'

const Skills = (props) => {
    return (
        <>
        <DivSkills>
            <SkillsTitle>Principais habilidades</SkillsTitle>
            <DivSkillTest>
                <ImageSkillsTest src={ImageSkillsJavaScript} width={'32px'} height={'32px'}></ImageSkillsTest>
                <SpanSkillTest>JavaScript</SpanSkillTest>
            </DivSkillTest>
            <DivSkillTest>
                <ImageSkillsTest src={ImageSkillsReactJS} width={'35px'} height={'35px'}></ImageSkillsTest>
                <SpanSkillTest>React JS</SpanSkillTest>
            </DivSkillTest>
            <DivSkillTest>
                <ImageSkillsTest src={ImageSkillsNative} width={'35px'} height={'38px'}></ImageSkillsTest>
                <SpanSkillTest>React Native</SpanSkillTest>
            </DivSkillTest>
            <DivSkillTest>
                <ImageSkillsTest src={ImageSkillsRuby} width={'30px'} height={'37px'}></ImageSkillsTest>
                <SpanSkillTest>Ruby on Rails</SpanSkillTest>
            </DivSkillTest>
        </DivSkills>


        <DivSkills>
            <SkillsTitle>Outras habilidades</SkillsTitle>
            <DivSkillTest>
                <ImageSkillsTest src={ImageSkillsGit} width={'32px'} height={'32px'}></ImageSkillsTest>
                <SpanSkillTest>Git / Gitflow</SpanSkillTest>
            </DivSkillTest>
            <DivSkillTest>
                <ImageSkillsTest src={ImageSkillsMySQL} width={'35px'} height={'35px'}></ImageSkillsTest>
                <SpanSkillTest>MySQL</SpanSkillTest>
            </DivSkillTest>
            <DivSkillTest>
                <ImageSkillsTest src={ImageSkillsSwagger} width={'35px'} height={'38px'}></ImageSkillsTest>
                <SpanSkillTest>Swagget API</SpanSkillTest>
            </DivSkillTest>
            <DivSkillTest>
                <ImageSkillsTest src={ImageSkillsFigma} width={'30px'} height={'37px'}></ImageSkillsTest>
                <SpanSkillTest>Figma</SpanSkillTest>
            </DivSkillTest>
        </DivSkills>
        </>
    );
};
export default Skills;

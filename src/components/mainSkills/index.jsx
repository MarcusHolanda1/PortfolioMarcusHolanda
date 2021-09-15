import {
    DivSkills,
    SkillsTitle,
    ImageSkillsTest,
    SpanSkillTest,
    DivSkillTest,
} from "./styles";

import ImageSkillsJavaScript from "../../assets/icons/javascript.svg";
import ImageSkillsReactJS from "../../assets/icons/react.svg";
import ImageSkillsNative from "../../assets/icons/icons8-nativo-de-reagir-512 (1) 1.svg";
import ImageSkillsRuby from "../../assets/icons/ruby3.svg";

import ImageSkillsGit from "../../assets/icons/git.svg";
import ImageSkillsMySQL from "../../assets/icons/mysql.svg";
import ImageSkillsSwagger from "../../assets/icons/swagger.svg";
import ImageSkillsFigma from "../../assets/icons/figma.svg";

const MainSkills = (props) => {
    return (
        <>
            <DivSkills>
                <SkillsTitle>Principais habilidades</SkillsTitle>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsJavaScript}
                        width={"32px"}
                        height={"32px"}
                    ></ImageSkillsTest>
                    <a
                        href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                        target="_blank"
                    >
                        <SpanSkillTest>JavaScript</SpanSkillTest>
                    </a>
                </DivSkillTest>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsReactJS}
                        width={"35px"}
                        height={"35px"}
                    ></ImageSkillsTest>
                    <a href="https://pt-br.reactjs.org/" target="_blank">
                        <SpanSkillTest>React JS</SpanSkillTest>
                    </a>
                </DivSkillTest>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsNative}
                        width={"35px"}
                        height={"38px"}
                    ></ImageSkillsTest>
                    <a href="https://reactnative.dev/" target="_blank">
                        <SpanSkillTest>React Native</SpanSkillTest>
                    </a>
                </DivSkillTest>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsRuby}
                        width={"30px"}
                        height={"37px"}
                    ></ImageSkillsTest>
                    <a href="https://rubyonrails.org/" target="_blank">
                        <SpanSkillTest>Ruby on Rails</SpanSkillTest>
                    </a>
                </DivSkillTest>
            </DivSkills>

            <DivSkills>
                <SkillsTitle>Outras habilidades</SkillsTitle>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsGit}
                        width={"32px"}
                        height={"32px"}
                    ></ImageSkillsTest>
                    <a
                        href="https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow"
                        target="_blank"
                    >
                        <SpanSkillTest>Git / Gitflow</SpanSkillTest>
                    </a>
                </DivSkillTest>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsMySQL}
                        width={"35px"}
                        height={"35px"}
                    ></ImageSkillsTest>
                    <a href="https://www.mysql.com/" target="_blank">
                        <SpanSkillTest>MySQL</SpanSkillTest>
                    </a>
                </DivSkillTest>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsSwagger}
                        width={"35px"}
                        height={"38px"}
                    ></ImageSkillsTest>
                    <a href="https://swagger.io/" target="_blank">
                        <SpanSkillTest>Swagget API</SpanSkillTest>
                    </a>
                </DivSkillTest>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsFigma}
                        width={"30px"}
                        height={"37px"}
                    ></ImageSkillsTest>
                    <a href="https://www.figma.com/" target="_blank">
                        <SpanSkillTest>Figma</SpanSkillTest>
                    </a>
                </DivSkillTest>
            </DivSkills>
        </>
    );
};
export default MainSkills;

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
import ImageSkillsTypescript from "../../assets/icons/typescriptSkill.svg";
import ImageSkillAndroidStudio from "../../assets/icons/icons8-android-studio 1.svg";

import ImageSkillsGit from "../../assets/icons/git.svg";
import ImageSkillsRedux from "../../assets/icons/icons8-redux 1.svg";
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
                        height={"27px"}
                    ></ImageSkillsTest>
                    <a
                        href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <SpanSkillTest>JavaScript</SpanSkillTest>
                    </a>
                </DivSkillTest>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsTypescript}
                        width={"35px"}
                        height={"38px"}
                    ></ImageSkillsTest>
                    <a
                        href="https://rubyonrails.org/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <SpanSkillTest>TypeScript</SpanSkillTest>
                    </a>
                </DivSkillTest>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsNative}
                        width={"35px"}
                        height={"38px"}
                    ></ImageSkillsTest>
                    <a
                        href="https://reactnative.dev/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <SpanSkillTest>React Native</SpanSkillTest>
                    </a>
                </DivSkillTest>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsReactJS}
                        width={"35px"}
                        height={"35px"}
                    ></ImageSkillsTest>
                    <a
                        href="https://pt-br.reactjs.org/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <SpanSkillTest>React JS</SpanSkillTest>
                    </a>
                </DivSkillTest>
            </DivSkills>

            <DivSkills>
                <SkillsTitle>Outras habilidades</SkillsTitle>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsFigma}
                        width={"30px"}
                        height={"37px"}
                    ></ImageSkillsTest>
                    <a
                        href="https://www.figma.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <SpanSkillTest>Figma / UI</SpanSkillTest>
                    </a>
                </DivSkillTest>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsRedux}
                        width={"35px"}
                        height={"38px"}
                    ></ImageSkillsTest>
                    <a
                        href="https://swagger.io/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <SpanSkillTest>Redux</SpanSkillTest>
                    </a>
                </DivSkillTest>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsGit}
                        width={"32px"}
                        height={"32px"}
                    ></ImageSkillsTest>
                    <a
                        href="https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <SpanSkillTest>Git / Gitflow</SpanSkillTest>
                    </a>
                </DivSkillTest>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillAndroidStudio}
                        width={"35px"}
                        height={"35px"}
                    ></ImageSkillsTest>
                    <a
                        href="https://www.mysql.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <SpanSkillTest>Android Studio</SpanSkillTest>
                    </a>
                </DivSkillTest>
            </DivSkills>
        </>
    );
};
export default MainSkills;

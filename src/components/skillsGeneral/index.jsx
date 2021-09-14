import {
    DivSkills,
    SkillsTitle,
    ImageSkillsTest,
    SpanSkillTest,
    DivSkillTest,
} from "./styles";

import ImageSkillsGeneralHtml from "../../assets/icons/html5.svg"
import ImageSkillsGeneralCSS from "../../assets/icons/css3.svg";
import ImageSkillsGeneralScrum from "../../assets/icons/scrum.svg";

const SkillsGeneral = (props) => {
    return (
        <>
            <DivSkills>
                <SkillsTitle>Principais habilidades</SkillsTitle>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsGeneralHtml}
                        width={"32px"}
                        height={"32px"}
                    ></ImageSkillsTest>
                    <a
                        href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                        target="_blank"
                    >
                        <SpanSkillTest>HTML5</SpanSkillTest>
                    </a>
                </DivSkillTest>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsGeneralCSS}
                        width={"35px"}
                        height={"35px"}
                    ></ImageSkillsTest>
                    <a href="https://pt-br.reactjs.org/" target="_blank">
                        <SpanSkillTest>CSS3</SpanSkillTest>
                    </a>
                </DivSkillTest>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsGeneralScrum}
                        width={"35px"}
                        height={"35px"}
                    ></ImageSkillsTest>
                    <a href="https://pt-br.reactjs.org/" target="_blank">
                        <SpanSkillTest>Metodologia ágil (SCRUM)</SpanSkillTest>
                    </a>
                </DivSkillTest>
            </DivSkills>
        </>
    );
};

export default SkillsGeneral;

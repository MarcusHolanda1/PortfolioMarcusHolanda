import {
    DivSkills,
    SkillsTitle,
    ImageSkillsTest,
    SpanSkillTest,
    DivSkillTest,
} from "./styles";

import ImageSkillsGeneralHtml from "../../assets/icons/html5.svg";
import ImageSkillsGeneralCSS from "../../assets/icons/css3.svg";
import ImageSkillsGeneralScrum from "../../assets/icons/scrum.svg";

const SkillsGeneral = (props) => {
    return (
        <>
            <DivSkills>
                <SkillsTitle>Conhecimentos gerais</SkillsTitle>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsGeneralHtml}
                        width={"32px"}
                        height={"32px"}
                    ></ImageSkillsTest>
                    <a
                        href="https://pt.wikipedia.org/wiki/HTML5"
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
                    <a
                        href="https://pt.wikipedia.org/wiki/CSS3#:~:text=CSS3%20%C3%A9%20a%20terceira%20mais,web%20(p%C3%A1gina%20de%20internet).&text=Assim%2C%20o%20CSS3%20facilitar%C3%A1%20o,utiliza%C3%A7%C3%A3o%20de%20sites%20pelos%20usu%C3%A1rios."
                        target="_blank"
                    >
                        <SpanSkillTest>CSS3</SpanSkillTest>
                    </a>
                </DivSkillTest>
                <DivSkillTest>
                    <ImageSkillsTest
                        src={ImageSkillsGeneralScrum}
                        width={"35px"}
                        height={"35px"}
                    ></ImageSkillsTest>
                    <a
                        href="https://www.atlassian.com/br/agile/scrum"
                        target="_blank"
                    >
                        <SpanSkillTest>Metodologia ágil (SCRUM)</SpanSkillTest>
                    </a>
                </DivSkillTest>
            </DivSkills>
        </>
    );
};

export default SkillsGeneral;

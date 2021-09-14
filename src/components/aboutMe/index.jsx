import {
    DivSkills,
    SkillsTitle,
    ImageSkillsTest,
    SpanSkillTest,
    DivSkillTest,
} from "./styles";

const AboutMe = (props) => {
    return (
        <>
            <DivSkills>
                <SkillsTitle>Sobre mim</SkillsTitle>
                <DivSkillTest>
                        <SpanSkillTest>Tenho 20 anos, resido em Brasília-DF, atualmente trabalho com Desenvolvimento Mobile na PaP, possuo formação Técnica em TI e atualmente estou cursando o ensino superior Análise e Desenvolvimento de Sistemas pela Estácio. Acredito que já conquistei bastante coisa pela minha idade e isso só demonstra o quanto eu sou esforçado.</SpanSkillTest>
                </DivSkillTest>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <SkillsTitle>Objetivos</SkillsTitle>
                
                <DivSkillTest>
                        <SpanSkillTest>Meu maior objetivo pessoal após eu conseguir ter uma boa experiência na carreira é encontrar alguma pessoa que tenha a mesma garra e vontade que eu tive quando comecei na área e assim  guiá-la para o sucesso, sinto que passar conhecimentos para frente é umas das coisas mais prazerosas da vida, ainda mais para pessoas que realmente queiram evoluir.</SpanSkillTest>
                </DivSkillTest>
            </DivSkills>
        </>
    );
};

export default AboutMe;

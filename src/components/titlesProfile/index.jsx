import { TitlesDiv, MyName, MyProfession } from "./styles";
import Typewriter from "typewriter-effect";

const TitlesProfile = (props) => {
    return (
        <TitlesDiv>
            <MyName>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                            .start()
                            .typeString("Olá, tudo bem?")
                            .pauseFor(5000)
                            .deleteAll()
                            .typeString("Meu nome é Marcus Holanda")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("Tenho 20 anos")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("Sou Desenvolvedor Front-end");
                    }}
                ></Typewriter>
            </MyName>
            <MyProfession>
                Sou apenas um desenvolvedor front-end esforçado, em busca de
                sempre adquirir novos conhecimentos, experiência e novos
                desafios. Atualmente trabalho com desenvolvimento Mobile na Supera Tecnologia.
            </MyProfession>
            {props.children}
        </TitlesDiv>
    );
};
export default TitlesProfile;

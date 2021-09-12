import { TitlesDiv, MyName } from "./styles";
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
                        .typeString("Sou Desenvolvedor Front-End")
                    }}
                ></Typewriter>
            </MyName>
        </TitlesDiv>
    );
};
export default TitlesProfile;

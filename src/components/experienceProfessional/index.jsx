import {
    DivExperienceProfessional,
    TitleExperienceProfessional,
    CardExperienceProfessional,
    ImageCard,
    TitleCard,
    ExpAPP,
    ExpText,
    DivExp,
    CardExperienceProfessionalTester,
    ImageCardTester,
    DivExpTester,
    TitleCardTester,
    ExpAPPTester,
    ExpTextTester,
} from "./styles";

import DevImage from "../../assets/images/programador.png";
import TesterImage from "../../assets/images/bug-do-computador.png";

const ExperienceProfessional = (props) => {
    return (
        <>
            <TitleExperienceProfessional>
                Experiência profissional
            </TitleExperienceProfessional>
            <DivExperienceProfessional>
                <CardExperienceProfessional>
                    <ImageCard src={DevImage}></ImageCard>
                    <DivExp>
                        <TitleCard>Desenvolvedor React Native</TitleCard>
                        <ExpAPP>
                            Supera Inovação em Tecnologia | Novembro de 2021 -
                            Atualmente
                        </ExpAPP>
                        <ExpText>
                            Desenvolvimento em aplicativo legado utilizando
                            React Native com redux para o gerenciamento de
                            estado e integrações com API e realização de tarefas
                            em WebSites com React Js.
                        </ExpText>
                    </DivExp>
                </CardExperienceProfessional>

                <CardExperienceProfessionalTester>
                    <ImageCardTester src={TesterImage}></ImageCardTester>
                    <DivExpTester>
                        <TitleCardTester>QA Tester</TitleCardTester>
                        <ExpAPPTester>
                            PaP | Aplicativo de mobilidade | Março de 2021 -
                            Agosto de 2021
                        </ExpAPPTester>
                        <ExpTextTester>
                            Qa tester na PaP adquirindo todo conhecimento e
                            experiência que um responsável pela qualidade da
                            aplicação deve ter.
                        </ExpTextTester>
                    </DivExpTester>
                </CardExperienceProfessionalTester>
            </DivExperienceProfessional>
        </>
    );
};

export default ExperienceProfessional;

import {
    DivExperienceProfessional,
    TitleExperienceProfessional,
    CardExperienceProfessional,
    ImageCard,
    TitleCard,
    ExpAPP,
    ExpText,
    DivExp,
    TitleExperienceProfessionalTester,
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
                        <TitleCard>Desenvolvedor Mobile</TitleCard>
                        <ExpAPP>
                            PaP | Aplicativo de mobilidade | Junho de 2021 -
                            Atualmente
                        </ExpAPP>
                        <ExpText>
                            Desenvolvimento em dois aplicativos de mobilidade
                            (IOS e Android) cujo um app é voltado para o
                            passageiro e outro para o motorista, o aplicativo
                            possui as plataformas de transporte terrestre,
                            náutico e aéreo
                        </ExpText>
                    </DivExp>
                </CardExperienceProfessional>

                <CardExperienceProfessionalTester>
                    <ImageCardTester src={TesterImage}></ImageCardTester>
                    <DivExpTester>
                        <TitleCardTester>QA Tester</TitleCardTester>
                        <ExpAPPTester>
                            PaP | Aplicativo de mobilidade | Março de 2021 -
                            Junho de 2021
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

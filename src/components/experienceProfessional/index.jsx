import {
    DivExperienceProfessional,
    TitleExperienceProfessional,
    CardExperienceProfessional,
    ImageCard,
    TitleCard,
    ExpAPP,
    ExpText,
    DivExp,
} from "./styles";

import DevImage from "../../assets/images/programador.png";

const ExperienceProfessional = (props) => {
    return (
        <DivExperienceProfessional>
            <TitleExperienceProfessional>
                Experiência profissional
            </TitleExperienceProfessional>
            <CardExperienceProfessional>
                <ImageCard src={DevImage}></ImageCard>
                <DivExp>
                    <TitleCard>Desenvolvedor Mobile</TitleCard>
                    <ExpAPP>
                        PaP | Aplicativo de mobilidade | Junho de 2021 -
                        Atualmente
                    </ExpAPP>
                    <ExpText>
                        Desenvolvimento em dois aplicativos de mobilidade (IOS e
                        Android) cujo um app é voltado para o passageiro e outro
                        para o motorista, o aplicativo possui as plataformas de
                        transporte terrestre, náutico e aéreo
                    </ExpText>

                </DivExp>
            </CardExperienceProfessional>
        </DivExperienceProfessional>
    );
};

export default ExperienceProfessional;

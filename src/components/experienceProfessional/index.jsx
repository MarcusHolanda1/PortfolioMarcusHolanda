import {
    DivExperienceProfessional,
    TitleExperienceProfessional,
    CardExperienceProfessional,
    ImageCard,
    TitleCard
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
                <TitleCard>Desenvolvedor Mobile</TitleCard>
            </CardExperienceProfessional>
        </DivExperienceProfessional>
    );
};

export default ExperienceProfessional;

import MainContainerPortfolio from "../components/containers/containerPortfolio";
import InsideContainer from "../components/containers/containerInsidePortfolio";
import PicturePortfolio from "../components/picturePortfolio";
import IconsPicture from "../components/iconsPicture";
import TitlesProfile from "../components/titlesProfile";
import PortfolioGoButton from "../components/portfolioGoButton";
import ExperienceProfessional from "../components/experienceProfessional";
import InsideContainerCard from '../components/containers/containerInsideCards';
import InsideContainerSkills from '../components/containers/containerInsideSkills';
import Skills from '../components/skills'


const Portfolio = (props) => {
    return (
        <MainContainerPortfolio>
            <InsideContainer>
                <PicturePortfolio></PicturePortfolio>
                <IconsPicture></IconsPicture>
                <TitlesProfile>
                </TitlesProfile>
            </InsideContainer>
            <InsideContainerCard>
                <ExperienceProfessional></ExperienceProfessional>
            </InsideContainerCard>
            <InsideContainerSkills>
                <Skills>
                    
                </Skills>
            </InsideContainerSkills>
        </MainContainerPortfolio>
    );
};
export default Portfolio;

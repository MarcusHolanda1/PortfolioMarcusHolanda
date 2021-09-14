import MainContainerPortfolio from "../components/containers/containerPortfolio";
import InsideContainer from "../components/containers/containerInsidePortfolio";
import PicturePortfolio from "../components/picturePortfolio";
import IconsPicture from "../components/iconsPicture";
import TitlesProfile from "../components/titlesProfile";
import PortfolioGoButton from "../components/portfolioGoButton";
import ExperienceProfessional from "../components/experienceProfessional";
import InsideContainerCard from "../components/containers/containerInsideCards";
import InsideContainerSkills from "../components/containers/containerInsideSkills";
import MainSkills from "../components/mainSkills";
import InsideContainerSkillsGeneral from "../components/containers/containerInsideSkillsGeneral";
import SkillsGeneral from "../components/skillsGeneral";
import InsideContainerAboutMe from "../components/containers/containerInsideAboutMe";
import AboutMe from "../components/aboutMe";

const Portfolio = (props) => {
    return (
        <MainContainerPortfolio>
            <InsideContainer>
                <PicturePortfolio></PicturePortfolio>
                <IconsPicture></IconsPicture>
                <TitlesProfile></TitlesProfile>
            </InsideContainer>
            <InsideContainerCard>
                <ExperienceProfessional></ExperienceProfessional>
            </InsideContainerCard>
            <InsideContainerSkills>
                <MainSkills></MainSkills>
            </InsideContainerSkills>

            <InsideContainerSkillsGeneral>
                <SkillsGeneral></SkillsGeneral>
            </InsideContainerSkillsGeneral>

            <InsideContainerAboutMe>
                <AboutMe></AboutMe>
            </InsideContainerAboutMe>
        </MainContainerPortfolio>
    );
};
export default Portfolio;

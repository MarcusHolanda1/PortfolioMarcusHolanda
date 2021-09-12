import MainContainerPortfolio from "../components/containers/containerPortfolio";
import InsideContainer from "../components/containers/containerInsidePortfolio";
import PicturePortfolio from "../components/picturePortfolio";
import IconsPicture from "../components/iconsPicture";
import TitlesProfile from "../components/titlesProfile";
import PortfolioGoButton from "../components/portfolioGoButton";

const Portfolio = (props) => {
    return (
        <MainContainerPortfolio>
            <InsideContainer>
                <PicturePortfolio></PicturePortfolio>
                <IconsPicture></IconsPicture>
                <TitlesProfile>
                    <PortfolioGoButton />
                </TitlesProfile>
            </InsideContainer>
        </MainContainerPortfolio>
    );
};
export default Portfolio;

import MainContainerPortfolio from '../components/containers/containerPortfolio'
import InsideContainer from '../components/containers/containerInsidePortfolio'
import PicturePortfolio from '../components/picturePortfolio'

const Portfolio = props => {
    return (
        <MainContainerPortfolio>    
            <InsideContainer>
               <PicturePortfolio/>
            </InsideContainer>
            
        </MainContainerPortfolio>
    )
}
export default Portfolio
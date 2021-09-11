import MainContainerPortfolio from '../components/containers/containerPortfolio'
import InsideContainer from '../components/containers/containerInsidePortfolio'
import PicturePortfolio from '../components/picturePortfolio'
import IconsPicture from '../components/iconsPicture'


const Portfolio = props => {
    return (
        <MainContainerPortfolio>    
            <InsideContainer>
               <PicturePortfolio></PicturePortfolio>
                              <IconsPicture></IconsPicture>

            </InsideContainer>
            
        </MainContainerPortfolio>
    )
}
export default Portfolio
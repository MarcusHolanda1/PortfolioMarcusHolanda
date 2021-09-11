 import { IconsDiv, IconGithubCSS, IconLinkedinCSS, IconEmailCSS } from "./styles"

 import IconGithub from '../../assets/icons/GitHub_Icon.svg'
 import IconLinkedin from '../../assets/icons/linkedin-4-512.png'
 import IconEmail from '../../assets/icons/email_icon.svg'

 const IconsPicture = props => {
     return (
         <>
         <IconsDiv>
             <IconGithubCSS src={IconGithub}></IconGithubCSS>
             <IconLinkedinCSS src={IconLinkedin}></IconLinkedinCSS> 
             <IconEmailCSS src={IconEmail}></IconEmailCSS>
             {/* <Icons scr={}></Icons>
             <Icons scr={}></Icons> */}
         </IconsDiv>
             </>
     )
 }

 export default IconsPicture
 import { IconsDiv, Icons } from "./styles"

 import IconGithub from '../../assets/icons/GitHub_Icon.svg'

 const IconsPicture = props => {
     return (
         <>
         <IconsDiv>
             <Icons scr={IconGithub}></Icons>
             <Icons scr={IconGithub}></Icons>
             <Icons scr={IconGithub}></Icons>
             {/* <Icons scr={}></Icons>
             <Icons scr={}></Icons> */}
         </IconsDiv>
             </>
     )
 }

 export default IconsPicture
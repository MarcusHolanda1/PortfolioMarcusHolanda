import {
    IconsDiv,
    IconGithubCSS,
    IconLinkedinCSS,
    IconEmailCSS,
} from "./styles";

const IconsPicture = (props) => {
    return (
        <>
            <IconsDiv>
                <a href="https://github.com/MarcusHolanda1" target="_blank">
                    <IconGithubCSS></IconGithubCSS>
                </a>
                <a
                    href="https://www.linkedin.com/in/marcus-holanda-878b011b7/"
                    target="_blank"
                >
                    <IconLinkedinCSS></IconLinkedinCSS>
                </a>
                <a
                    href="https://mail.google.com/mail/u/guimaraes.marcusvinicius@gmail.com"
                    target="_blank"
                >
                    <IconEmailCSS></IconEmailCSS>
                </a>

                {/* <Icons scr={}></Icons>
             <Icons scr={}></Icons> */}
            </IconsDiv>
        </>
    );
};

export default IconsPicture;

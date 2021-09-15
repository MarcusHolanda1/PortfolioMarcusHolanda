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
                <a
                    href="https://github.com/MarcusHolanda1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <IconGithubCSS></IconGithubCSS>
                </a>
                <a
                    href="https://www.linkedin.com/in/marcus-holanda-878b011b7/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <IconLinkedinCSS></IconLinkedinCSS>
                </a>
                <a
                    href="https://mail.google.com/mail/u/guimaraes.marcusvinicius@gmail.com"
                    rel="noopener noreferrer"
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

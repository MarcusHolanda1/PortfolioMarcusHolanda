import React from "react";

import Typewriter from "typewriter-effect";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { Fade } from "react-reveal";

import * as S from "./styles";
import Card from "../../components/Card";
import MyProfilePic from "../../assets/images/me.jpg";
import DevImage from "../../assets/images/programador.png";
import TypescriptIcon from "../../assets/icons/typescriptSkill.svg";
import ReactNativetIcon from "../../assets/icons/reactNative.svg";
import ReactIcon from "../../assets/icons/react.svg";
import AndroidStudioIcon from "../../assets/icons/AndroidStudioIcon.svg";
import FigmaIcon from "../../assets/icons/figma.svg";
import GitIcon from "../../assets/icons/git.svg";
import XcodeIcon from "../../assets/icons/icons8-xcode 1.svg";
import Flutter from "../../assets/icons/flutter.svg";
import Css3Icon from "../../assets/icons/css3.svg";
import Html5Icon from "../../assets/icons/html5.svg";
import ScrumIcon from "../../assets/icons/scrum.svg";
import Text from "../../components/Texts";

const HomePage = () => {
    return (
        <S.Container>
            <Fade left>
                <Card>
                    <S.CardMe>
                        <S.ContentAvatar>
                            <S.Avatar src={MyProfilePic}></S.Avatar>
                            <S.Socials>
                                <a
                                    href="https://github.com/MarcusHolanda1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <S.ButtonIcon>
                                        <AiFillGithub color="white" size={28} />
                                    </S.ButtonIcon>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/marcus-holanda-878b011b7/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button
                                        style={{
                                            background: "transparent",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <AiFillLinkedin
                                            color="white"
                                            size={28}
                                        />
                                    </button>
                                </a>
                                <a
                                    href="https://mail.google.com/mail/u/guimaraes.marcusvinicius@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <S.ButtonIcon>
                                        <HiOutlineMail
                                            color="white"
                                            size={28}
                                        />
                                    </S.ButtonIcon>
                                </a>
                            </S.Socials>
                        </S.ContentAvatar>
                        <S.ContentTitleProfile>
                            <Text
                                textType="h1"
                                style={{ fontWeight: 400, marginBottom: 20 }}
                            >
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .start()
                                            .typeString("Olá, tudo bem?")
                                            .pauseFor(5000)
                                            .deleteAll()
                                            .typeString(
                                                "Meu nome é Marcus Holanda"
                                            )
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .typeString("Tenho 20 anos")
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .typeString(
                                                "Sou Desenvolvedor Mobile"
                                            );
                                    }}
                                ></Typewriter>
                            </Text>
                            <p>
                                Sou apenas um desenvolvedor esforçado, em busca
                                de sempre adquirir novos conhecimentos,
                                experiência e novos desafios. Atualmente
                                trabalho com desenvolvimento Mobile na Supera
                                Tecnologia.
                            </p>
                        </S.ContentTitleProfile>
                    </S.CardMe>
                </Card>
                <div style={{ height: 16 }}></div>
            </Fade>
            <Fade left>
                <Card>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: 18,
                        }}
                    >
                        <Text textType="h2">Experiência profissional</Text>
                    </div>
                    <S.ContentCardExperience>
                        <S.CardExperience>
                            <img
                                alt="react-native"
                                src={DevImage}
                                width={97}
                                height={97}
                            />
                            <p
                                style={{
                                    fontSize: 18,
                                    fontWeight: 600,
                                    marginTop: 12,
                                }}
                            >
                                Desenvolvedor React Native
                            </p>
                            <span
                                style={{
                                    fontSize: 12,
                                    fontWeight: 400,
                                    marginTop: 12,
                                    color: "#B6B6B6",
                                }}
                            >
                                Supera Inovação em Tecnologia | Novembro de 2021
                                - Março de 2022
                            </span>
                            <p
                                style={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    marginTop: 12,
                                }}
                            >
                                Desenvolvimento em aplicativo legado utilizando
                                React Native com redux para o gerenciamento de
                                estado e integrações com API e realização de
                                tarefas em WebSites com React Js.
                            </p>
                        </S.CardExperience>
                        <S.CardExperience>
                            <img
                                alt="dev"
                                src={DevImage}
                                width={97}
                                height={97}
                            />
                            <p
                                style={{
                                    fontSize: 18,
                                    fontWeight: 600,
                                    marginTop: 12,
                                }}
                            >
                                Desenvolvedor React Native | Flutter
                            </p>
                            <span
                                style={{
                                    fontSize: 12,
                                    fontWeight: 400,
                                    marginTop: 12,
                                    color: "#B6B6B6",
                                }}
                            >
                                Fortics | Março de 2021 - Atualmente
                            </span>
                            <p
                                style={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    marginTop: 12,
                                }}
                            >
                                Desenvolvimento React Native de features, fix,
                                refatoração de código, integações com api,
                                whitelabels, build de aplicativos para lojas
                                apple e android. Desenvolvimento Flutter,
                                desenvolvimento de interfaces e criação de lib
                                interna para a empresa. Ambas as stacks
                                aplicando testes unitários em todas features
                                implementadas.
                            </p>
                        </S.CardExperience>
                        <S.CardExperience>
                            <img
                                alt="dev"
                                src={DevImage}
                                width={97}
                                height={97}
                            />
                            <p
                                style={{
                                    fontSize: 18,
                                    fontWeight: 600,
                                    marginTop: 12,
                                }}
                            >
                                QA Tester
                            </p>
                            <span
                                style={{
                                    fontSize: 12,
                                    fontWeight: 400,
                                    marginTop: 12,
                                    color: "#B6B6B6",
                                }}
                            >
                                PaP | Aplicativo de mobilidade | Março de 2021 -
                                Agosto de 2021
                            </span>
                            <p
                                style={{
                                    fontSize: 14,
                                    fontWeight: 500,
                                    marginTop: 12,
                                }}
                            >
                                Qa tester na PaP adquirindo todo conhecimento e
                                experiência que um responsável pela qualidade da
                                aplicação deve ter.
                            </p>
                        </S.CardExperience>
                    </S.ContentCardExperience>
                </Card>
                <div style={{ height: 16 }}></div>
            </Fade>
            <Fade left>
                <Card>
                    <S.CardSkills>
                        <S.MainSkills>
                            <Text textType="h2">Principais habilidades</Text>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 20,
                                }}
                            >
                                <img
                                    alt="typescript"
                                    width={45}
                                    height={45}
                                    src={TypescriptIcon}
                                ></img>
                                <p style={{ marginLeft: 8 }}>TypeScript</p>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 20,
                                }}
                            >
                                <img
                                    alt="react-native"
                                    width={45}
                                    height={45}
                                    src={ReactNativetIcon}
                                ></img>
                                <p style={{ marginLeft: 8 }}>React Native</p>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 20,
                                }}
                            >
                                <img
                                    alt="flutter"
                                    width={42}
                                    height={38}
                                    src={Flutter}
                                ></img>
                                <p style={{ marginLeft: 8 }}>Flutter</p>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 20,
                                }}
                            >
                                <img
                                    alt="unit-test"
                                    width={45}
                                    height={45}
                                    src="https://img.icons8.com/color/48/FFFFFF/thin-test-tube.png"
                                />
                                <p style={{ marginLeft: 8 }}>
                                    Testes unitários
                                </p>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 20,
                                }}
                            >
                                <img
                                    alt="react-icon"
                                    width={45}
                                    height={45}
                                    src={ReactIcon}
                                ></img>
                                <p style={{ marginLeft: 8 }}>React JS</p>
                            </div>
                        </S.MainSkills>
                        <S.OtherSkills>
                            <Text textType="h2">Outras habilidades</Text>

                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 20,
                                }}
                            >
                                <img
                                    alt="xcode"
                                    width={45}
                                    height={45}
                                    src={XcodeIcon}
                                ></img>
                                <p style={{ marginLeft: 8 }}>Xcode</p>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 20,
                                }}
                            >
                                <img
                                    alt="android-studio"
                                    width={45}
                                    height={45}
                                    src={AndroidStudioIcon}
                                ></img>
                                <p style={{ marginLeft: 8 }}>Android Studio</p>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 20,
                                }}
                            >
                                <img
                                    alt="figma"
                                    width={45}
                                    height={45}
                                    src={FigmaIcon}
                                ></img>
                                <p style={{ marginLeft: 8 }}>Figma / UI</p>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    marginTop: 20,
                                }}
                            >
                                <img
                                    alt="git-icon"
                                    width={45}
                                    height={45}
                                    src={GitIcon}
                                ></img>
                                <p style={{ marginLeft: 8 }}>Git / Gitflow</p>
                            </div>
                        </S.OtherSkills>
                    </S.CardSkills>
                </Card>
                <div style={{ height: 16 }}></div>
            </Fade>
            <Fade left>
                <Card>
                    <S.GeneralKnowledge>
                        <Text textType="h2">Conhecimentos gerais</Text>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 20,
                            }}
                        >
                            <img
                                alt="css3"
                                width={45}
                                height={45}
                                src={Css3Icon}
                            ></img>
                            <p style={{ marginLeft: 8 }}>HTML5</p>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 20,
                            }}
                        >
                            <img
                                alt="html5"
                                width={45}
                                height={45}
                                src={Html5Icon}
                            ></img>
                            <p style={{ marginLeft: 8 }}>CSS3</p>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 20,
                            }}
                        >
                            <img
                                alt="scrum"
                                width={45}
                                height={45}
                                src={ScrumIcon}
                            ></img>
                            <p style={{ marginLeft: 8 }}>
                                Metodologia ágil (SCRUM)
                            </p>
                        </div>
                    </S.GeneralKnowledge>
                </Card>
                <div style={{ height: 16 }}></div>
            </Fade>
            <Fade left>
                <Card>
                    <S.CardAboutMe>
                        <div>
                            <div style={{ marginBottom: 10 }}>
                                <Text textType="h2">Sobre mim</Text>
                            </div>
                            <p>
                                Tenho 21 anos, resido em Brasília-DF, atualmente
                                trabalho com Desenvolvimento Mobile na Supera
                                Tecnologia, possuo formação Técnica em TI e
                                estou cursando o ensino superior Análise e
                                Desenvolvimento de Sistemas pela Estácio.
                                Acredito que já conquistei bastante coisa pela
                                minha idade e isso só demonstra o quanto eu sou
                                esforçado.
                            </p>
                        </div>
                        <div style={{ marginTop: 20 }}>
                            <div style={{ marginBottom: 10 }}>
                                <Text textType="h2">Objetivos</Text>
                            </div>
                            <p>
                                Meu maior objetivo pessoal após eu conseguir ter
                                uma boa experiência na carreira é encontrar
                                alguma pessoa que tenha a mesma garra e vontade
                                que eu tive quando comecei na área e assim
                                guiá-la para o sucesso, sinto que passar
                                conhecimentos para frente é umas das coisas mais
                                prazerosas da vida, ainda mais para pessoas que
                                realmente queiram evoluir.
                            </p>
                        </div>
                    </S.CardAboutMe>
                </Card>
            </Fade>
        </S.Container>
    );
};
export default HomePage;

import styled from "styled-components";

export const DivSkills = styled.section`
    width: 400px;
    height: 300px;

    display: inline-block;
    flex-direction: row;
    margin-left: 0px;
    margin-top: 30px;
`;

export const SkillsTitle = styled.h1`
    margin-left: 60px;
    color: white;
    font-size: 24px;
    text-align: left;
    


`;

export const SpanSkillTest = styled.a`
    position: absolute;
    color: white;

    font-size: 17px;

    margin-right: 42px;



`;

export const DivSkillTest = styled.div`
    width: 790px;
    height: 90px;

    margin-left: 60px;
    margin-top: 15px;
    


    @media (max-width: 975px) {
    width: 740px;
    height: max(15vh, 100px);

}

  @media (max-width: 650px) {
    width: 300px;
    height: 390px;
      
      
}
`;

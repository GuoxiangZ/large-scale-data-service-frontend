import styled from "styled-components";
import logo from './logo/img.png'

const IntroContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #000, #333);

`;

const LogoContainer = styled.div`
  width: 20%;
  height: 185px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-left: 60px;
`;

const WelcomeContainer = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  margin-left: 0;
  
`;

const Img = styled.img`
  position: relative;
  width: 50%;
  height: 30%;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 45px;
  color: #854CE6;
  line-height: 38px;
`;

const Text = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: #d4b8ff;
  line-height: 38px;
`;

function Intro(){
  return(
    <IntroContainer>
        <LogoContainer>
            <Img src={logo} alt="logo image" />
        </LogoContainer>
        <WelcomeContainer> 
            <Title> Welcome!</Title>
            <Text> Fill in the required attributes below to search for the corresponding data. </Text>

        </WelcomeContainer>
    



    </IntroContainer>

  )


}
export default Intro;


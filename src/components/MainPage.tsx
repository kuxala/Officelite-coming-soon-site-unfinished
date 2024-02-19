import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  max-width: 80%;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 200px;
  }
`;
const LeftCol = styled.div`
  padding-top: 24px;
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;
const RightCol = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 80px;
  @media only screen and (min-width: 768px) {
    width: 50%;
    justify-content: center;
    height: 400px;
    margin-top: 0px;
  }
`;
const H1 = styled.h1`
  color: #333950;
  text-align: center;
  font-family: "Kumbh Sans";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 120% */
  @media only screen and (min-width: 768px) {
    max-width: 540px;
    text-align: left;
    margin: 0 auto;
  }
`;
const P = styled.p`
  color: #747b95;
  text-align: center;
  font-family: "Kumbh Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
  padding: 24px 0;
  @media only screen and (min-width: 768px) {
    max-width: 540px;
    text-align: left;
    margin: 0 auto;
  }
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 171px;
  height: 56px;
  flex-shrink: 0;
  border: 0px;
  border-radius: 28px;
  background: #5175ff;
  box-shadow: 0px 25px 25px -10px rgba(63, 91, 194, 0.25);
  color: #fff;
  font-family: "Kumbh Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 175% */
  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;

const ButtonDiv = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    margin: 0 auto;
    max-width: 540px;
  }
`;
function MainPage() {
  return (
    <>
      <Container>
        <LeftCol>
          <H1>A simple solution to complex tasks is coming soon</H1>
          <P>
            Say goodbye to inefficient juggling of multiple apps, teams, and
            projects. Officelite is the new collaboration platform built with an
            intuitive interface to improve productivity.
          </P>
          <ButtonDiv>
            <Button>Get Started</Button>
          </ButtonDiv>
        </LeftCol>
        <RightCol>
          <img src="../../assets/page.svg" />
        </RightCol>
      </Container>
    </>
  );
}

export default MainPage;

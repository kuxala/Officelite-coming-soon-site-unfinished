import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 13px;
  border-radius: 13px;
  background: #fff;
  box-shadow: 0px 50px 50px -25px rgba(75, 92, 154, 0.25);
  /* max-width: 400px;
  max-height: 508px;
  flex-shrink: 0; */
`;
const Span = styled.span`
  padding: 20px 0;
  color: #333950;
  font-family: "Kumbh Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 140% */
`;
const H1 = styled.h1`
  color: #333950;
  font-family: "Kumbh Sans";
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px; /* 114.286% */
  padding-bottom: 8px;
`;
const H3 = styled.h3`
  color: #333950;
  text-align: center;
  font-family: "Kumbh Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  padding-bottom: 40px;
`;
const P = styled.p`
  color: #747b95;
  text-align: center;
  font-family: "Kumbh Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px; /* 175% */
  padding-bottom: 14px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 171px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 28px;
  border: 0px;
  background: rgba(81, 117, 255, 0.2);
  color: #5175ff;
  text-align: center;
  font-family: "Kumbh Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 175% */
  margin-top: 20px;
  margin-bottom: 40px;
  &:hover {
    opacity: 0.7;
  }
`;
function Card({
  plan,
  price,
  span,
  storage,
  text,
  text2,
  backgroundColor,
}: any) {
  return (
    <>
      <CardContainer style={{ backgroundColor: backgroundColor }}>
        <Span>{plan}</Span>
        <H1>{price}</H1>
        <H3>{span}</H3>
        <P>{text}</P>
        <P>{storage}GB storage</P>
        <P>{text2}</P>
        <Button>Try for free</Button>
      </CardContainer>
    </>
  );
}

export default Card;

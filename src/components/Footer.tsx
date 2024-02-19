import { useEffect, useState } from "react";
import styled from "styled-components";

const Footerr = styled.footer`
  background-color: #25293a;
  color: #fff;
  padding-bottom: 50px;
`;
const AllDiv = styled.div`
  @media only screen and (min-width: 768px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;
const TwoDiv = styled.div`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
`;
const TextDiv = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 20px;
`;
const P = styled.p`
  color: #fff;
  text-align: center;
  font-family: "Kumbh Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 300% */
  letter-spacing: 5px;
  text-transform: uppercase;
`;
const Span = styled.span`
  color: #fff;
  text-align: center;
  font-family: "Kumbh Sans";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 150% */
`;
const Timer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-width: 72px;
  height: 92px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #333950;
`;
const TimerDiv = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  padding-bottom: 50px;
`;
const TimerP = styled.p`
  color: #fff;
  text-align: center;
  font-family: "Kumbh Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  opacity: 0.5;
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
  border-radius: 28px;
  background: #5175ff;
  color: #fff;
  text-align: center;
  font-family: "Kumbh Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 175% */
  @media only screen and (min-width: 768px) {
    margin-top: 10%;
  }

  &:hover {
    opacity: 0.7;
  }
`;
function Footer() {
  const [time, setTime] = useState<any>();
  const [days, setDays] = useState<any>();
  const [hours, setHours] = useState<any>();
  const [minutes, setMinutes] = useState<any>();
  const [seconds, setSeconds] = useState<any>();
  useEffect(() => {
    var countDownDate = 90000 * 60;
    var distance = countDownDate;

    const intervalId = setInterval(() => {
      distance -= 1;
      var minutes = Math.floor((distance % (60 * 60)) / 60);
      var seconds = distance % 60;
      var days = Math.floor(distance / (60 * 24));
      var hours = Math.floor((distance % (60 * 24)) / 60);
      setTime(
        `${days} days, ${hours} hours, ${minutes} minutes ${seconds} seconds`
      );
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
      if (distance === 0) {
        alert("done");
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Footerr>
        <AllDiv>
          <TwoDiv>
            <TextDiv>
              <P>COMING Soon</P>
            </TextDiv>

            <TimerDiv>
              <Timer>
                <Span>{days}</Span>
                <TimerP>Days</TimerP>
              </Timer>
              <Timer>
                <Span>{hours}</Span>
                <TimerP>Hours</TimerP>
              </Timer>
              <Timer>
                <Span>{minutes}</Span>
                <TimerP>Minutes</TimerP>
              </Timer>
              <Timer>
                <Span>{seconds}</Span>
                <TimerP>Seconds</TimerP>
              </Timer>
            </TimerDiv>
          </TwoDiv>
          <Button>Get Started</Button>
        </AllDiv>
      </Footerr>
    </>
  );
}

export default Footer;

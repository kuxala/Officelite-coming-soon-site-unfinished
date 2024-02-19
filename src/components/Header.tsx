import styled from "styled-components";
const Logo = styled.img`
  display: flex;
  margin: 0 auto;
  margin-top: 46px;
  height: 30px;
  @media only screen and (min-width: 768px) {
    margin: 0;
    margin-top: 81px;
    margin-left: 165px;
    justify-content: flex-start;
  }
`;
function Header() {
  return (
    <>
      <header>
        <Logo src="../../assets/officelite.svg" />
      </header>
    </>
  );
}
export default Header;

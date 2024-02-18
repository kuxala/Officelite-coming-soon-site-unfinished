import styled from "styled-components";
const Logo = styled.img`
  display: flex;
  margin: 0 auto;
  margin-top: 46px;
  height: 30px;
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

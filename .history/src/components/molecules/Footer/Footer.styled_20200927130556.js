import styled from "styled-components";
import footerImage from "../../../assets/images/footer.jpg";

export const StyledFooter = styled.footer`
  background: url(${footerImage});
  bottom: 0;
  width: 100vw;
  height: 10vh;
  margin-top: 3vw;
  padding: 3vw;
  p {
    padding: 0 2vw;
    margin: 0;
  }
`;

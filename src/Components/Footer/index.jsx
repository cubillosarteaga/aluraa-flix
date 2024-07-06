import styled from "styled-components";

const FooterEstilizado = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
border-top: 2px solid #257be5;
  background-color: #000;
  -moz-box-shadow: 0px 0px 30px #257be5;
  -webkit-box-shadow: 0px 0px 30px #257be5;
  box-shadow: 0px 0px 30px #257be5;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-top: 70px;
  margin-bottom: 124px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
  & > img {
        width: 200px;
    }

`


const Footer = () => {
    return <FooterEstilizado>
        <img src="./img/logo-footer.png" alt="Logo" />
    
    </FooterEstilizado>
}

export default Footer
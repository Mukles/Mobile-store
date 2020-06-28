import styled from 'styled-components';

export const ButtonContainer = styled.button`
  margin:  0;
  display: inline-block;
  padding: 0;
  color: ${props => props.Black? '#333': 'var(--mainWhite)'};
  font-weight: ${(props => props.Black? '600': 'unset')};
  background: transparent;
  font-size: 1.2rem;
  overflow: hidden;
  border-radius: 3px;
  border-width: 2px;
  border-style: solid;
  transition: 0.7s;
  border-color:  ${props => props.Blue? 'var(--lightBlue)': 'var(--mainYellow)'};
  &:hover{
    background: ${props => props.Blue? 'var(--lightBlue)':'var(--mainYellow)'};
  }
&:hover a{
  color: var(--mainBlue)
 }
a{
  transition: 0.5s;
 padding: 0;
 display: block;
 color: var(--mainWhite)
}`;

export const Navbar = styled.nav`
  background-color: var(--mainBlue);
  .nav-item{
    font-size: 24px;
    color: var(--mainWhite);
    font-weight: 500;
  }
 a:hover{
   text-decoration: none;
 }
`;

export const H1 = styled.h1`
font-family: 'Pangolin', cursive;
font-size: 55px;
font-weight: bold;
`;

export const ProductWrapper = styled.div`
  .card{
    border-color: transparetn;
    transition: 1s;
  }
  .card-footer{
    background: transpraent;
    border-top: transparent;
    transition: 1s;
  }

  .cart{
    border: none;
    outline: none;
    font-size: 1.8rem;
    background: var(--lightBlue);
    position: absolute;
    right: 0;
    color: var(--mainDark);
    bottom: 0;
    padding: 0.2rem;
    border-radius: 0.5rem 0px 0px 0px;
    transform: translate(100%,0%);
    transition: 0.8s;
  }

  .img-wrapper{
    overflow:hidden;
    position: relative;
    img{
      transition: 0.9s;
      transform: scale(0.9)
    }
  }

  &:hover{
    .card{
      border: 0.04rem solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,.2);
    }
    .card-footer{
      background: rgba(247,247,247);
    }
    .cart{
      transform: translate(0,0);
    }
    img{
      transform: scale(1.07)
    }
  }
`

export const Clear = styled.button`
  border: 2px solid #dc3545;
  background: transparent;
  padding: 0 12px;
  transition: 0.5s;
  border-radius: 5px;
  font-size: 23px;
  &:hover{
    background: #dc3545;
  }
`

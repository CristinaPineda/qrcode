import styled from 'styled-components';

export const Nav = styled.nav`
  width: 90%;
  margin: auto;
  border-bottom: 2px solid skyblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: skyblue;

  .btn-nav {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  
  .btn-nav .icons {
    font-size: 2.5rem;
    color: #90f7ea;
    margin: 5px 0;
  }
`

export const H2nav = styled.h2`
color: #90f7ea;
font-size: 7vw;

.icons {
  color: #90f7ea;
  font-size: 2.5rem;
}
`
// @media (min-width: 768px)
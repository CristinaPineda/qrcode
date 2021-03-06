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
    font-size: 2.3rem;
    color: #90f7ea;
    margin: 5px 0;
  }

  @media (min-width: 768px) {
    height: 100px;

    .btn-nav {
      display: flex;
      flex-direction: row;
    }

    .btn-nav .icons {
      font-size: 2.5rem;
      margin-left: 1.5rem;
    }
  }
`;

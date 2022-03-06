import styled from 'styled-components';

export const SectionGen = styled.section`
  text-align: center;

  .div-input {
    color: #56f62e;
    width: 80%;
    margin: 50px auto;
    font-size: 20px;

    input {
      border: 3px solid #56f62e;
      margin-top: 10px;
      width: 90%;
      font-size: 20px;
    }
  }

  p {
    color: red;
    font-size: 1.3rem;
  }

  img {
    border: 5px solid red;
    margin-bottom: 40px;
  }

  @media (min-width: 768px) {
    .div-input {
      display: flex;
      flex-direction: column;
      width: 60%;
      font-size: 1.5rem;
      align-items: center;

      input {
        width: 60%;
      }
    }
  }
`;

export const Buttondown = styled.button`
  width: 100px;
  background-color: blue;
  border: 2px solid #90f7ea;
  border-radius: 8px;
  margin: 15px auto;

  .icons {
    font-size: 1.5rem;
    color: #90f7ea;
  }
`;

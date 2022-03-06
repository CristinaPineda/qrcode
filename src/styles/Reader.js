import styled from 'styled-components';

export const SectionScan = styled.section`
text-align: center;

  .div-p-scanner {
    color: #56f62e;
    width: 80%;
    margin: 50px auto;
    font-size: 20px;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
`;

export const InputResult = styled.div`
  text-align: center;
  margin: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;

  input {
    width: 80%;
    font-size: 1.1rem;
    border: 3px solid #56f62e;
  }

  .icons {
    color: #56f62e;
    font-size: 1.8rem;
  }

  @media (min-width: 768px) {
    margin: 30px auto;
    width: 60%;
    justify-content: center;

    input {
      width: 60%;
      margin-right: 10px;
      font-size: 1.2rem;
    }
  }
`;

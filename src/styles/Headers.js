import styled from "styled-components";

export const Headers = styled.header`
  color: #fff;
  text-align: center;
  p {
    color: #f666ae;
    font-size: 1.3rem;
  }
  
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    p {
      font-size: 1.5rem;
    }
  }
`;

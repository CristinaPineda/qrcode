import styled from "styled-components";

export const Section = styled.section`
  text-align: center;
  margin: 40px auto;
  text-decoration: none;

  div {
    margin: 30px;
  }

  p, a {
    color: #56f62e;
    margin-bottom: 3px;
    font-size: 1.5rem;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`
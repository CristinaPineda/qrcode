import styled from "styled-components";

export const FooterApp = styled.footer`
  width: 90%;
  margin: auto;
  display: flex;
  color: skyblue;
  flex-direction: column;
  border-top: 2px solid skyblue;
  
  .footer-top {
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-between;
    margin: auto;
    
    .social-icons {
      display: flex;
      flex-direction: row;
      align-items: center;
      
      .icons {
        color: skyblue;
        font-size: 1.5rem;
        margin: 10px;
      }
    }
  }

  .footer-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    font-size: 1rem;

    .stacks {
      display: flex;
      flex-direction: column;
      align-items: center;

      div {
        display: flex;
        flex-direction: row;
        align-items: center;

        .icons {
          margin-right: 5px;
          font-size: 1.5rem;
        }
      }
    }

    .contact {
      text-align: center;
    }
  }

  .footer-bottom {
    text-align: center;
    margin: auto;
  }
`;
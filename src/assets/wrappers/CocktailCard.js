import styled from "styled-components";
const Wrapper = styled.article`
  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  border-radius: var(--borderRadius);
  :hover {
    box-shadow: var(--shadow-4);
  }
  img {
    height: 15rem;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }

  .footer {
    padding: 1.5rem;
    h4 {
      letter-spacing: var(--letterSpacing);
      color: var(--black);
      font-weight: 500;
    }
    h5 {
      letter-spacing: var(--letterSpacing);
      font-size: 0.9rem;
      margin-top: 0.5rem;
    }
    p {
      color: var(--grey-500);
      font-size: 0.85rem;
      margin-top: 0.5rem;
    }

    .btn {
      margin-top: 0.5rem;
      font-size: 0.85rem;
    }
  }
`;

export default Wrapper;

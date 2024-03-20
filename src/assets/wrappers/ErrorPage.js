import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  text-align: center;

  img {
    width: 90vw;
    max-width: 600px;
    object-fit: cover;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    color: var(--grey-500);
    margin-bottom: 0.5rem;
  }

  .link {
    color: var(--primary-500);
    text-transform: capitalize;
    text-decoration: underline;
    transition: var(--transition);
  }

  .link:hover {
    color: var(--primary-700);
  }
`;

export default Wrapper;

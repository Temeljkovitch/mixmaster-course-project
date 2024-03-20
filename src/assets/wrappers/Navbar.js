import styled from "styled-components";

const Wrapper = styled.nav`
  background: var(--white);

  .nav-center {
    width: var(--view-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
  }

  .logo {
    color: var(--primary-500);
    font-weight: 700;
    font-size: clamp(1.5rem, 3vw, 3rem);
    letter-spacing: var(--letterSpacing);
  }

  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .nav-link {
    text-transform: capitalize;
    color: var(--grey-700);
    padding: 0.5rem 0.5rem 0.5rem 0;
    transition: var(--transition);
    letter-spacing: var(--letterSpacing);
  }

  .nav-link:hover {
    color: var(--primary-500);
  }

  .active {
    color: var(--primary-500);
  }

  @media (min-width: 768px) {
    .nav-center {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .nav-links {
      flex-direction: row;
      margin-top: 0;
    }
  }
`;

export default Wrapper;

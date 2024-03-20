import styled from "styled-components";

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 2rem;
    .btn {
      margin-bottom: 1rem;
    }
  }
  .img {
    border-radius: var(--borderRadius);
  }
  .drink-info {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    p {
      font-weight: 600;
      line-height: 2;
    }
  }
  .drink-data {
    margin-right: 0.25rem;
    background: var(--primary-300);
    padding: 0.25rem;
    border-radius: var(--borderRadius);
    color: var(--primary-800);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }

  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }
    .drink-info {
      padding-top: 0;
    }
  }
`;

export default Wrapper;

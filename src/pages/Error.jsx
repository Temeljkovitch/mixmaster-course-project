import Wrapper from "../assets/wrappers/ErrorPage";

import img from "../assets/not-found.svg";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={img} alt="not found image" />
        <h3>Ohh!</h3>
        <p>We can't seem to find the page you were looking for...</p>
        <Link to="/" className="link">
          back home
        </Link>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        
        <p>Something went wrong...</p>
        <Link to="/" className="link">
          back home
        </Link>
      </Wrapper>
    );
  }
};

export default Error;

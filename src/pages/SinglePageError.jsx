import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
  return <h2>There was an error: {error.message}</h2>;
};

export default SinglePageError;

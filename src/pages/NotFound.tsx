import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex" />
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Return to our homepage."
        />
      </Helmet>

      <div className="container mt-5">
        <h1 className="text-center mb-5">404 - Not Found</h1>
        <div className="body-content">
          <p className="text-center mb-5 lead">
            The page you're looking for doesn't exist.
          </p>
        </div>
      </div>
    </>
  );
};

export default NotFound;

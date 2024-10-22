import LondonFoodCoopLogo from "../assets/lfc-logo.png";

const Portfolio = () => {
  const projects = [
    {
      title: "London Food Co-op",
      image: LondonFoodCoopLogo,
      description: "Updates and maintenance in WordPress",
      link: "https://londonfood.coop",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="body-content">
        <div className="row align-items-center">
          <div className="col text-center">
            <h1 className="brush-title">Portfolio</h1>
          </div>
        </div>

        <div className="row ">
          <p className="mt-3 text-justify">
            Welcome to the Web & Flow portfolio. We are a cooperative dedicated
            to providing innovative web development solutions, focusing on
            supporting non-profits and local small businesses.
          </p>
        </div>
        <div className="row">
          <p className="mt-3">
            Here are some of the clients we've had the opportunity to work with.
          </p>
        </div>
        <div className="row justify-content-center mt-5">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="portfolio-item position-relative">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid"
                  />
                  <div className="overlay d-flex justify-content-center align-items-center">
                    <div className="text-center">
                      <p className="h5 text-white">{project.title}</p>
                      <p className="text-white">{project.description}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <p className="portfolio-contact">
              If you’re interested in working together or have any questions,
              feel free to contact us at our contact page or send us an email at{" "}
              <mark>
                <a href="mailto:hello@webandflow.coop" className="contact">
                  hello@webandflow.coop
                </a>
              </mark>
              !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

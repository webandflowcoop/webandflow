import { Helmet } from "react-helmet-async";
import LondonFoodCoopLogo  from "../assets/lfc-logo.png";
import TheCatsBarkLogo  from "../assets/tcb-logo.png";

const Portfolio = () => {
  const projects = [
    {
      title: "London Food Co-op",
      image: LondonFoodCoopLogo,
      description: "Updates and maintenance in WordPress",
      link: "https://londonfood.coop",
      year: "2023-2024"
    },

    {
      title: "The Cat's Bark",
      image: TheCatsBarkLogo,
      description: "Full-stack e-commerce website development.",
      link: "https://thecatsbark.ca/",
      year: "2024-ongoing"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio - Web & Flow Worker Cooperative</title>
        <meta
          name="description"
          content="Explore the businesses we've had the opportunity to work with at Web & Flow Worker Cooperative."
        />
        <link rel="canonical" href="https://webandflow.coop/portfolio" />
      </Helmet>

      <div className="container mt-5">
        <div className="body-content">
          <div className="row align-items-center">
            <div className="col text-center">
              <h1 className="brush-title">Portfolio</h1>
            </div>
          </div>
          <div className="row">
            <p className="mt-3 text-center">
              Here are some of the businesses we've had the opportunity to work
              with:
            </p>
          </div>
          <div className="row justify-content-center mt-3">
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
                        <p className="h5 text-white portfolio-title">{project.title}</p>
                        <p className="text-white mb-1">{project.year}</p>
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
                If you’re interested in working with us, or you if have any
                questions,{" "}
                <mark>
                  <a className="contact" href="/contact">
                    <i>reach out!</i>
                  </a>
                </mark>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

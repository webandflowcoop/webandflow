import Jessica from "../assets/upstreamottawa.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Project A",
      image: Jessica,
      description: "A cool project we built with React.",
      link: "https://projectA.com",
    },
    {
      title: "Project B",
      image: Jessica,
      description: "A design project we did for a client.",
      link: "https://projectB.com",
    },
    // Add more projects here...
  ];

  return (
    <div className="container mt-5">
      <h1 className="mt-5 brush-title">Portfolio</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="portfolio-item">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="overlay">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    // const projects = [
    //   {
    //     title: "Project A",
    //     image: Jessica,
    //     description: "A cool project we built with React.",
    //     link: "https://google.ca",
    //   },
    //   {
    //     title: "Project B",
    //     image: Jessica,
    //     description: "A design project we did for a client.",
    //     link: "https://google.ca",
    //   },
    // ];

    // return (
    //   <div className="container mt-5">
    //     <h1 className="text-center mb-5">Our Portfolio</h1>
    //     <div
    //       id="portfolioCarousel"
    //       className="carousel slide"
    //       data-bs-ride="carousel"
    //     >
    //       <div className="carousel-inner">
    //         {projects.map((project, index) => (
    //           <div
    //             className={`carousel-item ${index === 0 ? "active" : ""}`}
    //             key={index}
    //           >
    //             <a href={project.link} target="_blank" rel="noopener noreferrer">
    //               <img
    //                 src={project.image}
    //                 className="d-block w-100"
    //                 alt={project.title}
    //                 style={{ height: "500px", objectFit: "cover" }}
    //               />
    //               <div className="carousel-caption d-none d-md-block">
    //                 <h5>{project.title}</h5>
    //                 <p>{project.description}</p>
    //               </div>
    //             </a>
    //           </div>
    //         ))}
    //       </div>
    //       <button
    //         className="carousel-control-prev"
    //         type="button"
    //         data-bs-target="#portfolioCarousel"
    //         data-bs-slide="prev"
    //       >
    //         <span
    //           className="carousel-control-prev-icon"
    //           aria-hidden="true"
    //         ></span>
    //         <span className="visually-hidden">Previous</span>
    //       </button>
    //       <button
    //         className="carousel-control-next"
    //         type="button"
    //         data-bs-target="#portfolioCarousel"
    //         data-bs-slide="next"
    //       >
    //         <span
    //           className="carousel-control-next-icon"
    //           aria-hidden="true"
    //         ></span>
    //         <span className="visually-hidden">Next</span>
    //       </button>
    //     </div>
    //   </div>
  );
};

export default Portfolio;

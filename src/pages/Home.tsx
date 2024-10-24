import { FaEnvelope } from "react-icons/fa";
import Jessica from "../assets/jessica-no-background.png";
import Mayumi from "../assets/mayumi-no-background.png";
import Murilo from "../assets/murilo-no-background.png";

const Home = () => {
  const teamMembers = [
    {
      name: "Jessica",
      image: Jessica,
      blurb:
        "Jessica is an accomplished web developer who excels in business communication",
      socials: {
        email: "mailto:jessica@webandflow.coop",
      },
    },
    {
      name: "Mayumi",
      image: Mayumi,
      blurb:
        "Mayumi is an outstanding designer with a keen eye for the user’s experience",
      socials: {
        email: "mailto:mayumi@webandflow.coop",
      },
    },
    {
      name: "Murilo",
      image: Murilo,
      blurb:
        "Murilo is a seasoned software engineer with an aptitude for managing projects",
      socials: {
        email: "mailto:murilo@webandflow.coop",
      },
    },
  ];

  return (
    <div className="container mt-5">
      <div className="body-content">
        <div className="row align-items-center">
          <div className="col text-center"></div>
        </div>
        <div className="row mt-3">
          <p>
            <span className="brush-text">Web & Flow</span> is a worker
            cooperative providing affordable web development services to 
            non-profits, co-ops, and local businesses around London, Ontario.
          </p>
        </div>
        <div className="row mb-5">
          <p>
            The cooperative is a mix of our unique Brazillian charisma
            with our years of multi-disciplinary experiences in 
            technology, design, and customer service.
          </p>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={member.image}
                  className="card-img-top"
                  alt={`${member.name}'s profile`}
                  style={{ height: "300px", objectFit: "contain" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.blurb}</p>
                  <div className="social-links">
                    <a
                      href={member.socials.email}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-2"
                      aria-label={`Email - ${member.name}`}
                    >
                      <FaEnvelope size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

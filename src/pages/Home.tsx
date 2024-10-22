import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Jessica from "../assets/jessica-no-background.png";
import Mayumi from "../assets/mayumi-no-background.png";
import Murilo from "../assets/murilo-no-background.png";

const Home = () => {
  const teamMembers = [
    {
      name: "Jessica",
      image: Jessica,
      blurb:
        "Jessica is an accomplished web developer who excels in business communication.",
      socials: {
        linkedin: "https://ca.linkedin.com/in/jessica-trigo",
        email: "mailto:jessica@webandflow.coop",
      },
    },
    {
      name: "Mayumi",
      image: Mayumi,
      blurb:
        "Mayumi is an outstanding designer with a keen eye for the user’s experience.",
      socials: {
        linkedin: "https://ca.linkedin.com/in/mayumi-brilhante-653472249",
        email: "mailto:mayumi@webandflow.coop",
      },
    },
    {
      name: "Murilo",
      image: Murilo,
      blurb:
        "Murilo is a seasoned software engineer with an aptitude for managing projects.",
      socials: {
        linkedin: "https://ca.linkedin.com/in/murilotrigo",
        email: "mailto:murilo@webandflow.coop",
      },
    },
  ];

  return (
    <div className="container mt-5">
      <div className="body-content">
        <div className="row align-items-center">
          <div className="col text-center">
            <h1 className="brush-title">Web & Flow</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="mt-5">
              A worker cooperative aiming to provide non-profits and other
              socially responsible companies with affordable web development
              services.
            </p>
          </div>
        </div>
        <div className="row mb-5">
          <div>
            <div>
              <p>
                The cooperative was born by combining years of
                multi-disciplinary experiences and shared work ethics into a
                sustainable business.
              </p>
              <p>
                <strong>Web & Flow</strong> is always looking to support
                projects and enterprises that share its values of
                <strong> democracy at work </strong>
                and
                <strong> social equality</strong>.
              </p>
            </div>
          </div>
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
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-2"
                      aria-label={`Linkedin - ${member.name}`}
                    >
                      <FaLinkedin size={25} />
                    </a>
                    <a
                      href={member.socials.email}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-2"
                      aria-label={`Email - ${member.name}`}
                    >
                      <FaEnvelope size={25} />
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

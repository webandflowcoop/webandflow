const Contact = () => {
  return (
    <div className="container mt-5">
      <div className="body-content">
        <div className="row align-items-center">
          <div className="col text-center">
            <h1 className="brush-title">Contact Us</h1>
          </div>
        </div>

        <section className="contact-section">
          <div className="contact-intro">
            <p className="contact-description">
              Fill out the form below and we'll get back to you
            </p>
          </div>
          <form
            className="contact-form"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="417c756a-b2e9-41b8-bafd-977ba76ae8ed"
            />
            <input
              type="hidden"
              name="subject"
              value="New message from the website"
            />
            <input type="hidden" name="from_name" value="WF Contact Form" />
            <div className="form-group-container">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                  type="text"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Your email"
                  type="email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-textarea"
                  id="message"
                  name="message"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
            </div>
            <button className="form-submit" type="submit">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;

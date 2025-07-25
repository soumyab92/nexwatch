
const Contact = () => {
  return (
    <<section className="py-5 bg-light">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center mb-4">
          <div className="col-md-8 text-center">
            <h2 className="fw-bold">Contact Us</h2>
            <p className="text-muted">
              We’d love to hear from you. Please fill out the form below and we’ll get back to you soon.
            </p>
          </div>
        </div>

        <div className="row">
          {/* Contact Form */}
          <div className="col-md-7">
            <form>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input type="text" className="form-control" placeholder="Enter your name" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" placeholder="Enter your email" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control" placeholder="Subject" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" rows="5" placeholder="Your message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary px-4">Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-md-5 mt-4 mt-md-0">
            <div className="bg-white p-4 shadow-sm rounded">
              <h5>Contact Information</h5>
              <p className="mb-2"><strong>Address:</strong><br />123 Street, City, State, ZIP</p>
              <p className="mb-2"><strong>Email:</strong><br />support@example.com</p>
              <p className="mb-0"><strong>Phone:</strong><br />+91 9088612140</p>
            </div>
          </div>
        </div>
      </div>
    </section>>
  );
};

export default Contact;
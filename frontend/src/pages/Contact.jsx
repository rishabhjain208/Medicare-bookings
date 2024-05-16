import React, { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 text-center text__para">
          Got a technical issue? want to send a feedback about the beta feature?
          Let us know
        </p>

        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form_label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form_input mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="text" className="form_label">
              Subject
            </label>
            <input
              type="text"
              id="text"
              placeholder="let us how can i help you"
              className="form_input mt-1"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="textarea" className="form_label">
              Message
            </label>
            <textarea
              id="text"
              placeholder="Leave a comment..."
              className="form_input mt-1"
              rows="6"
            ></textarea>
          </div>
          <button type="submit" className=" sm:w-fit btn rounded-md">
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;

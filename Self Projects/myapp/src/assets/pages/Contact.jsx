import React, { useState } from "react";

const Contact = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setisSubmitting] = useState(false);
  const [submitStatus, setsubmitStatus] = useState("");

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisSubmitting(true);
    setformData({ name: "", email: "", subject: "", message: "" });
    //Simulate form Submission
    setTimeout(() => {
      setisSubmitting(false);
      setsubmitStatus("success");
      setformData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setsubmitStatus(""), 3000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Connect with me to collaborate on your next project.
          </p>
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 ">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <span></span>
                  </div>
                  <div>
                    <h4>Email:</h4>
                    <p>yourname@example.com</p>
                  </div>
                </div>
                <div>
                  <div>
                    <span></span>
                  </div>
                  <div>
                    <h4>Phone:</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div>
                  <div>
                    <span></span>
                  </div>
                  <div>
                    <h4>Location:</h4>
                    <p>New York, USA</p>
                  </div>
                </div>

                {/* Social Media Links */}
                <div>
                  <h4>Follow Me</h4>
                  <div className="flex space-x-4">
                    {["LinkedIn", "GitHub", "Twitter"].map((platform) => (
                      <a href="#" key={platform}>
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}

            <div>
              <form action="">
                <div>
                  <div>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" />
                  </div>
                  <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" />
                  </div>
                  <div>
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Type your message here..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none "
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg `}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

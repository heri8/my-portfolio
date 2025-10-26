import React, { useState } from "react";
import { personalInfo, socialLinks } from "../data/dummyData";

function Contact() {
  const whatsappNumber = "6287775477657";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const whatsappTemplate = `
*--- Pesan dari Web Portofolio ---*

*Nama:* ${name}
*Email:* ${email}
*Subjek:* ${subject}

*Pesan:*
${message}
`.trim();

    const encodedMessage = encodeURIComponent(whatsappTemplate);

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Opsional: Berikan feedback ke user
    alert("Anda akan diarahkan ke WhatsApp untuk mengirimkan pesan.");
  };

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Info */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-6">Information Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-blue-500 mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-600">{personalInfo.location}</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-phone text-blue-500 mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">{personalInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-envelope text-blue-500 mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">{personalInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <i className="fas fa-globe text-blue-500 mt-1 mr-3"></i>
                <div>
                  <h4 className="font-medium">Website</h4>
                  <p className="text-gray-600">{personalInfo.website}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-center text-white w-10 h-10 p-2 transition rounded-full hover:opacity-90 transition duration-300`}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-2/3">
            <h3 className="text-xl font-semibold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Insert Full Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Insert Email"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Insert Subject"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Insert message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

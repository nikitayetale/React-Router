import React, { useState } from "react";
import "./Contact.css"

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
       setFormData({
        ...formData,
        [e.target.name]: e.target.value,
       });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.assert(formData);

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className="container">
            <h2>Contact Cake Shop</h2>
            {submitted ? (
                <div className="success-message">
                    <h3>Thank You!</h3>
                    <p> Your message has been sent successful </p>
                    </div>

            ): (
                <form onSubmit={handleSubmit} className="contact-form">
                    <input 
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required />

                    <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                     value={formData.email}
                    onChange={handleChange}
                    required />

                    <textarea 
                    name="message"
                    placeholder="Write Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required ></textarea>

                    <button type="submit">Send Message</button>

                </form>

            )}
        </div>
    );
}

export default Contact;

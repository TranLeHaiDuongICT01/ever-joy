import React, { useState } from "react"
import "./ContactForm.css"
import arrowDown from "../../assets/arrow-down.png"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
    });

    const [isOpen, setIsOpen] = useState(false);

    const subjects = ['Inquiry', 'Support', 'Feedback'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    console.log(formData.subject);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    const handleSubjectClick = (subject) => {
        setFormData((prevData) => ({
            ...prevData,
            subject: subject,
        }));
        setIsOpen(false);
    };

    return <div className="contact-form">
        <div className="contact-info">
            <h1>CONTACT INFO</h1>
            <div className="contact-item">
                <p className="contact-title">Address:</p>
                <p className="contact-value">1001 Queen Anne Ave N, Apt 201, Seattle WA 98109, USA</p>
            </div>
            <div className="contact-item">
                <p className="contact-title">Phone number:</p>
                <p className="contact-value">(+84) 832221888</p>
            </div>
            <div className="contact-item">
                <p className="contact-title">Email:</p>
                <p className="contact-value">contact@everjoyglobal.com</p>
            </div>
        </div>
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Company"
                        value={formData.company}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <div className="custom-dropdown">
                        <div
                            className={`dropdown-header ${!formData.subject ? 'placeholder' : ''}`}
                            onClick={() => setIsOpen((prevState) => !prevState)}
                        >
                            {formData.subject || 'Select Subject'}
                        </div>
                        {isOpen && (
                            <ul className="dropdown-list">
                                {subjects.map((subject, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleSubjectClick(subject)}
                                        className="dropdown-item"
                                    >
                                        {subject}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <img src={arrowDown} alt="arrow down" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Your message:</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">GỬI</button>
            </form>
        </div>
    </div>
}

export default ContactForm
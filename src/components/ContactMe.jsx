import React from 'react';
import { useState } from 'react';

function ContactMe ({id}) {
    // Holds the current values of the form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    // State to provide feedback to the user
    const [status, setStatus] = useState('');

    const inputClasses = "bg-dark-bg border border-gray-500 text-white font-roboto-mono p-4 rounded-lg placeholder-gray-500 focus:border-purple focus:outline-none transition duration-200 w-full";
    const labelClasses = "font-roboto-mono text-white text-sm mb-1 block";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    // Official Netlify document utility function: Converts the state object into a URL-encoded string.
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            // Netlify submissions always target the root path ("/")
            const response = await fetch("/", { 
                method: 'POST',
                // IMPORTANT: The body must be URL-encoded, including the hidden 'form-name' field
                body: encode({ "form-name": "contact", ...formData }),
                headers: {
                    // CRUCIAL: Must be application/x-www-form-urlencoded
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            if (response.ok) {
                setStatus('Message sent successfully! Thank you.');
                setFormData({ name: '', email: '', message: '' });
            } else {
                // This catches non-network errors, like a server-side redirect failure
                setStatus('Submission failed. Please check Netlify form settings.');
            }
        } catch (error) {
            // This catches network issues
            setStatus('An error occurred. Check your network connection.');
            console.error("Form submission error:", error);
        }
    }

return (
        <section id={id}>
            <h2 className="font-roboto-mono text-2xl tracking-wide mb-8">Contact Me</h2>

            <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true">
                {/* Step 1: Add a hidden input field that Netlify uses to identify the form during the build process */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Two-column layout for Name and Email inputs on desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label htmlFor="name" className={labelClasses}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name" // The name must match the key in formData
                            value={formData.name}
                            onChange={handleChange} // Links the input to the state handler
                            placeholder="Your Name"
                            required
                            className={inputClasses}
                        />
                    </div>
                    
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className={labelClasses}>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className={inputClasses}
                        />
                    </div>
                </div>
                <div className="mb-8">
                    <label htmlFor="message" className={labelClasses}>Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Hello there, I would like to ask you about..."
                        required
                        maxLength="500"
                        rows="6"
                        className={`${inputClasses} resize-none`}
                    ></textarea>
                    {/* Character counter (uses the length of the state value) */}
                    <p className="text-right text-sm font-roboto-mono text-gray-500 mt-1">{formData.message.length}/500 characters</p>
                </div>
                {/* Submit Button Area */}
                <div className="flex justify-end items-center">
                    {/* Display status messages (Sending, Success, Failure) */}
                    {status && <p className="mr-4 text-sm font-roboto-mono text-purple">{status}</p>}
                    
                    {/* Send Button: Styled using the dark button theme from previous sections */}
                    <button
                        type="submit"
                        className="bg-[#272727] text-white font-roboto-mono text-base font-bold px-6 py-3 rounded-lg hover:bg-purple transition duration-300 flex items-center"
                    >
                        Send 
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ContactMe;
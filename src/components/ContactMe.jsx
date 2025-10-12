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
        <section id={id} className="p-8">
            <h2 className="font-mono text-3xl text-white tracking-wide mb-8 border-b-2 border-purple pb-2">Contact Me</h2>

            {/* The form tag needs 'name' and 'data-netlify' for Netlify to detect it statically */}
            <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true">
                
                {/* 1. REQUIRED HIDDEN FIELD: Netlify scans the build output for this static field to register the form. */}
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className={labelClasses}>Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name" // Matches the key in formData and the form submission
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Full Name"
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
                            placeholder="your.email@example.com"
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
                        placeholder="Type your message here..."
                        required
                        maxLength="500"
                        rows="6"
                        className={`${inputClasses} resize-none`}
                    ></textarea>
                    {/* Character counter */}
                    <p className="text-right text-sm font-mono text-gray-400 mt-1">{formData.message.length}/500 characters</p>
                </div>
                {/* Submit Button Area */}
                <div className="flex justify-between items-center">
                    {/* Display status messages */}
                    {status && <p className="mr-4 text-base font-mono text-[#a78bfa]">{status}</p>}
                    
                    <button
                        type="submit"
                        className="bg-[#272727] text-white font-mono text-base font-bold px-8 py-3 rounded-lg border-2 border-[#6d28d9] hover:bg-[#6d28d9] hover:text-black transition duration-300 flex items-center shadow-lg"
                        disabled={status === 'Sending...'}
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ContactMe;
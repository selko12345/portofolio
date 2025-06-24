import { useState } from "react";

const contactMethods = [
    {
        id: 1,
        type: "Email",
        details: [
            { name: "Personal Email", value: "ospaldoalpaginselkoginting@gamil.com", icon: "bx-envelope", color: "#0d6efd" },
            { name: "Work Email", value: "selko joki@gamil.com", icon: "bx-envelope-open", color: "#198754" }
        ],
        icon: "bx-mail-send",
        color: "#0d6efd"
    },
    {
        id: 2,
        type: "Social Media",
        details: [
            { name: "Instagram", value: "https://www.instagram.com/selkogintingm", icon: "bxl-instagram", color: "#E34F26" },
            { name: "GitHub", value: "github.com/selko12345", icon: "bxl-github", color: "#3776AB" }
        ],
        icon: "bx-share-alt",
        color: "#fd7e14"
    },
    {
        id: 3,
        type: "Phone",
        details: [
            { name: "Mobile", value: "08123456789", icon: "bx-phone", color: "#198754" },
            { name: "WhatsApp", value: "08123456789", icon: "bxl-whatsapp", color: "#25D366" }
        ],
        icon: "bx-phone-call",
        color: "#6610f2"
    }
];


const Contact = () => {
    const [activeTab, setActiveTab] = useState('form');
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [hoveredMethod, setHoveredMethod] = useState(null);

    const getColorClasses = (color) => {
        const colorMap = {
            '#0d6efd': { bg: 'bg-blue-500', text: 'text-blue-500', bgLight: 'bg-blue-50', border: 'border-blue-500', hover: 'hover:bg-blue-600' },
            '#198754': { bg: 'bg-green-500', text: 'text-green-500', bgLight: 'bg-green-50', border: 'border-green-500', hover: 'hover:bg-green-600' },
            '#fd7e14': { bg: 'bg-orange-500', text: 'text-orange-500', bgLight: 'bg-orange-50', border: 'border-orange-500', hover: 'hover:bg-orange-600' },
            '#6610f2': { bg: 'bg-purple-500', text: 'text-purple-500', bgLight: 'bg-purple-50', border: 'border-purple-500', hover: 'hover:bg-purple-600' },
            '#dc3545': { bg: 'bg-red-500', text: 'text-red-500', bgLight: 'bg-red-50', border: 'border-red-500', hover: 'hover:bg-red-600' },
            '#20c997': { bg: 'bg-teal-500', text: 'text-teal-500', bgLight: 'bg-teal-50', border: 'border-teal-500', hover: 'hover:bg-teal-600' }
        };
        return colorMap[color] || colorMap['#0d6efd'];
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        setFormData({ name: "", email: "", message: "" });
        alert("Message sent successfully!");
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden" id="contact">
            <div className="container">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                            Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Reach out to collaborate, discuss opportunities, or just say hello!
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-12" data-aos="fade-up">
                        <div className="bg-white dark:bg-gray-900 p-1 flex rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                            <button
                                onClick={() => setActiveTab('form')}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${activeTab === 'form'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                <i className="bx bx-edit text-xl"></i>
                                <span>Contact Form</span>
                            </button>
                            <button
                                onClick={() => setActiveTab('methods')}
                                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${activeTab === 'methods'
                                    ? 'bg-blue-600 text-white shadow-lg'
                                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                            >
                                <i className="bx bx-share-alt text-xl"></i>
                                <span>Contact Methods</span>
                            </button>
                        </div>
                    </div>

                    {/* Contact Form Tab */}
                    {activeTab === 'form' && (
                        <div className="max-w-2xl mx-auto" data-aos="fade-up">
                            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows="5"
                                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                                            placeholder="Your Message"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
                                    >
                                        <i className="bx bx-send text-lg"></i>
                                        <span>Send Message</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Contact Methods Tab */}
                    {activeTab === 'methods' && (
                        <div className="grid lg:grid-cols-3 gap-8" data-aos="fade-up">
                            {contactMethods.map((method) => {
                                const colorClasses = getColorClasses(method.color);
                                return (
                                    <div key={method.id} className="group">
                                        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
                                            {/* Category Header */}
                                            <div className="flex items-center mb-6">
                                                <div className={`w-12 h-12 ${colorClasses.bg} rounded-full flex items-center justify-center text-white mr-4 shadow-lg`}>
                                                    <i className={`bx ${method.icon} text-xl`}></i>
                                                </div>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                    {method.type}
                                                </h3>
                                            </div>

                                            {/* Methods List */}
                                            <div className="space-y-4">
                                                {method.details.map((detail, index) => (
                                                    <div
                                                        key={index}
                                                        className={`p-3 rounded-lg transition-all duration-300 cursor-pointer ${hoveredMethod === `${method.id}-${index}`
                                                            ? 'bg-gray-50 dark:bg-gray-800 scale-105'
                                                            : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                                                            }`}
                                                        onMouseEnter={() => setHoveredMethod(`${method.id}-${index}`)}
                                                        onMouseLeave={() => setHoveredMethod(null)}
                                                    >
                                                        <div className="flex items-center space-x-2">
                                                            <i className={`bx ${detail.icon} text-lg`} style={{ color: detail.color }}></i>
                                                            <div>
                                                                <p className="font-semibold text-gray-900 dark:text-white">{detail.name}</p>
                                                                <p className="text-sm text-gray-600 dark:text-gray-400">{detail.value}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
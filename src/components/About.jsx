import { useState } from "react";

const personalInfoData = [
    {
        id: 1,
        category: "Bio",
        details: "Saya adalah mahasiswa di universitas of satyaterrabhinneka,  Degan Program Studi Informatika yang memiliki minat pada pengembangan aplikasi, sistem informasi, dan teknologi digital.",
        icon: "bx bx-id-card",
        color: "#0d6efd"
    },
    {
        id: 2,
        category: "Hobbies",
        details: " Saya Memiliki ketertarikan di bidang olahraga seperti berenang dan badminton, serta aktif mengerjakan berbagai project informatika sebagai bentuk pengembangan diri dalam bidang teknologi dan pemrograman.",
        icon: "bx bx-heart",
        color: "#198754"
    },
    {
        id: 3,
        category: "Languages",
        details: "Lancar berbahasa  Indonesia. Intermediate English and German language skills.",
        icon: "bx bx-globe",
        color: "#fd7e14"
    },
    {
        id: 4,
        category: "Contact",
        details: "Email: ospaldoginting@example.com\nPhone: +6289510144492\nLinkedIn:linkedin.com/in/osapldo",
        icon: "bx bx-envelope",
        color: "#6610f2"
    },
    {
        id: 5,
        category: "Location",
        details: "Sumatera_Utara,Deli_Serdang, kec_Pancurbatu, Desa_sugau.",
        icon: "bx bx-map",
        color: "#dc3545"
    },
    {
        id: 6,
        category: "Education Summary",
        details: "Bachelor of Informatika, University of Satyaterrabhinneka (2024-2028).",
        icon: "bx bx-book",
        color: "#20c997"
    }
];

const heroData = {
  socialLinks: [
    { id: 1, href: "https://www.instagram.com/selkogintingm", icon: "bxl-instagram" },
    { id: 2, href: "https://github.com/selko123", icon: "bxl-github" },
  ],
  ctaPrimary: { href: "#", label: "Download CV" },
  ctaSecondary: { href: "#contact", label: "Contact Me" }
};

const About = () => {
    const getColorClasses = (color) => {
        const colorMap = {
            '#0d6efd': { bg: 'bg-blue-500', text: 'text-blue-500', bgLight: 'bg-blue-50', border: 'border-blue-500' },
            '#198754': { bg: 'bg-green-500', text: 'text-green-500', bgLight: 'bg-green-50', border: 'border-green-500' },
            '#fd7e14': { bg: 'bg-orange-500', text: 'text-orange-500', bgLight: 'bg-orange-50', border: 'border-orange-500' },
            '#6610f2': { bg: 'bg-purple-500', text: 'text-purple-500', bgLight: 'bg-purple-50', border: 'border-purple-500' },
            '#dc3545': { bg: 'bg-red-500', text: 'text-red-500', bgLight: 'bg-red-50', border: 'border-red-500' },
            '#20c997': { bg: 'bg-teal-500', text: 'text-teal-500', bgLight: 'bg-teal-50', border: 'border-teal-500' }
        };
        return colorMap[color] || colorMap['#0d6efd'];
    };

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden" id="about">
            <div className="container">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16" data-aos="fade-up">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                            About <span className="text-blue-600 dark:text-blue-400">Me</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Discover my journey, passions, and the story behind my work
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Profile Image */}
                        <div className="lg:w-1/3 flex justify-center lg:justify-start" data-aos="fade-left">
                            <img
                                src="/assets/selko.jpeg"
                                alt="Profile"
                                className="w-80 h-80 object-cover shadow-xl hover:rotate-3 transition-transform duration-300"
                            />
                        </div>

                        {/* Personal Info Grid */}
                        <div className="lg:w-2/3">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6" data-aos="fade-right">
                                {personalInfoData.map((info, index) => {
                                    const colorClasses = getColorClasses(info.color);
                                    return (
                                        <div
                                            key={info.id}
                                            className="flex flex-col"
                                            data-aos="fade-right"
                                            data-aos-delay={`${index * 100}`}
                                        >
                                            <div className="flex items-center space-x-3 mb-2">
                                                <div className={`p-4 ${colorClasses.bg} rounded-full shadow-lg flex items-center justify-center text-white shrink-0`}>
                                                    <i className={`bx ${info.icon} text-lg`}></i>
                                                </div>
                                                <h4 className="text-lg font-medium text-gray-900 dark:text-white">{info.category}</h4>
                                            </div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                                                {info.details}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Social Links and CTA */}
                            <div className="mt-8 flex flex-col sm:flex-row items-center gap-6" data-aos="fade-up" data-aos-delay="600">
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-700 dark:text-gray-300 font-medium">Follow me on:</span>
                                    <div className="flex space-x-3">
                                        {heroData.socialLinks.map((social) => (
                                            <a
                                                key={social.id}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                                            >
                                                <i className={`bx ${social.icon} text-lg`}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href={heroData.ctaPrimary.href}
                                        className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                                    >
                                        <i className="bx bx-download mr-2"></i>
                                        {heroData.ctaPrimary.label}
                                    </a>
                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
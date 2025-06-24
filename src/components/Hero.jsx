import { heroData } from "../data/HeroData.jsx";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const titles = heroData.title;
    const currentTitle = titles[currentIndex];

    const typeSpeed = isDeleting ? 100 : 150;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {

        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.substring(0, currentText.length + 1));
        } else {

          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {

        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {

          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting]);


  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section id={heroData.id} className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20 overflow-hidden">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">

            {/*Content Section*/}
            <div className="space-y-8" data-aos="fade-right">
              {/*Nama*/}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                  {heroData.greeting}
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                  <span className="typin`g-text">
                    {currentText}
                    <span className={`cursor ${showCursor ? 'opacity-100' : 'opacity-0'} transition-all duration-200`}>
                      |
                    </span>
                  </span>
                </h2>
              </div>

              {/*deskripsi*/}
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                {heroData.description}
              </p>

              <div className="flex items-center space-x-4">
                <span className="text-gray-700 dark:text-gray-300 font-medium">Follow me on:</span>
                {/* Icon Social */}
                <div className="flex space-x-3">
                  {heroData.socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>


              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={heroData.ctaPrimary.href}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <i className="bx bx-download mr-2"></i>
                  {heroData.ctaPrimary.label}
                </a>
                <a
                  href={heroData.ctaSecondary.href}
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <i className="bx bx-envelope mr-2"></i>
                  {heroData.ctaSecondary.label}
                </a>
              </div>


              {/* Stats Section */}
              <div className="mt-6" data-aos="fade-up">
                <h4 className="text-left text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Quick Stats:
                </h4>
                <div className="flex flex-wrap gap-3 justify-start">
                  {heroData.stats.map((stat) => (
                    <div
                      key={stat.id}
                      className="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md dark:shadow-gray-900/30 border border-gray-300 dark:border-gray-700 
        hover:border-gray-900 dark:hover:border-white hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300"
                    >
                      <i className={`${stat.icon} text-gray-900 dark:text-white text-lg`}></i>
                      <div className="flex flex-col leading-tight">
                        <span className="text-xs font-semibold text-gray-900 dark:text-white">
                          {stat.value}
                        </span>
                        <span className="text-[10px] text-gray-600 dark:text-gray-400">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>


            </div>


            {/* Image & Floating Icons Section */}
            <div className=" relative flex justify-center items-center" data-aos="fade-right">
              <div className="relative z-10">
                <img
                  src={heroData.image}
                  alt={heroData.image}
                  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl dark:shadow-gray-900/50 border-8 border-white dark:border-gray-800 hover:shadow-3xl hover:-translate-y-2 transition-all duration-300"
                />
              </div>

              {/* Floating Tech Icons */}
              {heroData.floatingIcons.map((tech, index) => {
                const positions = [
                  "top-0 left-20",
                  "top-0 right-0",
                  "bottom-0 left-10",
                  "bottom-10 right-12",
                  "top-20 left-0"
                ];
                return (
                  <div
                    key={tech.id}
                    className={`absolute ${positions[index]} w-16 h-16 bg-white dark:bg-gray-800 rounded-full shadow-lg dark:shadow-gray-900/30 flex items-center justify-center hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-float cursor-pointer`}
                    style={{
                      animationDelay: `${index * 0.5}s`
                    }}
                  >
                    <i className={`${tech.icon} text-2xl text-gray-700 dark:text-gray-300`}></i>
                  </div>
                );
              })}

            </div>
          </div>

        </div>


        <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        .dark .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.5);
        }
        
        /* Custom typing text styling */
        .typing-text {
          display: inline-block;
        }
        
        .cursor {
          font-weight: 600;
          color: #1f2937;
        }
        
        .dark .cursor {
          color: #d1d5db;
        }
      `}</style>
      </div>
    </section>
  )
};

export default Hero;
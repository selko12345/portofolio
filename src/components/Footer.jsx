const Footer = () => {
    return (
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-6" id="footer">
            <div className="container">
                <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} ospaldo. All rights reserved.
                        </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

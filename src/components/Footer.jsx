import React from 'react';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <a href="https://www.theodinproject.com/">The Odin Project &copy; {year}</a>
                    <a href="https://github.com/hello-damiro/crystal-store">Hello-Damiro</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

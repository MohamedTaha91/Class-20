import './footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <section id="footer-element">
            <p>
                {year} - All rights reserved
            </p>
        </section>
    )
}

export default Footer;
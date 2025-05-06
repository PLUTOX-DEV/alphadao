import React from "react";

const Footer: React.FC = () => {
    const footerStyle: React.CSSProperties = {
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
    };

    const containerStyle: React.CSSProperties = {
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };

    const logoStyle: React.CSSProperties = {
        marginBottom: "20px",
    };

    const linksStyle: React.CSSProperties = {
        display: "flex",
        gap: "15px",
        marginBottom: "20px",
    };

    const linkStyle: React.CSSProperties = {
        color: "#fff",
        textDecoration: "none",
        fontSize: "14px",
    };

    const socialsStyle: React.CSSProperties = {
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
    };

    const socialLinkStyle: React.CSSProperties = {
        display: "inline-block",
        width: "24px",
        height: "24px",
    };

    const copyrightStyle: React.CSSProperties = {
        fontSize: "12px",
    };

    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
            <div style={{ ...logoStyle, fontSize: "24px", fontWeight: "bold", color: "#fff" }}>
                AlphaDAO
            </div>
            <div style={linksStyle}>
                <a href="/about" style={linkStyle}>About</a>
                <a href="/terms" style={linkStyle}>Terms</a>
                <a href="/privacy" style={linkStyle}>Privacy</a>
                <a href="/contact" style={linkStyle}>Contact</a>
                <a href="/faq" style={linkStyle}>FAQ</a>
            </div>
            <div style={socialsStyle}>
                <a href="https://x.com/Alpha_Daos" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                <img src="src\icons\twitter.svg" alt="Twitter" />
                </a>
                
                <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                <img src="src\icons\telegram.svg" alt="Telegram" />
                </a>
            </div>
            <div style={{ ...copyrightStyle, marginTop: "10px" }}>
                <p>© {new Date().getFullYear()} AlphaDAO. Built with ❤️ for the community.</p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from "react";

const Footer = (props) => {

    const footer = {
        backgroundColor: "#5a6268",
        paddingTop: "2em",
        paddingBottom: "2em",
        position: "absolute",
        bottom: "0",
        width: "100%"
    }

    const textFooter = {
        textAlign: "center",
        color: "white"
    }

  return (
    <footer style={footer}>
        <p style={textFooter}>ProjectLab by Artilect© 2020</p>
    </footer>
  );
};

export default Footer;
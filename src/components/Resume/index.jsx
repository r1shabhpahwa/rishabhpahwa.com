import React from "react";
import resumePdf from "/Resume.pdf"; // Adjust the path to your PDF file

const Resume = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        src={resumePdf}
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Resume"
      ></iframe>
    </div>
  );
};

export default Resume;
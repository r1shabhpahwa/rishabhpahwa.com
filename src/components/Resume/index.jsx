import React from "react";
import resumePdf from "/Resume.pdf";

const Resume = () => {
    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = resumePdf;
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <div style={{ height: "100vh", width: "100%", padding: "20px" }}>
        {/* Download Button */}
        <button
          onClick={handleDownload}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          Download Resume
        </button>
  
        {/* PDF Viewer */}
        <iframe
          src={resumePdf}
          style={{ width: "100%", height: "90%", border: "none" }}
          title="Resume"
        ></iframe>
      </div>
    );
  };
  
  export default Resume;
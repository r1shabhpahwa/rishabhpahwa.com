import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, DownloadIcon } from "@heroicons/react/outline";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import useDarkMode from "../../hooks/useDarkMode";
import images from "../../constants/image";
import resumePdf from "/Resume.pdf";

const Resume = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Rishabh_Pahwa_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg-primary">
      {/* Simple Navigation Header */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-dark-bg-primary/80 backdrop-blur-md border-b border-gray-200 dark:border-dark-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img
                className="h-12 w-auto"
                src={images.rishabhHey}
                alt="Rishabh icon"
              />
            </Link>
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="text-sm font-hero font-normal text-primary dark:text-dark-text-primary hover:text-primary-600 dark:hover:text-dark-text-secondary transition-colors"
              >
                home
              </Link>
              <button
                onClick={handleMode}
                className="text-primary dark:text-dark-accent-primary hover:dark:text-dark-accent-hover transition-colors"
              >
                {darkTheme ? (
                  <SunIcon className="h-6 w-6 cursor-pointer" />
                ) : (
                  <MoonIcon className="h-6 w-6 cursor-pointer" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-7xl mt-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h1 className="text-3xl md:text-4xl font-hero font-medium text-primary dark:text-dark-text-primary">
            Resume
          </h1>

          <button
            onClick={handleDownload}
            className="relative inline-block text-sm font-hero font-normal text-white dark:text-dark-bg-primary group focus:outline-none focus:ring w-max"
          >
            <span className="absolute inset-0 border border-primary dark:border-dark-text-primary"></span>
            <span className="relative flex items-center gap-2 px-6 py-3 transition-transform bg-primary dark:bg-dark-text-primary border border-primary dark:border-dark-text-primary group-hover:-translate-x-1 group-hover:-translate-y-1">
              <DownloadIcon className="h-5 w-5" />
              download pdf
            </span>
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="bg-neutral dark:bg-dark-bg-secondary rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-dark-border">
          <iframe
            src={resumePdf}
            className="w-full h-[calc(100vh-250px)] md:h-[calc(100vh-200px)]"
            title="Resume"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;
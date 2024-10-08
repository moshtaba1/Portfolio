import React from "react";
import "./ProjectSection.css";

export default function ProjectSection() {
  const projects = [
    {
      title: "Made in webflow",
      src: "https://krypto-mt.webflow.io",
      img: "./assets/images/img.png",
    },
    {
      title: "Made in webflow",
      src: "https://promer-mt.webflow.io",
      img: "./assets/images/primer-img.png",
    },
    {
      title: "Made with react",
      src: "https://tola-app.vercel.app/",
      img: "./assets/images/tola.png",
    },
    {
      title: "Made with react",
      src: "https://my-app-ten-lime.vercel.app/",
      img: "./assets/images/portfolio.png",
    },
    {
      title: "Made with wordpress",
      src: "https://naglestore.com",
      img: "./assets/images/nagle.png",
    },
    {
      title: "Made with react",
      src: "https://gallery-project1.vercel.app/",
      img: "./assets/images/gallery.png",
    },
  ];

  return (
    <div id="project" className="project-section">
      <div className="container">
        <div className="project-wraper">
          {projects.map((p) => (
            <div className="project">
              <a href={p.src} target="_blank">
                <img src={p.img} alt="project image" />
                <div className="project-title">{p.title}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

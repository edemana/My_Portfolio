import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { sumArray } from "../../helper";
import { projects } from "../../data";
import Card from "./Card"
const tabs = [
  { name: "All" },
  { name: "Web" },
  { name: "UI/UX" },
  { name: "Apps" },
];

const Projects = () => {
  const [displayableProjects, setDisplayableProjects] = useState(projects);
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const itemsEls = useRef(new Array());

  useEffect(() => {
    const prevEl = itemsEls.current.filter((_, index) => index < activeIndex);
    setOffset(sumArray(prevEl.map(item => item.offsetWidth)));
    setIndicatorWidth(itemsEls.current[activeIndex]?.offsetWidth)
  }, [activeIndex]);

  const setProjects = (category) => {
    if (category === "All") {
      setDisplayableProjects(projects);
    } else {
      const filteredProjects = projects.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setDisplayableProjects(filteredProjects);
    }
  };

  return (
    <section id='projects'>
      <div className="section__wrapper projects__container">
        <div className="section__header center">
          <h2 className="primary__title">Projects</h2>
        </div>
        <nav>
          {tabs.map((tab, index) => (
            <button
              ref={(el) => (itemsEls.current[index] = el)}
              onClick={() => {
                setActiveIndex(index);
                setProjects(tab.name);
              }}
              key={index}
              className={activeIndex === index ? 'active' : ''}
            >
              {tab.name}
            </button>
          ))}
          <span
            className="active__indicator"
            style={{
              left: `${offset}px`,
              width: `${indicatorWidth}px`,
            }}
          ></span>
        </nav>

        <div className="card__container">
            {
                displayableProjects.map((project, index)=>(
                <Card 
                 title={project.title}
                 image={project.image}
                 data={project.data}
                 stack={project.stack}
                 demolink={project.data.demoLink}
                 key={index}
                />
                ))
            }
        </div>
        {/* Render the projects based on the selected category */}
        <div className="projects__list">
          {displayableProjects.map((project, index) => (
            <div className="project__item" key={index}>
              {/* Render project details here */}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {/* Add more details as needed */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

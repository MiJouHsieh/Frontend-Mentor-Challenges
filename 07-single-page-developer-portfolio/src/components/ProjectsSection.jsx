import PropTypes from "prop-types";
import { projectItems } from "src/projectsData";

function ProjectCard({ title, images, skills }) {
  return (
    <article className="relative flex w-full flex-grow justify-center md:w-[45%]">
      <div className="group flex w-full flex-col">
        <div className="relative mb-5 w-full object-cover">
          <img
            className="w-full"
            src={images[0]}
            alt={`${title} screenshot`}
            srcSet={`${images[0]} 768w, ${images[1]} 1440w, ${images[1]} 1920w`}
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) 100vw, 100vw"
          />
        </div>
        <div className="mb-5 1440:m-0">
          <h2 className="title-m mb-[7px]">{title}</h2>
          <div className="body-medium flex gap-x-[18px]">
            {skills.map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                role="listitem"
                aria-label={`Skill: ${skill}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="btn-1440 will-change-opacity-transform flex justify-start">
          <button
            className="borderStyle mr-[30px] 1440:m-0"
            aria-label={`View project for ${title}`}
          >
            VIEW PROJECT
          </button>
          <button
            className="borderStyle"
            aria-label={`View code for ${title}`}
          >
            VIEW CODE
          </button>
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section className="flex w-full flex-col gap-y-10 md:gap-y-[60px] 1440:gap-y-[80px]">
      <div className="flex w-full items-center justify-between">
        <h1 className="section-title md:md-title 1440:title-xl">
          Project
        </h1>
        <button
          className="btnText-size16 borderStyle w-[120px] pb-[10px]"
          aria-label="contact author"
        >
          CONTACT ME
        </button>
      </div>
      <div className="flex flex-col gap-y-10 md:flex-row md:flex-wrap md:justify-between md:gap-x-[22px] md:gap-y-[60px] 1440:gap-x-6 1440:gap-y-[30px]">
        {projectItems.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            images={item.images}
            skills={item.skills}
          />
        ))}
      </div>
    </section>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

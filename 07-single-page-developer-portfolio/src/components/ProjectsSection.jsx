import project1Small from "src/assets/thumbnail-project-1-small.webp";
import project2Small from "src/assets/thumbnail-project-2-small.webp";
import project3Small from "src/assets/thumbnail-project-3-small.webp";
import project4Small from "src/assets/thumbnail-project-4-small.webp";
import project5Small from "src/assets/thumbnail-project-5-small.webp";
import project6Small from "src/assets/thumbnail-project-6-small.webp";
import project1Large from "src/assets/thumbnail-project-1-large.webp";
import project2Large from "src/assets/thumbnail-project-2-large.webp";
import project3Large from "src/assets/thumbnail-project-3-large.webp";
import project4Large from "src/assets/thumbnail-project-4-large.webp";
import project5Large from "src/assets/thumbnail-project-5-large.webp";
import project6Large from "src/assets/thumbnail-project-6-large.webp";

import PropTypes from "prop-types";

const projectItems = [
  {
    id: 1,
    title: "DESIGN PORTFOLIO",
    skills: ["HTML", "CSS"],
    images: [project1Small, project1Large],
  },
  {
    id: 2,
    title: "E-LEARNING LANDING PAGE",
    skills: ["HTML", "CSS"],
    images: [project2Small, project2Large],
  },
  {
    id: 3,
    title: "TODO WEB APP",
    skills: ["HTML", "CSS", "JAVASCRIPT"],
    images: [project3Small, project3Large],
  },
  {
    id: 4,
    title: "ENTERTAINMENT WEB APP",
    skills: ["HTML", "CSS", "JAVASCRIPT"],
    images: [project4Small, project4Large],
  },
  {
    id: 5,
    title: "MEMORY GAME",
    skills: ["HTML", "CSS", "JAVASCRIPT"],
    images: [project5Small, project5Large],
  },
  {
    id: 6,
    title: "ART GALLERY SHOWCASE",
    skills: ["HTML", "CSS", "JAVASCRIPT"],
    images: [project6Small, project6Large],
  },
];


function ProjectCard({ title, images, skills }) {
  return (
    <div className="flex w-full flex-grow justify-between md:w-[45%]">
      <div className="flex flex-col">
        <div className="mb-5 w-full object-cover">
          <img
            src={images[0]}
            alt="project screenshot"
            srcSet={`${images[0]} 768w, ${images[1]} 1440w, ${images[1]} 1920w`}
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) 100vw, 100vw"
          />
        </div>
        <div className="mb-5 1440:m-0">
          <h2 className="title-m mb-[7px]">{title}</h2>
          <div className="body-medium flex gap-x-[18px]">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
        <div className="justify-star flex 1440:none">
          <button className="mr-[30px] h-[38px] border-b-2 border-b-green">
            VIEW PROJECT
          </button>
          <button className="border-b-2 border-b-green">
            VIEW CODE
          </button>
        </div>
      </div>
    </div>
  );
}
// ViewProjectButton, ViewCodeButton
// function ProjectButton() {
//   return (
// <div className="flex">hello</div>
//   )
// }

export function ProjectsSection() {
  return (
    <section className="flex w-full flex-col gap-y-10 md:gap-y-[60px] 1440:gap-y-[80px]">
      <div className="flex w-full justify-between items-center">
        <h1 className="section-title md:md-title 1440:title-xl">
          Project
        </h1>
        <button
          className="text-size16 tracking-[2.29px] w-[120px] pb-[10px] border-b-2 h-[38px] border-b-green"
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
  images: PropTypes.array.isRequired,
  skills: PropTypes.array.isRequired,
};

// function ProjectCard() {
//   return (
//     <div className="flex justify-between">
//       <div className="flex flex-col">
//         <div className="mb-5 w-full object-cover">
//           <img src={project1Small} alt="project screenshot" />
//         </div>
//         <div className="mb-5 1440:m-0">
//           <h2 className="title-m mb-[7px]">DESIGN PORTFOLIO</h2>
//           <div className="body-medium flex gap-x-[18px]">
//             <span>HTML</span>
//             <span>CSS</span>
//           </div>
//         </div>
//         <div className="flex justify-start bg-orange-400">
//           <button className="mr-[30px] h-[38px]">
//             VIEW PROJECT
//           </button>
//           <button>VIEW CODE</button>
//         </div>
//       </div>
//     </div>
//   );
// }

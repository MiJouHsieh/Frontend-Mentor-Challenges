import PropTypes from "prop-types";

const skillItems = [
  { id: 1, title: "HTML", years: 4 },
  { id: 2, title: "CSS", years: 4 },
  { id: 3, title: "JavaScript", years: 4 },
  { id: 4, title: "Accessibility", years: 4 },
  { id: 5, title: "React", years: 3 },
  { id: 6, title: "Sass", years: 3 },
];
function SkillCard({ title, years }) {
  return (
    <div className="flex w-full flex-col items-center gap-y-[1px] md:w-[345px] md:items-start md:gap-y-3.5  1440:w-[31%]">
      <h1 className="md:title-l text-[32px] font-bold leading-10 tracking-[-1px] text-white">
        {title}
      </h1>
      <p className="text-size16 md:body-medium font-medium text-gray">
        {years} Years Experience
      </p>
    </div>
  );
}
export function SkillsSection() {
  return (
    <div className="1440:pt-[72px] flex flex-col justify-start gap-y-6 py-10 md:flex-row md:flex-wrap md:gap-y-[52px] md:gap-x-[7px] md:pb-0 md:pt-[52px] 1440:gap-y-[58px]">
      {skillItems.map((item) => (
        <SkillCard
          key={item.id}
          title={item.title}
          years={item.years}
        />
      ))}
    </div>
  );
}
SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  years: PropTypes.number.isRequired,
};

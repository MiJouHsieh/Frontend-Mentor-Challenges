import PatternApp from "src/assets/pattern-apps.svg?react";
import PatternGraphicDesign from "src/assets/pattern-graphic-design.svg?react";
import PatternIllustrations from "src/assets/pattern-illustrations.svg?react";
import PatternMotionGraphics from "src/assets/pattern-motion-graphics.svg?react";
import PatternPhotography from "src/assets/pattern-photography.svg?react";
import PatternUiUx from "src/assets/pattern-ui-ux.svg?react";

import { SERVICE_LIST } from "src/constant";

const ICON_COMPONENTS = {
  PatternApp,
  PatternGraphicDesign,
  PatternIllustrations,
  PatternMotionGraphics,
  PatternPhotography,
  PatternUiUx,
};

function GridCard({ className, title, children }) {
  return (
    <div className={`relative ${className} h-full p-6`}>
      <h4 className="absolute bottom-6 left-6 text-2xl font-bold text-white">
        {title}
      </h4>
      <div className="absolute right-6 top-6">{children}</div>
    </div>
  );
}

export function ServiceGrid() {
  return (
    <div className="grid-auto-rows-[182px] grid h-[1188px] w-full grid-cols-2 grid-rows-6 gap-6" >
      {SERVICE_LIST.map(({ id, className, title, icon }) => {
        const IconComponent = ICON_COMPONENTS[icon];
        return (
          <GridCard key={id} className={className} title={title}>
            {IconComponent && <IconComponent />}
          </GridCard>
        );
      })}
    </div>
  );
}

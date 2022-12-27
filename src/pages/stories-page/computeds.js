import { windowWidth } from "@/libs/window-width";
import { IS_DESKTOP, IS_IPAD, IS_TABLET } from "@/utils/window-sizes";

const DESK_SLIDES = 4.5;
const DESK_MIDDLE = 3.5;
const DESK_SMALL = 1;

export const getSlidePerView = () => {
  const isBigWindow =
    windowWidth().value === IS_DESKTOP || windowWidth().value === IS_TABLET;
  const isMiddleWindow = windowWidth().value === IS_IPAD;

  if (isBigWindow) {
    return DESK_SLIDES;
  } else if (isMiddleWindow) {
    return DESK_MIDDLE;
  } else {
    return DESK_SMALL;
  }
};

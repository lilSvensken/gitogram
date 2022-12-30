import { windowWidth } from "@/libs/window-width";
import { IS_DESKTOP, IS_IPAD, IS_TABLET } from "@/utils/window-sizes";

const BIG_GAP = 30;
const MIDDLE_GAP = 12;
const SMALL_GAP = 10;

export const getIsNavigation = () => {
  return windowWidth().value === IS_DESKTOP;
};

export const getSpaceBetween = () => {
  const isBigWindow =
    windowWidth().value === IS_DESKTOP || windowWidth().value === IS_TABLET;
  const isMiddleWindow = windowWidth().value === IS_IPAD;

  if (isBigWindow) {
    return BIG_GAP;
  } else if (isMiddleWindow) {
    return MIDDLE_GAP;
  } else {
    return SMALL_GAP;
  }
};

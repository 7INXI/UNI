export { useStore } from "../src/store";
import { onHide, onShow, onPullDownRefresh } from "@dcloudio/uni-app";

interface CALLBACKFUNC {
  (func: () => void): void;
}

export const onMountedAL: CALLBACKFUNC = (fn) => {
  onShow(() => {
    fn();
  });
};

export const onUnmountedAL: CALLBACKFUNC = (fn) => {
  onHide(() => {
    fn();
  });
};

export const onScrollAL: CALLBACKFUNC = (fn) => {
  onPullDownRefresh(() => {
    fn();
  });
};

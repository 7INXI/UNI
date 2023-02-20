export const useRouter = () => {
  // TODO 路由鉴权
  return {
    push: (url: string) => {
      uni.navigateTo({
        url,
      });
    },
    replace: (url: string) => {
      uni.redirectTo({
        url,
      });
    },
    go: (delta: number) => {
      uni.navigateBack({
        delta: -delta,
      });
    },
  };
};

export const useRoute = () => {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
};

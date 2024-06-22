import { useMediaQuery } from "react-responsive";

export function useFlexInitialization(mediaQuery) {
  const flex = {
    count: mediaQuery.default.count,
  };

  const screen640 = useMediaQuery({
    query: "(width <= 640px)",
  });
  const screen768 = useMediaQuery({
    query: "(640px < width <= 768px)",
  });
  const screen1024 = useMediaQuery({
    query: "(768px < width <= 1024px)",
  });
  const screen1440 = useMediaQuery({
    query: "(1024px < width <= 1440px)",
  });
  const screen1920 = useMediaQuery({
    query: "(width > 1440px)",
  });

  if (screen640) {
    return {
      count: mediaQuery.screen640.count,
    };
  } else if (screen768) {
    return {
      count: mediaQuery.screen768.count,
    };
  } else if (screen1024) {
    return {
      count: mediaQuery.screen1024.count,
    };
  } else if (screen1440) {
    return {
      count: mediaQuery.screen1440.count,
    };
  } else if (screen1920) {
    return {
      count: mediaQuery.screen1920.count,
    };
  }

  return flex;
}

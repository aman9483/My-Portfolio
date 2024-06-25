import { useCallback, useEffect, useState } from "react";

export function useScreenBreakpoint(breakpoint) {
  const [width, setWidth] = useState(true);

  const handleResize = useCallback(() => {
    setWidth(window.innerWidth < breakpoint);
  }, [breakpoint]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return width;
}

import { useCallback, useEffect, useRef } from "react";

const useClickOutside = (handler: any) => {
  const elementRef = useRef<any>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        handler();
      }
    },
    [handler]
  );

  useEffect(() => {
    const listener = document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [elementRef, handleClickOutside]);

  return (node: any) => {
    elementRef.current = node;
  };
};
export default useClickOutside;

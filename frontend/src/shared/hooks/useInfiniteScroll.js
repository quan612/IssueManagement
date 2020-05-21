import { useEffect, useCallback } from "react";

export const useInfiniteScroll = (
  scrollRef,
  action,
  itemLength,
  limit,
  isLoading
) => {
  const fetchCall = useCallback(
    (entries) => {
      const target = entries[0];

      if (target.isIntersecting && itemLength !== limit) {
        !isLoading && action(itemLength);
      }
    },
    [action, limit, itemLength, isLoading]
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver(fetchCall, options);
    if (scrollRef && scrollRef.current) observer.observe(scrollRef.current);

    return () => observer.unobserve(scrollRef.current);
  }, [scrollRef, fetchCall]);
};

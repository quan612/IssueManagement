import { useTrail } from "react-spring";

export const UseTrailAnimation = (items, renderItems) => {
  const trail = useTrail(items.length, {
    from: {
      marginLeft: -60,
      opacity: 0,
      transform: "translate3d(-80, 0, 0)"
    },
    to: { marginLeft: 0, opacity: 1, transform: "translate3d(0, 0px, 0)" },
    delay: 200,
    config: { duration: 550 }
  });

  return trail.map((props, index) => {
    return renderItems(props, items, index);
  });
};

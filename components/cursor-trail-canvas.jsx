import { useEffect, useRef } from "react";
import {cursorTrail} from "../utiliy/cursor-trail"

export default function CursorTrailCanvas(props) {
  const refCanvas = useRef(null);

  useEffect(() => {
    const { cleanUp, renderTrailCursor } = cursorTrail({
      ref: refCanvas,
      color: props.color,
    });
    renderTrailCursor();

    return () => {
      cleanUp();
    };
  }, [props.color]);

  return (
    <canvas
      ref={refCanvas}
      className={props.className}
      style={props.style}
    ></canvas>
  );
}

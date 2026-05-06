"use client";
import React, { useEffect, useState } from "react";
import "./Cursor.css";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      if (e.target.closest(".link")) {
        setActive(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.closest(".link")) {
        setActive(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseEnter);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Shadow Cursor */}
      <div
        className={`cursor cursor-shadow ${active ? "active" : ""}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />

      {/* Dot Cursor */}
      <div
        className={`cursor cursor-dot ${active ? "active" : ""}`}
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        <div className={`semi_arc e6 ${active ? "active" : ""}`}>
          <div className="semi_arc_3 e5_1">
            <div className="semi_arc_3 e5_2">
              <div className="semi_arc_3 e5_3">
                <div className="semi_arc_3 e5_4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

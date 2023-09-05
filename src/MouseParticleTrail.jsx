import React, { useState, useEffect } from "react";
import "./CSS Files/MouseParticleTrail.css"; // Import CSS for styling

function MouseParticleTrail() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Add particle on mouse move
      setParticles((prevParticles) => [
        ...prevParticles,
        { x: e.clientX, y: e.clientY, id: Date.now() },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Remove particles after a specified duration (e.g., 1 second)
    const timer = setInterval(() => {
      setParticles((prevParticles) => {
        if (prevParticles.length > 0) {
          // Remove the oldest particle
          return prevParticles.slice(1);
        }
        return prevParticles;
      });
    }, 15); // Change the duration as needed

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="particle-trail">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{ left: particle.x, top: particle.y }}
        ></div>
      ))}
    </div>
  );
}

export default MouseParticleTrail;

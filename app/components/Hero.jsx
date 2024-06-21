import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const videoContainerRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect(); // Deja de observar una vez que el video es visible
        }
      },
      { threshold: 0.1 }
    );

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, [videoContainerRef]);

  return (
    <div ref={videoContainerRef} className="hero">
      {isIntersecting && (
        <video className="hero-video" autoPlay loop muted>
          <source src="/web.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <p>Discover our products and services</p>
      </div>
    </div>
  );
};

export default Hero;

import React, { useState, useEffect, useRef } from 'react'

const STAR_COUNT = 20;

function getInitialStars(width, height) {
  const stars = [];
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      baseX: Math.random() * width,
      baseY: Math.random() * height,

      // Each star gets a unique speed and direction
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      size: 2 + Math.random() * 4,
      opacity: 0.5 + Math.random() * 0.5,
    });
  }
  return stars;
}

const Stars = () => {
  const [positions, setPositions] = useState([]);
  const starPropsRef = useRef([]);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // On mount or resize, randomize star properties
  function handleResize() {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    starPropsRef.current = getInitialStars(window.innerWidth, window.innerHeight);
  }

  // On scroll, update star positions smoothly
  function updatePositions() {
    const scrollY = window.scrollY;
    const { width, height } = dimensions;
    if (!starPropsRef.current.length) {
      starPropsRef.current = getInitialStars(width, height);
    }

    setPositions(
      starPropsRef.current.map(star => {
        // Move smoothly, wrap around edges
        let left = (star.baseX + scrollY * star.dx) % width;
        let top = (star.baseY + scrollY * star.dy) % height;
        if (left < 0) left += width;
        if (top < 0) top += height;
        return { left, top, size: star.size, opacity: star.opacity };
      })
    );
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updatePositions);
    return () => window.removeEventListener('scroll', updatePositions);
  }, [dimensions]);

  return (
    <div className='fixed top-0 left-0 w-full h-full pointer-events-none z-1'>
      {positions.map((pos, index) => (
        <div
          key={index}
          className='absolute rounded-full bg-white'
          style={{
            left: pos.left,
            top: pos.top,
            width: pos.size,
            height: pos.size,
            opacity: pos.opacity,
            boxShadow: '0 0 8px 2px #fff'
          }}
        />
      ))}
    </div>
  )
}

export default Stars
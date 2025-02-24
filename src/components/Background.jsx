/* eslint-disable no-unused-vars */
import '../styles/background.css';

const Background = () => {
  const particles = new Array(12).fill(null).map((_, index) => {
    const size = `${Math.random() * 150 + 50}px`;
    return {
      left: `${Math.random() * 100}%`,
      bottom: `-${Math.random() * 200}px`,
      width: size,
      height: size,
      delay: `${Math.random() * 5}s`,
    };
  });

  return (
    <ul className='background'>
      {particles.map((particle, index) => (
        <li
          key={index}
          style={{
            left: particle.left,
            bottom: particle.bottom,
            width: particle.width,
            height: particle.height,
            animationDelay: particle.delay,
          }}
        ></li>
      ))}
    </ul>
  );
};

export default Background;

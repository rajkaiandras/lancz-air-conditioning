import { useState } from 'react';

// Components
import { Icon } from '../Icons/Icons';

// Styles
import './ScrollTop.css';

export const ScrollTop = () => {
  const [visibility, setVisibility] = useState(false);

  window.addEventListener('scroll', () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="ScrollTop" onClick={handleClick}>
      {visibility && (
        <div className="scroll-top-icon-wrapper">
          <Icon id="top-arrow" />
        </div>
      )}
    </div>
  );
};

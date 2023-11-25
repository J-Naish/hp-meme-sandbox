import { useState } from 'react';
import isEqual from 'lodash/isEqual';


export const useToggleScale = (initialScale, scaleFactor) => {
  // initialize state for scale
  const [currentScale, setCurrentScale] = useState(initialScale);
  const [targetScale, setTargetScale] = useState(initialScale);

  // toggle the scale
  const toggleScale = () => {
    if (isEqual(targetScale, initialScale)) {
      setTargetScale(initialScale.map(s => s * scaleFactor));
    } else {
      setTargetScale(initialScale);
    }
  };

  return [currentScale, targetScale, setCurrentScale, toggleScale];
};

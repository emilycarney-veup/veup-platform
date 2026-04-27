import React, { createContext, useState, useContext, useEffect } from 'react';

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
  const [completedSections, setCompletedSections] = useState(() => {
    const saved = localStorage.getItem('veup-progress');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('veup-progress', JSON.stringify(completedSections));
  }, [completedSections]);

  const markCompleted = (moduleId, sectionId) => {
    setCompletedSections(prev => ({
      ...prev,
      [`${moduleId}-${sectionId}`]: true
    }));
  };

  const isCompleted = (moduleId, sectionId) => {
    return !!completedSections[`${moduleId}-${sectionId}`];
  };

  const getModuleProgress = (moduleId, totalSections) => {
    if (totalSections === 0) return 0;
    const completedCount = Object.keys(completedSections).filter(key => key.startsWith(`${moduleId}-`)).length;
    return Math.round((completedCount / totalSections) * 100);
  };

  return (
    <ProgressContext.Provider value={{ completedSections, markCompleted, isCompleted, getModuleProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

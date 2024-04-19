import { useState } from 'react';

const ProjectToggle = ({ onToggle, projectType }) => {

  const toggleSelection = (selection) => {
    onToggle(selection); // Propagate the change up to the parent component
  };
  console.log(projectType)

  return (
    <div className=" bg-gray-800 relative bg-black rounded-full w-24 h-10 flex items-center justify-start">
      {/* The moving background for selection */}
      <div className={`absolute left-0 top-0 w-1/2 h-full bg-[#1DB954] rounded-full transition-transform duration-300 ease-in-out ${projectType === 'vfx' ? '' : 'translate-x-full'}`}></div>
      
      {/* The clickable labels */}
      <div
        className={`cursor-pointer absolute left-0 w-1/2 text-center text-sm font-bold transition-opacity duration-300 ease-in-out ${projectType === 'vfx' ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => toggleSelection('vfx')}
      >
        VFX
      </div>
      <div
        className={`cursor-pointer w-1/2 text-center text-sm font-bold right-0 absolute text-white transition-opacity duration-300 ease-in-out ${projectType === '3d' ? 'opacity-100' : 'opacity-50'}`}
        onClick={() => toggleSelection('3d')}
      >
        3D
      </div>
    </div>
  );
};

export default ProjectToggle;

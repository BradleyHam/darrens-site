'use client'
import Image from 'next/image';
import { Card } from '../components/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ToggleButton from '../components/toggleButton'
import {useState, useMemo} from 'react'

const filterProjects = (projects, selection) => projects.filter(project => project.projectType === selection);

export default function ProjectGallery({projects}) {
  const [projectType, setProjectType] = useState('vfx');
  const filteredProjects = useMemo(() => filterProjects(projects, projectType), [projects, projectType]);
  
  const handleToggle = (selection) => {
    setProjectType(selection);
  };

  if (projects.length === 0) {
    return <div>No projects found.</div>;
  }

  return (
    <div>
      <header className='flex flex-row'>
        <h1 className='text-2xl font-bold mb-8 pr-6'>My Projects</h1>
        <ToggleButton onToggle={handleToggle} projectType={projectType}/>
      </header>
    <div className="project-gallery container mx-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filteredProjects.map(project => (
        <Link key={project._id} href={`/projects/${project.slug}`} passHref>
          <Card>
            <h3 className='opacity-80 group-hover:opacity-100 capitalize text-lg font-regular mt-2 ml-4 mb-4 flex items-center gap-2'>
              {project.name}  <ArrowRight className='group-hover:-translate-x-1 group-hover:-rotate-45 transition duration-200 ease-in-out'/>
            </h3>
            <div className='h-[300px] relative'>
              <Image className='object-cover absolute bottom-0' src={project.image} alt={project.name} fill={true} />
            </div>
          </Card>
        </Link>
      ))}
    </div>
    </div>
  );
}

import getProjects from '../../sanity/sanity-utils/getProjects';
import ProjectGallery from "./ProjectGallery"
export default async function Projects() {
  const projects = await getProjects();
   
    return (
        <div className="project-page-container pt-20 container mx-auto px-6">

        <ProjectGallery projects={projects} />
      </div>
    )}
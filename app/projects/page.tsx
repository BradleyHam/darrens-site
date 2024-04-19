import getProjects from '../../sanity/sanity-utils/getProjects';
import { Navigation } from '../components/nav';
import  Projects  from './Projects';

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div>
      <Navigation />
      <Projects/>
    </div>
  );
}
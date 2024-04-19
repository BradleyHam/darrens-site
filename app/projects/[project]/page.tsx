import { getProject } from "../../../sanity/sanity-utils/getProject";
import Image from 'next/image'
import { Navigation } from "../../components/nav";
import { PortableText } from '@portabletext/react';

type Props = {
    params: {project: string}
}

export default async function ProjectPage({params}: Props) {
    const {project} = params
    const projectData = await getProject(project)
    let {technologiesUsed} = projectData
    console.log('logging from the project page', projectData)
    return (
        <div>
            <Navigation />
            <div className="page-content container pt-28 px-6 mx-auto">
                <h1 className="text-3xl font-bold capitalize">{projectData.name}</h1>
                <div className="project-image-and-content items-center flex flex-row space-x-8 lg: mt-8">
                    <div className="project-image h-[400px] relative my-8 lg:my-0 w-1/2">
                        <Image src={projectData.image} alt={projectData.name} layout="fill" objectFit="cover"/>
                    </div>
                    <div className='w-1/2'>
                        <div className="tags flex flex-row space-x-2">
                            {
                                    technologiesUsed && technologiesUsed.map((tag) => (
                                    <div key={tag} className="tag bg-zinc-800 text-zinc-100 px-4 -ml-2 py-2 rounded-full text-sm font-bold mb-4">{tag}</div>
                                ))
                                }
                        </div>
                        <div>
                             <PortableText value={projectData.content} />
                         </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
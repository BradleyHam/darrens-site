import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

export default async function getProjects() {
  const client = createClient(clientConfig);
  try {
    const projects = await client.fetch(groq`*[_type == "project"]{
      name,
      "slug": slug.current,
      "image": image.asset->url,
      projectType,
      technologiesUsed
    }`,{},
    {next: {
      revalidate: 10 // look for updates to revalidate cache every hour
    }});
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return []; // Return an empty array in case of an error
  }
}


 
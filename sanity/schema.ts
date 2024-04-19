const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    },
    {
      name: "projectType",
      title: 'Project Type',
      type: "string",
      options: {
        list: [
          { title: "3D Project", value: "3d" },
          { title: "VFX Project", value: "vfx" }
        ], // Define options here
      }
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    {
      name: "url",
      title: "URL",
      type: "url"
    },
    // New field for technology tags
    {
      name: "technologiesUsed",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags" // This will display the field as tags in the Sanity Studio
      }
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }]
    }
  ]
}

export default project;
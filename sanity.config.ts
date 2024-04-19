/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works

import project from './sanity/schema'

export default defineConfig({
  basePath: '/studio',
  projectId: '807awobp',
  dataset: 'production',
  title: 'Sanity Studio',
  apiVersion: '2024-04-11',
  
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: [project]
  },
  plugins: [
    structureTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: '2024-04-11'}),
  ],
})

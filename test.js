const { createClient } = require('@sanity/client');
const groq = require('groq');

const client = createClient({
  projectId: '807awobp',
  dataset: 'production',
  apiVersion: '2021-10-21', // use a UTC date string
 // Replace with your actual token if needed
  useCdn: false, // Set to `false` to ensure you are getting the freshest data
});

client.fetch(groq`*[_type == "project"]{
  name,
}`).then(data => {
  console.log(data); // Log the fetched data
}).catch(error => {
  console.error("Failed to fetch data:", error);
});
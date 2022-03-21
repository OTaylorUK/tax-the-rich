import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'v1w1ovsb',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: false, // `false` if you want to ensure fresh data
})

export default client

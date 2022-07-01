// pages/[uid].js

import { createClient } from '../prismicio'

export default function Homepage({ Homepage }) {
  return <h1>{Homepage.uid}</h1>
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const homepage = await client.getByUID('Homepage', params.uid)

  return {
    props: { homepage },
  }
}
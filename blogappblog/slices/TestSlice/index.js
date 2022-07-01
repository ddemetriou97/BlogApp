import React from 'react'
import { RichText } from 'prismic-reactjs'

const TestSlice = ({ slice }) => (
  <section>
  <RichText render={slice.primary.title} />
  <RichText render={slice.primary.description} />
  <img src={slice.primary.backgroundImage.url} alt={slice.primary.backgroundImage.alt} />
  </section>
)

export default TestSlice
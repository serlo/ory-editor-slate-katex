import React from 'react'
import MathComponent from './mathComponent'
import Form from './Form'
import 'katex/dist/katex.min.css'

const Inline = (props) => {
  const { attributes, children, node } = props
  const { data } = node
  const formula = data.get('formula')

  return (
    <span {...attributes}>
      <MathComponent formula={formula} inline/>
      <Form formula={formula} {...props}/>
      {children}
    </span>
  )
}

export default Inline

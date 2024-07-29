import React from 'react'

export default function PlainContent(props) {
const { content  } = props;
  return (
    <div className="container mx-auto py-10">
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </div>
  )
}

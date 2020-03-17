import React from "react"
import { graphql } from "gatsby"

function Index({data}) {
  console.log('data', data);
  return (
    <div>
      <p>Hello World</p>
      <ul>
        {data.allApiSourcePosts.edges
        .filter(({ node }) => node.id !== "dummy")
        .map(({ node }, index) => (
          <li key={index}>{node.title}</li>
        ))}
      </ul>
      {/* <div>
        <button onClick={() => callApi()}>Trigger</button>
      </div> */}
    </div>
  )
}

export const query = graphql`
{
  allApiSourcePosts {
    edges {
      node {
        id
        title
        userId
        body
        alternative_id
      }
    }
  }
}
`

export default Index;

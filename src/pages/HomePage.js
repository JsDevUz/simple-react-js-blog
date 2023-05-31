
import React from 'react'
import Feed from '../components/Feed'

function Home({ posts }) {
  return (
    <>
      <Feed posts={posts} />
    </>
  )
}

export default Home

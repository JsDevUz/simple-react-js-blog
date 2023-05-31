import React from 'react'
import Post from './Post'

function Feed({ posts }) {
    return (
        <div className='feeds'>
            {!posts && <p>No Post</p>}
            {posts.map(post => (
                <Post post={post} key={post.id} />
            ))}
        </div>
    )
}

export default Feed
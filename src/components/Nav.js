import React from 'react'
import { Link } from 'react-router-dom'

function Nav({ setSearch, search }) {
    return (
        <div className='nav'>
            <form onSubmit={(e) => e.preventDefault()}>
                <input placeholder='search...' value={search} onChange={(e) => setSearch(e.target.value)} />
            </form>
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/post'}><li>NewPost</li></Link>
                <Link to={'/about'}><li>About</li></Link>
            </ul>
        </div>
    )
}

export default Nav
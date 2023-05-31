import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Routers from './router/Router'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'
function App() {
    const history = useNavigate()
    const [search, setSearch] = useState('')
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [posts, setPosts] = useState([{
        id: 1,
        title: 'This is my first Post',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia voluptatum magnam suscipit, veniam placeat rem quam! Impedit molestiae odio alias laudantium repellat! Velit, corporis. Temporibus tenetur similique dicta, sed atque alias rerum debitis possimus, eaque ipsa eum culpa rem vitae sint quidem distinctio assumenda laboriosam! Dolores, quas provident! Autem consequuntur unde dolores earum numquam cumque, modi, nobis, minima error magnam inventore accusantium alias excepturi molestias sed voluptate eveniet quo!',
        dateTime: 'July 01,2021 11:37:36 PM'
    }])
    useEffect(() => {
        if (search.length > 0) {
            const searchResults = posts.filter(p => p.body.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
                || posts.filter(p => p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            setSearchResult(searchResults)
        } else {
            setSearchResult(posts)
        }
    }, [search, posts])
    const handleDelete = (id) => {
        const newPost = posts.filter(p => p.id.toString() !== id.toString())
        setPosts([...newPost])
        history('/')
    }

    const addPost = (e) => {
        e.preventDefault()

        if (postTitle.length <= 0 || postBody.length <= 0) return;

        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const newPost = {
            id: id,
            title: postTitle,
            body: postBody,
            dateTime: format(new Date(), 'MMMM dd, yyyy pp')
        }
        setPosts(p => [...p, newPost])
        setPostBody('')
        setPostTitle('')
        history('/')
    }
    return (
        <div className='app'>
            <div className='header-side'>
                <Header />
                <Nav search={search} setSearch={setSearch} />
                <div className='body'>
                    <Routers handleDelete={handleDelete} addPost={addPost} postBody={postBody} setPostBody={setPostBody} postTitle={postTitle} setPostTitle={setPostTitle} posts={searchResult} />
                </div>
            </div>
            <Footer />

        </div>

    )
}

export default App
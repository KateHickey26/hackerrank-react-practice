// Build a React component that:
// 	•	fetches posts from https://jsonplaceholder.typicode.com/posts on mount (useEffect)
// 	•	shows them in a list
// 	•	includes a search box that filters posts by title (case-insensitive)

// get posts
// search bo to filter

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App3() {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
                setError('Failed to fetch posts');
            })
            .finally(() => setLoading(false)); 
    }, []);

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: 16 }}>
            <h1>Posts</h1>
            <input
                type="text"
                placeholder="Search by title..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{ marginBottom: 16, padding: 8, width: '100%' }}
                aria-label='Search posts by title'
            />
            {loading ? (
                <p>Loading posts...</p>
            ) : error ? (
                <p role="alert" style={{ color: 'red' }}>{error}</p>
            ) : filteredPosts.length === 0 ? (
                <p>No posts found.</p>
            ) : (
                <ul>
                    {filteredPosts.map(post => (
                        <li key={post.id} style={{ marginBottom: 8 }}>
                            <strong>{post.title}</strong>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App3;
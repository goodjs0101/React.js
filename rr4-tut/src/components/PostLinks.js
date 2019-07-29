import React from 'react';
import { Link } from 'react-router-dom';

import './PostLinks.css';

const PostLinks = () => {
    return (
        <div className="post-link">
            <Link to='/post/1'>1</Link>
            <Link to='/post/2'>2</Link>
            <Link to='/post/3'>3</Link>
            <Link to='/post/4'>4</Link>
        </div>
    );
}
import React from 'react';

const Home = ({ history }) => {
    return (
        <div>
            Home
            <button onClick={() => {history.push('/posts');
        }}>
            button
        </button>
        </div>
    );
};

export default Home;
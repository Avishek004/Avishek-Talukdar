import React from 'react';
import { Button } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className="d-flex justify-content-center p-5" id="blogs">
            <div className="text-center w-75">
                <h1 className="pb-3">My Blogs</h1>
                <Button variant="outline-secondary" href="/allBlog">See My Blogs</Button>
            </div>
        </div>
    );
};

export default Blogs;
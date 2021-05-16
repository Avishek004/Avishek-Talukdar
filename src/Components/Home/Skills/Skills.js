import React from 'react';
import { Line } from 'rc-progress';

const Skills = () => {
    return (
        <div className="w-100">
            <div className="text-center m-0 p-0">
                <h1>My Skills</h1>
                <h3>HTML <Line percent="90" strokeWidth="1" strokeColor="#05467f" style={{ width: "20rem" }} /></h3>
                <h3>CSS <Line percent="90" strokeWidth="1" strokeColor="#05467f" style={{ width: "20rem" }} /></h3>
                <h3>JavaScript <Line percent="90" strokeWidth="1" strokeColor="#05467f" style={{ width: "20rem" }} /></h3>
                <h3>React <Line percent="75" strokeWidth="1" strokeColor="#05467f" style={{ width: "20rem" }} /></h3>
            </div>
        </div>
    );
};

export default Skills;
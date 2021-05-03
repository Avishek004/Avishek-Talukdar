import React from 'react';
import { Line } from 'rc-progress';

const Skills = () => {
    return (
        <div className="text-center">
            <h1>My Skills</h1>
            <h3>HTML <Line percent="90" strokeWidth="1" strokeColor="#05467f" style={{ width: "20em" }} /></h3>
            <h3>CSS <Line percent="90" strokeWidth="1" strokeColor="#05467f" style={{ width: "20em" }} /></h3>
            <h3>JavaScript <Line percent="90" strokeWidth="1" strokeColor="#05467f" style={{ width: "20em" }} /></h3>
            <h3>React <Line percent="75" strokeWidth="1" strokeColor="#05467f" style={{ width: "20em" }} /></h3>
        </div>
    );
};

export default Skills;
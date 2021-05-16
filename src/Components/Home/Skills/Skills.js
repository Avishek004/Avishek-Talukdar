import React from 'react';
import { Progress } from 'antd';

const Skills = () => {
    return (
        <div className="w-100">
            <div className="text-center m-0 p-0">
                <h1>My Skills</h1>
                <h3>HTML <Progress percent={90} /></h3>
                <h3>CSS <Progress percent={90} /></h3>
                <h3>JavaScript <Progress percent={90} /></h3>
                <h3>React <Progress percent={90} /></h3>
            </div>
        </div>
    );
};

export default Skills;
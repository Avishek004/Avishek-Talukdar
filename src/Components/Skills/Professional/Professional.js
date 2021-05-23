import { Progress } from 'antd';
import React from 'react';

const Professional = ({ professionalSkill }) => {
    const { name, progress } = professionalSkill;
    return (
        <div className="col-md-6 col-sm-6 col-6">
            <li className="list-inline-item">
                <Progress type="circle" percent={progress} />
                <p>{name}</p>
            </li>
        </div>
    );
};

export default Professional;
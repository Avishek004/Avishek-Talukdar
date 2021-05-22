import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const Technical = ({technicalSkill}) => {
    const {name, percentage, progress} = technicalSkill;
    return (
        <div>
            <div className="p-2">
                <div className="labels d-flex justify-content-between">
                    <p>{name}</p>
                    <p>{percentage}%</p>
                </div>
                <div className="">
                    <ProgressBar animated now={progress} />
                </div>
            </div>
        </div>
    );
};

export default Technical;
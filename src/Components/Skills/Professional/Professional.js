import { Progress } from 'antd';
import React from 'react';
import { Container } from 'react-bootstrap';

const Professional = ({ professionalSkill }) => {
    const { name, progress } = professionalSkill;
    return (
        <div className="col-md-6">
            <Container>
                <Progress type="circle" percent={progress} />
                <p>{name}</p>
            </Container>
        </div>
    );
};

export default Professional;
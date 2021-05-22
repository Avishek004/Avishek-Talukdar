import React from 'react';
import { Container } from 'react-bootstrap';
import Professional from './Professional/Professional';
import Technical from './Technical/Technical';

const technicalSkills = [
    {
        name: 'React',
        percentage: 75,
        progress: 75
    },
    {
        name: 'JavaScript',
        percentage: 60,
        progress: 60
    },
    {
        name: 'HTML',
        percentage: 90,
        progress: 90
    },
    {
        name: 'CSS',
        percentage: 80,
        progress: 80
    }
]

const professionalSkills = [
    {
        name: 'Communication',
        progress: 60
    },
    {
        name: 'Team Work',
        progress: 60
    },
    {
        name: 'Project Management',
        progress: 60
    }, {
        name: 'Creativity',
        progress: 60
    }
]

const Skills = () => {
    return (
        <section className="my-skills" id="skills">
            <Container>
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-12">
                        <h3 className="text-center">Technical Skills</h3>
                        <div className="technical">
                            {
                                technicalSkills.map(technicalSkill => <Technical technicalSkill={technicalSkill} ></Technical>)
                            }
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-12">
                        <h3 className="text-center">Professional Skills</h3>
                        <div className="row">
                            {
                                professionalSkills.map(professionalSkill => <Professional professionalSkill={professionalSkill} ></Professional>)
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Skills;
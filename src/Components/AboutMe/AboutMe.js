import React from 'react';
import Profile from '../Images/Profile.jpg';

const AboutMe = () => {
    return (
        <div className="p-5" id="aboutMe">
            <h1 className="text-uppercase text-center pb-3">About Me</h1>
            <div className="row">
                <div className="col-md-5 offset-md-1 col-sm-6 col-12 p-3">
                    <img src={Profile} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 col-sm-6 col-12 p-3">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis consequatur accusamus obcaecati. Harum maiores quidem, perferendis eveniet maxime, similique culpa dolorum ea aliquid sunt repellendus ratione quia accusantium cupiditate autem voluptatem fugiat error distinctio totam quisquam ab consequatur natus, consequuntur reiciendis! Quo, inventore consequatur accusantium quidem ipsa eveniet voluptate tempore.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
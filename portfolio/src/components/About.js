// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
    return (
        <div>
            <p className="content is-medium">Technical Writer and Something-of-a Full Stack Developer</p>
            <hr />
            <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Emily Necciai Mayeski"/>
            <p className="content is-italic mt-4">
                I'm Carlos Martinez, a curent student of UCF Coding Bootcamp. The idea of becoming a full stack developer and start has been always 
                one of my biggest goals. Lorem ipsum dolor sit amet. Qui deleniti vitae vel temporibus architecto ut dignissimos molestias 
                sit consequuntur quia a laudantium nulla.
            </p>
            <p className="content">
            Lorem ipsum dolor sit amet. Qui deleniti vitae vel temporibus architecto ut dignissimos molestias 
            sit consequuntur quia a laudantium nulla. Est temporibus ipsam qui dolorem voluptatibus cum consequatur 
            asperiores ad ratione quam. Sit rerum temporibus rem blanditiis voluptatibus eum veritatis amet ut minima 
            consectetur et consequatur dolores est fugiat ipsam in voluptate rerum.
            </p>
        </div>
  );
}

export default About;
import React from 'react';
import Style from './css/about.module.css';

const About = () => {
    const [show, setShow] = React.useState(true);

    return (
        <>
            <div className={Style.header}>
                <h2
                    id={Style.hdr}
                    style={{color: show ? '#4d62c3' : '#078207'}}
                >
                    {show ? "О Нас" : "О компании"}
                </h2>
                <br/>
                <button className='btn btn-primary' onClick={() => setShow(!show)}>Клик</button>
            </div>

        </>
    );
};

export default About;

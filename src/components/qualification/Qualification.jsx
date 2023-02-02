import React, { useState } from 'react'
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <selection className="qualification section">
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My personal journey
        </span>


        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div className=
                    {toggleState === 1 
                    ? 'qualification__button qualification__active button--flex' 
                    : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className=
                    {toggleState === 2 
                    ? 'qualification__button qualification__active button--flex' 
                    : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>

            </div>

            <div className="qualification__sections">
                <div className=
                {toggleState === 1
                ? 'qualification__content qualification__content-active' 
                : 'qualification__content '}>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Informatika</h3>
                            <span className='qualification__subtitle'>Student - UNIKOM</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender-alt'></i> 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>

                        <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className='qualification__title'>Web Developer</h3>
                            <span className='qualification__subtitle'>Freelance</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender-alt'></i> 2020 - 2021
                            </div>
                        </div>

                    </div>

                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Fullstack Developer</h3>
                            <span className='qualification__subtitle'>Freelance</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender-alt'></i> 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>

                        <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className='qualification__title'>UI/UX</h3>
                            <span className='qualification__subtitle'>Freelance</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender-alt'></i> 2022 - Present
                            </div>
                        </div>

                    </div>
                </div>

                <div className=
                {toggleState === 2
                ? 'qualification__content qualification__content-active' 
                : 'qualification__content '}>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Data Science</h3>
                            <span className='qualification__subtitle'>Shopee</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender-alt'></i> 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>

                        <div>
                        <span className='qualification__rounder'></span>
                        <span className='qualification__line'></span>
                        </div>

                        <div>
                            <h3 className='qualification__title'>Machine Learning</h3>
                            <span className='qualification__subtitle'>Shoppe</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender-alt'></i> 2020 - 2021
                            </div>
                        </div>

                    </div>

                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Data Analyst</h3>
                            <span className='qualification__subtitle'>Google</span>
                            <div className='qualification__calender'>
                                <i className='uil uil-calender-alt'></i> 2022 - Present
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </selection>
  );
};

export default Qualification
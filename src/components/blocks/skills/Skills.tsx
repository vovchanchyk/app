import React from 'react';
import img from './../../../styles/img/skills/cba4c53d31f0995a0d88fc09779eea46.jpg';


const Skills = () => {
    return (
        <div className="description">
    <div className="description__left">
      <h4 className="description__title">
        General description of the assignment
      </h4>
      <div className="description__items">
        <div className="description__item">
          <div className="description__number">
            01
          </div>
          <div className="description__text">Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.</div>
        </div>

        <div className="description__item">
          <div className="description__number">
            02
          </div>
          <div className="description__text">LLorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor 
             incididunt ut labore et dolore magna aliqua.</div>
        </div>

        <div className="description__item">
          <div className="description__number">
            03
          </div>
          <div className="description__text">Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
    </div>
    <div className="description__right">
      <img src={img} alt="" className="description__img"></img>
    </div>

  </div>

    )
}

export default Skills

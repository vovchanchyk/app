import React from 'react'

import img1 from './../../../styles/img/description/1a001e50aa24a31a342a4fef1430def8.jpg'

import img2 from './../../../styles/img/description/39da374b3ed16c1dbff949a9700888ca.jpg'

const Team = () => {
    return (
        <div className="team">
        <h3 className="team__title">
          Our team
        </h3>
        <div className="team__cols">
          <div className="team__col">
            <img src={img1} alt="" className="team__img"></img>
            <div className="team__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Augue molestie pretium, dictum nunc ac pellentesque. Semper imperdiet elit, nec faucibus varius dui. 
              Lorem non sed tincidunt pharetra tempor. Amet proin sapien consequat orci, mauris.Lorem ipsum
            </div>
            <span className="team__more">
              Learn more
            </span>
          </div>
          <div className="team__col">
            <img src={img2} alt="" className="team__img"></img>
            <div className="team__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               Augue molestie pretium, dictum nunc ac pellentesque. Semper imperdiet elit, nec faucibus varius dui. 
              Lorem non sed tincidunt pharetra tempor. Amet proin sapien consequat orci, mauris.Lorem ipsum
            </div>
            <span className="team__more">
              Learn more
            </span>
          </div>
        </div>
       
      </div>
    )
}

export default Team

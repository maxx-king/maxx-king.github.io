import React from 'react';
import InfoSection from '../Components/InfoSection'
import {ThreeDInfo1, ThreeDInfo2, ThreeDInfo3, ThreeDInfo4 } from '../Components/InfoSection/data'

const ThreeDprinting = () => {
  return (
  <div>
    <InfoSection {...ThreeDInfo1} />
    <InfoSection {...ThreeDInfo2} />
    <InfoSection {...ThreeDInfo3} />
    <InfoSection {...ThreeDInfo4} />
  </div> )
};

export default ThreeDprinting;

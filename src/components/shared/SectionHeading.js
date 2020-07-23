import React from 'react';

import './SectionHeader.scss';

const SectionHeading = ({ headerFirstWord, headerSecondWord, subHeader }) => {
  return (
    <div className='section_heading'>
      <h1 className='section_heading-header'>
        {headerFirstWord} <span>{headerSecondWord}</span>
      </h1>
      <h2 className='section_heading-subheader'>{subHeader}</h2>
      <span className='section_heading-line'></span>
    </div>
  );
};

export default SectionHeading;

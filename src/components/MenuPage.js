import React, { useState } from 'react';

import { menuSections, initialSection } from '../components/menupagedata';
import './MenuPage.scss';
import SectionHeading from '../components/shared/UI/SectionHeading';

function MenuPage(props) {
  const [activeSection, setActiveSection] = useState(initialSection);

  return (
    <div className='menu'>
      <SectionHeading
        headerFirstWord='Our'
        headerSecondWord=' Menu'
        subHeader='New Orleans foor with cajun twist'
      />
      <div className='menu_sections'>
        {menuSections.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              setActiveSection(item);
            }}
          >
            <h3>{item.name}</h3>
            <span className='menu_sections-line'></span>
          </div>
        ))}
      </div>

      <div className='menu_items-container'>
        {activeSection.items.map((item) => (
          <div key={item.name} className='menu_items-container-card'>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p>{item.descreption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { menuSections } from '../components/menupagedata';
import './MenuPage.scss';

import SectionHeading from '../components/shared/UI/SectionHeading';
import Mobile from '../components/shared/Layout/Mobile';
import Desktop from '../components/shared/Layout/Desktop';
import Phone from '../components/shared/UI/Phone';

function MenuPage({ activeSection, setActiveSection }) {
  return (
    <div className='menu'>
      <SectionHeading
        headerFirstWord='Our'
        headerSecondWord=' Menu'
        subHeader='New Orleans food with cajun twist'
      />
      <Desktop>
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
      </Desktop>
      <Mobile>
        <Phone />
        <div className='menu_sections_mobile'>
          <select
            id='menu_sections'
            name='menu'
            onChange={(e) => {
              let active = menuSections.find(
                (item) => item.name === e.target.value
              );
              setActiveSection(active);
            }}
          >
            {menuSections.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name.toUpperCase()}
              </option>
            ))}
          </select>
          <FontAwesomeIcon icon='caret-down' color='white' pull='left' />
        </div>
      </Mobile>

      <div className='menu_items-container'>
        {activeSection.items.map((item) => (
          <div key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <p className='menu_items-container-descr'>{item.descreption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;

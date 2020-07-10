import React from 'react';
import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

function ContactPage(props) {
  return (
    <div>
      <h1>Device Test!</h1>
      <h1>Device Test!</h1>
      <h1>Device Test!</h1>
      <h1>Device Test!</h1>
      <h1>Device Test!</h1>
      <Desktop>Desktop or laptop</Desktop>
      <Tablet>Tablet</Tablet>
      <Mobile>Mobile</Mobile>
      <Default>Not mobile (desktop or laptop or tablet)</Default>
    </div>
  );
}

export default ContactPage;

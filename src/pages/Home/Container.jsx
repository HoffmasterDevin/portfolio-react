import React, { useState } from 'react';
import Navigation from '../../components/Navigation/Navigation'
import Landing from './Landing';
import AboutMe from '../../pages/AboutMe/AboutMe';
import Contacts from '../../pages/Contacts/Contacts';
import Portfolio from '../../pages/Portfolio/Portfolio'
import Footer from '../../components/Footer/Footer'


export default function Container() {
  const [currentPage, setCurrentPage] = useState('Landing');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Landing') {
      return <Landing />;
    }
    if (currentPage === 'About') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contacts />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <div className="page-content">{renderPage()}</div>
      <Footer />
    </div>
  );
}
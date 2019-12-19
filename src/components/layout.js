import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const [menuVisible, setMenuVisible] = React.useState(true);
  const toggleMenu = (e) => {
    if ((e.deltaY > 0 && !menuVisible) || (e.deltaY < 0 && menuVisible)) {
      return;
    } else if (e.deltaY > 0 && menuVisible) {
      setMenuVisible(false);
    } else if (e.deltaY < 0 && !menuVisible) {
      setMenuVisible(true);
    }
  }
  return (
    <div onWheel={e => toggleMenu(e)} id='main-wrapper'>
      <Header menuVisible={menuVisible} />
      <main>
        {children}
        <div className='social-media'>
          <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/mierzwiii/'><button id='ig'></button></a>
        </div>
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

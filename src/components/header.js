import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menu, menuVisible }) => (
  <header>
    <div className='wrapper'>
      <div className='logo full-width'>Karol Mierzwa</div>
      <nav className='menu' style={menuVisible?{top: '60px'}:{top: '0px'}}>
        <ul>
          {menu.map((item, index) => <li key={`menu-item-${index}`}><Link to={`/${item.url}`}><button>{item.caption}</button></Link></li>)}
        </ul>
      </nav>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  menu: [
    {
      caption: 'Blog',
      url: ''
    },
    {
      caption: 'O mnie',
      url: 'o-mnie'
    },
    {
      caption: 'Kontakt',
      url: 'kontakt'
    },
  ]
}

export default Header

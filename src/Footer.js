import React from 'react'
import './Footer.css'

const Footer = (props) => {
  const activePage = props.searchObject.page;
  const pagesArray = [];
  if (props.searchResult) {
    for (let i = 1; i < props.searchResult.nbPages + 1; i++) {
      if(i === activePage + 1) {
        pagesArray.push(<span key={i} className='active'>{i}</span>);
      } else {
        pagesArray.push(<span key={i} className='navElement' onClick={() => props.setPage(i)}>{i}</span>);
      }
    }
  }
  return (
    <footer className="page-footer font-small blue bg-light">
      <nav className='navBar'>
        {!props.isLoading && props.searchResult && props.searchResult.hits.length !== 0 && pagesArray}
      </nav>
      <div className="footer-copyright text-center py-3">© 2021 Copyright:
        <a> Ben Joachim Jugesh Jonas</a>
      </div>    
    </footer>
  )
}

export default Footer;
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default (props) => {
  const [searchInput, setSearchInput] = useState("");
  const onSearchInputChange = ({target}) => {
    setSearchInput(target.value)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand">Navbar</div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {props.searchObject.search}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li onClick={(event) => props.setSearchFilter(event)} ><div className="dropdown-item" name="search">All</div></li>
                <li onClick={(event) => props.setSearchFilter(event)} ><div className="dropdown-item" name="search">Stories</div></li>
                <li onClick={(event) => props.setSearchFilter(event)} ><div className="dropdown-item" name="search">Comments</div></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {props.searchObject.order}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li onClick={(event) => props.setSearchFilter(event)}><div className="dropdown-item" name="order">Date</div></li>
                <li onClick={(event) => props.setSearchFilter(event)}><div className="dropdown-item" name="order">Popularity</div></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {props.searchObject.time}
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li onClick={(event) => props.setSearchFilter(event)}><div className="dropdown-item" name="time">All time</div></li>
                <li onClick={(event) => props.setSearchFilter(event)}><div className="dropdown-item" name="time">Last 24h</div></li>
                <li onClick={(event) => props.setSearchFilter(event)}><div className="dropdown-item" name="time">Past Week</div></li>
                <li onClick={(event) => props.setSearchFilter(event)}><div className="dropdown-item" name="time">Past Month</div></li>
                <li onClick={(event) => props.setSearchFilter(event)}><div className="dropdown-item" name="time">Past Year</div></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" onSubmit={(event) => {event && event.preventDefault(); props.inputFilterQuerySet(searchInput)}}>
            <input 
            onChange={(event) => onSearchInputChange(event)} 
            className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
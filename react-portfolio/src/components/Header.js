import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className='smoothscroll' href='#about'>
                  About
                </a>
              </li>
              <li>
                <a className='smoothscroll' href='#work'>
                  Work Experience
                </a>
              </li>
              <li>
                <a className='smoothscroll' href='#projects'>
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

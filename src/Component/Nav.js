import React, { Component } from 'react';
import './Nav.css';
import logo from './logo.jpg';

class Nav extends React.Component{
    render(){
        return(
            <div className='Nav-head'>
                  <div>
                  <div className='logo'><img src={logo}></img></div>
                  <div>
                  <div className='search-box' type='text'>
                  <i className='fa fa-search'></i>
                  <p> جستجوی شهر،کشور،گردشگری و...</p>
                  </div>
                  
                  </div>
                  
                  <button className='login-button'>ورود
                  <i className="fa fa-lock" aria-hidden='true'></i>
                  </button><br/>
                  <button className='sign-up-button'>عضویت
                  <i className='fa fa-user-plus' aria-hidden='true'></i>
                  </button>
                  <nav className='nav-menu'>
                  <ul className='menu-list'>
                  <li><a href='#'>HD ویدیو</a></li>
                  <li><a href='#'>نیم نگاه</a></li>
                  <li><a href='#'>آموزش</a></li>
                  <li><a href='#'>عصر نوین</a></li>
                  <li><a href='#'>فرهنگ ملل</a></li>
                  <li><a href='#'>فصل سفر</a></li>
                  <li><a href='#'>راهنمای سفر</a></li>
                  <li><a href='#'>جهانگردی</a></li>
                  <li><a href='#'>ایرانگردی</a></li>
                  <li><a href='#'>طبیعت گردی</a></li>
                  <li><a href='#'>گردشگری</a></li>      
                  </ul>
                  </nav>
                  </div>
                   
              </div>
        )
    }
}
export default Nav;
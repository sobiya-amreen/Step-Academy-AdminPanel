import React from 'react'

const ResponsiveMenu = () => {
  return (
    <div>
      {/* <!-- Responsive navBar start --> */}

<div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
    <div className="menu_close_container"><div className="menu_close"><div></div><div></div></div></div>
    <div className="search">
        <form action="#" className="header_search_form menu_mm">
            <input type="search" className="search_input menu_mm" placeholder="Search" required="required"/>
            <button className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
                <i className="fa fa-search menu_mm" aria-hidden="true"></i>
            </button>
        </form>
    </div>
    <nav className="menu_nav">
        <ul className="menu_mm">
            <li className="menu_mm"><a href="index.html">hgcghthghff</a></li>
            <li className="menu_mm"><a href="courses.html">Courses</a></li>
            <li className="menu_mm"><a href="instructors.html">Instructors</a></li>
            <li className="menu_mm"><a href="#">Events</a></li>
            <li className="menu_mm"><a href="blog.html">Blog</a></li>
            <li className="menu_mm"><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
    <div className="menu_extra">
        <div className="menu_phone"><span className="menu_title">phone:</span>(009) 35475 6688933 32</div>
        <div className="menu_social">
            <span className="menu_title">follow us</span>
            <ul>
                <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    </div>
</div>

{/* <!-- Responsive navBar ends --> */}

    </div>
  )
}

export default ResponsiveMenu

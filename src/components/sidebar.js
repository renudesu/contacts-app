import React from 'react';
import { withRouter } from 'react-router-dom';

class SideBar extends React.Component {
  
    render() {
        return (
            <div className="container">
                <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="#left"><img src="https://img.icons8.com/android/24/000000/search.png" alt="search" /></a>
                </nav>
                <div className="row mt-5">
                    {/* <div className="col-md-0"> */}
                    <ul className="nav left flex-column ">
                        <li className="nav-item">
                            <a className="nav-link active" href="left"><img src="https://img.icons8.com/android/24/000000/search.png" alt="search" /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="left"><img src="https://img.icons8.com/material-outlined/24/000000/home--v2.png" alt="" /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="left"><img src="https://img.icons8.com/small/32/000000/user-male-circle.png" alt="" /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="left"><img src="https://img.icons8.com/android/24/000000/time.png" alt="" /></a>
                        </li>
                    </ul>
                </div>
                {/* </div> */}
                <div></div>
            </div>
        );
    }
}
export default withRouter(SideBar);
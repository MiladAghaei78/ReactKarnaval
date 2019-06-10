import React, {Component} from 'react'
import './RightSidebar.css'
import Rock from './images/Rock.jpg'
import Kavir from './images/Kavir.jpg'

class RightSidebar extends React.Component{
    render(){
        return(
            <div>
            <div className='side-bar2'>
                <div className='right-banner'>
                    <div className='right-banner-title'>
                        <h4>محو تماشا شوید</h4>
                    </div>
                    <div className='content'>
                        <div className='section-content'>
                            <a href='#'><img src={Rock}></img></a>
                        </div>
                    </div>
                </div>

                <div className='side-bar3'>
                    <div className='section-title3'>
                        <a href='#'><h4>طبیعت بکر ایران زمین</h4></a>
                    </div>
                    <div className='post3'>
                        <div className='row1'>
                            <div className='pic'>
                                <div className='section-image2'>
                                    <a href='#'><img src={Kavir}></img></a>
                                </div>
                            </div>
                        <div className='post-footer'>
                            <div className='detail-section'>
                                <div className='section-tag'>
                                    <a href='#'>طبیعت ایران</a>
                                </div>
                                <div className='section-title4'>
                                    <a href='#'><h3>تصاویری از طبیعت ایران</h3></a>
                                </div>
                                <div className='date-time'>
                                ۱۳۹۷/۰۶/۲۲ ۱۸:۰۰
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default RightSidebar
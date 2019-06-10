import React, {Component} from 'react'
import './RightPictures.css'

class RightPictures extends React.Component{
    render(){
        return(
                <div className='col-m3'>
                <div className='right-up-picture'>
                    <div className='sub-right-up-picture'>
                        <div><h2 className='sub-right-up-picture-title'>دریاچه بلد اسلوونی</h2></div>
                    </div>
                </div>
                <div className='right-down-picture'>
                    <div className='sub-right-down-picture'>
                        <div><h2 className='sub-right-down-picture-title'>آبشار مارگون|جاذبه شهر شیراز</h2></div>
                    </div>
                </div>
                </div>
        )
    }
}
export default RightPictures
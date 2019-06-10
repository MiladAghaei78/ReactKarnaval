import React,{Component} from 'react'
import './LeftPictures.css'

class LeftPictures extends React.Component{
    render(){
        return(
            <div className='col-m3'>
                <div className='left-up-picture'>
                    <div className='sub-left-up-picture'>
                    <div><h2 className='left-up-picture-title'> مراحل اخذ ویزای این کشور</h2></div>
                    </div>
            </div>
            <div className='left-down-picture'>
                    <div className='sub-left-down-picture'>
                    <div><h2 className='left-down-picture-title'>عمارت قاجاری باغ نیاوران</h2></div>
                    </div>
            </div>
            </div>
        )
    }
}
export default LeftPictures
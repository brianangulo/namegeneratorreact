import React from 'react'

const date= Date();

function Footer(){
    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 offset-4'>
                   <ul>
                       <li><a href='https://www.youtube.com/' target='_blank'>Youtube</a></li>
                       <li><a href='https://www.google.com/webhp?hl=en&ictx=2&sa=X&sqi=2&pjf=1&ved=0ahUKEwiUub_4i4j2AhUQxoUKHWDwDxoQPQgJ' target='_blank'>Google</a></li>
                       <li><a href='https://www.facebook.com/' target='_blank'>Facebook</a></li>
                   </ul>
                </div>
                <div className='col-md-12 offset-4'>
                    <h3>{date}</h3>
                </div>
            </div>
        </div>
    );
}
export default Footer;
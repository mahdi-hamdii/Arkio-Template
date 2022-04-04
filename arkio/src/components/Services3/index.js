import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../api/service'
import SectionTitle3 from '../SectionTitle3'




const ServiceSection3 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <div className={`wpo-service-area-s3 section-padding ${props.ptClass}`}>
            <div className="container">
                <SectionTitle3 subTitle={'Our Capabilities'} MainTitle={'What We Do'}/>
                <div className="row align-items-center">
                    {Services.slice(10,14).map((service, sitem) => (
                        <div className="col-lg-4 col-md-6 col-12" key={sitem}>
                            <div className="wpo-service-item">
                                <div className="wpo-service-img">
                                    <img src={service.sImg} alt=""/>
                                </div>
                                <div className="wpo-service-text">
                                    <h2><Link onClick={ClickHandler} to={`/service-single/${service.Id}`}>{service.sTitle}</Link></h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServiceSection3;
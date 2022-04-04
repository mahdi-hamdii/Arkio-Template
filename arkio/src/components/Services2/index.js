import React from 'react'
import { Link } from 'react-router-dom'
import Services from '../../api/service'
import SectionTitle2 from '../SectionTitle2'




const ServiceSection2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <div className={`wpo-service-area-s2 section-padding pt-0 ${props.srvClass}`}>
            <div className="container-fluid">
                <SectionTitle2 subTitle={'Our Capabilities'} MainTitle={'What We Do'} vText={'Services'}/>
                <div className="row align-items-center">
                    {Services.slice(6,10).map((service, sitem) => (
                        <div className="col-lg-3 col-md-6 col-12" key={sitem}>
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

export default ServiceSection2;
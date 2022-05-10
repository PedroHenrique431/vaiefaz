import React from 'react'
import Icon1 from './images-services/wpp.png'
import Icon2 from './images-services/parsec.png'
import './ServicesElements.css'

const Services = () => {
    return (
        <div className="ServicesContainer" id="services">
            <h1 className="ServicesH1"> Ferramentas: </h1>
            <div className="ServicesWrapper">
                <div className="ServicesCard">
                    <a href='https://web.whatsapp.com/' rel="noreferrer" target="_blank"><img className="ServicesIcon" alt="" src={Icon1}/>
                    <h2 className="ServicesH2">Whatsapp</h2>
                    <p className="ServicesP">comunicação</p></a>
                </div>
                <div className="ServicesCard">
                    <a href='https://parsec.app/downloads' rel="noreferrer" target="_blank"><img className="ServicesIcon" alt="" src={Icon2}/>
                    <h2 className="ServicesH2">PARSEC</h2>
                    <p className="ServicesP">fazer download</p></a>
                </div>
            </div>
        </div>
    )
}

export default Services
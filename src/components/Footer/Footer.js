import React from 'react';
import logo from '../../images/Capture.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="bg-black">
            <div className="container mx-auto relative p-6">
                <div className="flex items-center lg:h-full mx-auto sm:h-20 lg:w-2/3 text-lg">
                    <div>
                        <img className="lg:w-48 sm:w-auto" src={logo} alt="" />
                    </div>
                    <div className="px-6">
                        <p className="text-gray-500"> <FontAwesomeIcon icon={faEnvelope} /> hello@i-art.com</p>
                    </div>
                    <div className="px-6">
                        <p className="text-gray-500"><FontAwesomeIcon icon={faPhoneSquareAlt} />  (+880) 167 000 3034</p>
                    </div>
                    <div className="px-6">
                        <p className="text-gray-500">Press</p>
                    </div>
                    <div className="px-6">
                        <p className="text-gray-500">Privacy</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Footer;
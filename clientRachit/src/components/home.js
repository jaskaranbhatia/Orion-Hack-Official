import React, { Component } from 'react';
import CtaPart from './home/ctaPart';
import PricingPart from './home/pricingPart';
import AboutUs from './home/aboutUs';
import AboutUs2 from './home/aboutUs2';
import Sasu from './home/sasu';
import Features from './home/features';
import Banner from './home/banner';

export class home extends Component {
    render() {
        return (
            <React.Fragment>
                <Banner />
                <Features />
                <AboutUs />
                <Sasu />
                <AboutUs2 />
                <PricingPart />
                <CtaPart />
            </React.Fragment>
        )
    }
}

export default home;

import React from 'react';
import './index.less';
import './index.css';

import TestC from './test';

// const unusedVariableC = 1;

const Dashboard = () => {
    return <div className='Dashboard'>Dashboard new
    <div className='subclass cssclass' style={{background: "pink"}}>
            <TestC />
            <img src="/assets/img1.png" width={1000} height={1000} />
    </div>
    </div>
}

export default Dashboard;
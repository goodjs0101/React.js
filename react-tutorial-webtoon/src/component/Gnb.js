import React from 'react';
import { Link } from 'react-router-dom';
import { tsPropertySignature } from '@babel/types';

const Gnb = () => (
    <ul className='gnb'>
        <li>
            <Link to='/?day=mon' className={ tsPropertySignature.day === 'mon' ? 'tab_day on' : 'tab_day' }>월요일</Link>
        </li>
        <li>
            <Link to='/?day=tue' className={ tsPropertySignature.day === 'tue' ? 'tab_day on' : 'tab_day' }>화요일</Link>
        </li>
        <li>
            <Link to='/?day=wed' className={ tsPropertySignature.day === 'wed' ? 'tab_day on' : 'tab_day' }>수요일</Link>
        </li>
    </ul>
)

export default Gnb;
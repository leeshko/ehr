import s from './radioSelect.module.css';
import React from 'react';

const RadioSelect = ({ loginWay, selectedLoginWay}) => {
    
    return (
        <div onChange={loginWay}>
            <input type='radio' className={s.radio} value='bin' id="radio1" checked={selectedLoginWay === 'bin' || selectedLoginWay === ''} name='entranceType' />
            <label htmlFor="radio1">По БИН/ИИН</label>

            <input type='radio' className={s.radio} value='ecp' id="radio2" name='entranceType' />
            <label htmlFor="radio2">По ЭЦП</label>        
        </div>
    )
}

export default RadioSelect;
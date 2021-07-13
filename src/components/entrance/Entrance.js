import React, { useState } from 'react';
import s from './entrance.module.css';
import Text from './Text';
import RadioSelect from './RadioSelect';
import SelectButton from './SelectButton';
import RegisterBlock from './RegisterBlock';
import ModalECP from './ModalECP';


const Entrance = () => {

    const [selectedLoginWay, setselectedLoginWay] = useState('');

    const loginWay = (e) => {
        console.log(e.target.value)
        if (e.target.value === 'ecp') {
            setselectedLoginWay('ecp');
        } else if (e.target.value === 'bin') {
            setselectedLoginWay('bin');
        }
    }

    const showEntranceForm = () => {
        console.log('showForm')
        
    }

    const state = {

    }

    let backArrow = '\u003c';
    
    return (
        <div className={s.mainWindow}>
            <div className={s.leftSide}>
                <div className={s.wrapper}>
                    <div className={s.back}> {backArrow} Назад</div>
                    <Text />
                    <RadioSelect 
                        loginWay={loginWay}
                    />
                    <SelectButton 
                        showEntranceForm={showEntranceForm}
                    />
                    <RegisterBlock /> 
                    {/* <ModalECP /> */}
                </div>
            </div>
            <div className={s.rightSide}>
                <div className={s.quaterRound}></div>
            </div>
        </div>


    )
}

export default Entrance;
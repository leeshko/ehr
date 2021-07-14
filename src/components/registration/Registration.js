import React, { useState } from 'react';
import s from './styles/registration.module.css';
import Text from './Text';
import RadioSelect from './RadioSelect';
import SelectButton from './SelectButton';
import RegisterBlock from './RegisterBlock';
import ModalECP from './ModalECP';
import ModalBIN from './ModalBIN';


const Registration = () => {

    const [selectedLoginWay, setselectedLoginWay] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showBinScr, setShowBinScr] = useState(false);

    const loginWay = (e) => {
        if (e.target.value === 'ecp') {
            setselectedLoginWay('ecp');
        } else if (e.target.value === 'bin') {
            setselectedLoginWay('bin');
        }
    }

    const showEntranceForm = () => {
        if (selectedLoginWay === 'ecp') {
            setShowModal(true);
        } else if (selectedLoginWay === 'bin') {
            setShowBinScr(true);
        }
    }
        
    const closeModal =() => {
        setShowModal(false);
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
                    
                    { !showBinScr ? 
                    <SelectButton 
                        showEntranceForm={showEntranceForm}
                        >
                        <p>Выбрать ключ ЭЦП на этом ПК</p>
                    </SelectButton> 
                    : null}
                    {showBinScr ? <ModalBIN /> : null}
                   
                    {showModal ? <ModalECP closeModal={closeModal}/> : null}
                        
                    <RegisterBlock /> 
                </div>
            </div>
            <div className={s.rightSide}>
                <div className={s.quaterRound}></div>
            </div>
        </div>
    )
}

export default Registration;
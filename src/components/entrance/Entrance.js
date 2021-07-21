import React, { useState } from 'react';
import s from './entrance.module.css';
import Text from './Text';
import RadioSelect from './RadioSelect';
import SelectButton from './SelectButton';
import RegisterBlock from './RegisterBlock';
import ModalECP from './ModalECP';
import ModalBIN from './ModalBIN';
import FirstRegScreen from './FirstRegScreen';
import EnterAccBlock from './EnterAccBlock';
import EmployerRegScreen from './EmployerRegScreen';
import WorkerRegScreen from './WorkerRegScreen';
import ConfirmationCode from './ConfirmationCode';
import ErrorModal from './errorModal';
import InputFileBtn from './inputFileButton/InputFileBtn';
import fbLogo from '../../assets/entrance/facebookLogo.png';
import instLogo from '../../assets/entrance/instagramLogo.png'


const Entrance = () => {

    const [selectedLoginWay, setselectedLoginWay] = useState('bin');
    const [screenShow, setScreenShow] = useState('start');
    const [showError, setShowError] = useState(() => false);

    const loginWay = (e) => {
        if (e.target.value === 'ecp') {
            setselectedLoginWay('ecp');
        }
        else if (e.target.value === 'bin') {
            setselectedLoginWay('bin');
        }
    }

    console.log('selectedLoginWay', selectedLoginWay)
    console.log('screenShow', screenShow)

    const showEntranceForm = () => {
        console.log('showform')
        if (selectedLoginWay === 'ecp') {
            setScreenShow('ecp');
        } else if (selectedLoginWay === 'bin') {
            setScreenShow('bin');
        }
    }

    const closeModal = () => {
        setScreenShow('start');
    }

    const register = () => {
        setScreenShow('register')
    }

    const goToEmployer = () => {
        setScreenShow('employerReg');
    }
    const goToWorker = () => {
        console.log('worker')
        setScreenShow('workerReg');
    }

    const moveBack = () => {

        switch (screenShow) {
            case 'start':
                // future action
                break;
            case 'ecp':
                setScreenShow('start');
                setselectedLoginWay('bin');
                break;
            case 'bin':
                setScreenShow('start');
                setselectedLoginWay('bin');
                break;
            case 'register':
                setScreenShow('start');
                setselectedLoginWay('bin');
                break;
            case 'employerReg':
                setScreenShow('register');
                break;
            case 'workerReg':
                setScreenShow('register');
                break;
            default:
                setScreenShow('start');
                setselectedLoginWay('bin');
                break;
        }
    }

    const assign = (job, communication) => {
        console.log(`${job}`, `${communication}`)
        if (job === 'employer' && communication === 'phone') {
            setScreenShow('assignPhoneEmpl');
        } else if (job === 'employer' && communication === 'email') {
            setScreenShow('assignEmailEmpl');
        } else if (job === 'worker' && communication === 'phone') {
            setScreenShow('assignPhoneWork');
        } else if (job === 'worker' && communication === 'email') {
            setScreenShow('assignEmailWork');
        }
    }

    let backArrow = '\u003c';

    return (
        <>
            {/* {showError ?
                <ErrorModal>
                    {(screenShow === 'start' || screenShow === 'employerReg') && <div>Введен неверный БИН/ИИН</div>}
                </ErrorModal> : null} */}
            <div className={s.mainWindow}>
                <div className={s.leftSide}>
                    <header className={s.topRow}>
                        <a className={s.topRowText} href='#'>Пользовательское соглашение</a>
                    </header>
                    <div className={s.logoBlock}></div>
                    <div className={s.wrapper}>
                        <div className={s.back} onClick={moveBack}> {backArrow} Назад</div>
                        <Text>
                            {screenShow === 'start' || screenShow === 'ecp' || screenShow === 'bin' ? <p>Вход</p> : null}
                            {screenShow === 'register' ? <p>Регистрация</p> : null}
                            {screenShow === 'assignPhoneEmpl' || screenShow === 'assignEmailEmpl'
                                || screenShow === 'assignPhoneWork'
                                || screenShow === 'assignEmailWork'
                                ? <p>Код подтверждения</p> : null}

                        </Text>

                        {(screenShow === 'start' || screenShow === 'ecp' || screenShow === 'bin') &&
                            <RadioSelect
                                loginWay={loginWay}
                                selectedLoginWay={selectedLoginWay}
                            />}

                        {(selectedLoginWay === 'bin' && screenShow === 'start') &&
                            <ModalBIN
                                showError={showError}
                                setShowError={setShowError}
                            >

                            </ModalBIN>}

                        {(selectedLoginWay === 'ecp' && screenShow === 'start') &&

                            <InputFileBtn
                                showEntranceForm={showEntranceForm}>
                                <p>Выбрать ключ ЭЦП на этом ПК</p>
                            </InputFileBtn>
                        }


                        {screenShow === 'ecp' && 
                        <ModalECP
                            closeModal={closeModal}
                        />}

                        {screenShow === 'register' && <FirstRegScreen goToEmployer={goToEmployer} goToWorker={goToWorker} />}

                        {screenShow === 'register' && <EnterAccBlock />}

                        {screenShow === 'bin' || screenShow === 'ecp' || screenShow === 'start' ? <RegisterBlock register={register} /> : null}

                        {screenShow === 'employerReg' &&
                            <>
                                <Text>
                                    <p>Регистрация</p>
                                </Text>
                                <h2 className={s.objectOfRegistrationText}>Регистрация работодателя</h2>

                                <EmployerRegScreen
                                    assign={assign}
                                    setShowError={setShowError}
                                />
                            </>
                        }

                        {screenShow === 'workerReg' &&
                            <>
                                <Text>
                                    <p>Регистрация</p>
                                </Text>
                            <h2 className={s.objectOfRegistrationText}>Регистрация работника</h2>

                                <WorkerRegScreen
                                    assign={assign} />
                            </>}

                        {screenShow === 'assignPhoneEmpl' || screenShow === 'assignPhoneWork' ?

                            <ConfirmationCode text={'Код из СМС'}>
                                <p>На указанный вами номер телефона выслан 4-значный проверочный код. Введите его в поле ниже:</p>
                            </ConfirmationCode>
                            : null}

                        {screenShow === 'assignEmailEmpl' || screenShow === 'assignPhoneWork' ?

                            <ConfirmationCode text={'Код из e-mail'}>
                                <p>На указанный вами e-mail выслан 4-значный проверочный код. Введите его в поле ниже:</p>

                            </ConfirmationCode>
                            : null}
                    </div>
                    <footer className={s.footerBlock}>
                        <div className={s.footerLogo}></div>
                        <div className={s.footerLinksBlock}>
                            <a className={s.footerLinks} href="">О проекте</a>
                            <a className={s.footerLinks} href="">Нормативно-справочная информация</a>
                            <a className={s.footerLinks} href="">Работодателю</a>
                            <a className={s.footerLinks} href="">Работнику</a>
                        </div>
                        <p>Мы в соцсетях:</p>

                        <div className={s.socialNetBlock}>
                            <a href="#">
                                <img src={fbLogo} alt="" />
                            </a>
                            <a href="#">
                                <img src={instLogo} alt="" />
                            </a>

                        </div>
                        <p>Наш телефон:</p>
                        <span>+7 777 999 66 55</span>

                        <div className={s.copyRight}>
                            © 2021 «Центр развития трудовых ресурсов»
                        </div>

                    </footer>
                </div>
                <div className={(screenShow === 'register' || screenShow === 'employerReg' || screenShow === 'workerReg') ? s.rightSideReg : s.rightSide} >
                    <div className={s.quaterRound}></div>
                </div>
            </div>
        </>
    )
}

export default Entrance;
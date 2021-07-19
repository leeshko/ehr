import s from './modalBIN.module.css';
import SmallButton from './SmallButton';
import React, { useState } from 'react'

const ModalECP = ({ showError, setShowError}) => {

    const regexpBIN = /^[0-9]{12}$/;

    const isBinPattern = (e) => {

        let result = regexpBIN.test(e.target.value);
        e.target.onblur = function () {
            if (result) {
                setShowError(false);
            } else {
                setShowError(true);
            }
        };
        e.target.onfocus = function () {
            setShowError(false);
        };
    }

    return (
        <>
            <div className={s.modalContainer}>
                <div className={s.inputBlock}>
                    <form className={s.inputWidth}>
                        <label className={s.inputWidth}>
                            <div className={s.labelName}>БИН/ИИН</div>
                            <input className={showError ? s.inputFieldError : s.inputField} placeholder='Введите 12 цифр' type={'number'}
                                name="BIN"
                                onChange={(e) => {
                                    isBinPattern(e)}}
                            />
                        </label>

                        <label>
                            <div className={s.labelName}>Пароль</div>
                            <input className={s.inputField} placeholder='Введите свой пароль' type="password" name="password" />
                        </label>
                    </form>

                    <div className={s.forgetPass}>Забыли пароль?</div>
                    <div className={s.buttonPosition}>
                        <SmallButton>
                            <p>Войти в кабинет</p>
                        </SmallButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalECP;
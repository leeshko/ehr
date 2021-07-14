import React, {useState} from 'react'
import s from './modalBIN.module.css';
import SmallButton from './SmallButton';
import Checkbox from './Checkbox';
import PasswordModal from './PasswordModal';


const EmployerRegScreen = () => {

    const [showEmail, setShowEmail] = useState(false);
    const [showPassModal, setShowPassModal] = useState(false);

    const displayEmail = (e) => {
        setShowEmail(e.target.checked);
    }

    const modalShow = () => {
        setShowPassModal(!showPassModal)
    }

    return (
        <>
            <div className={s.modalContainer}>
                <div className={s.inputBlock}>
                    <form>
                        <label>
                            <div className={s.labelName}>БИН/ИИН</div>
                            <input className={s.inputField} placeholder='Введите 12 цифр' type="number" maxlength="8" name="BIN" />
                        </label>

                        <label>
                            <div className={s.labelName}>Полное наименование</div>
                            <input className={s.inputFieldAuto} placeholder='Заполняется автоматически после ввода БИН/ИИН' disabled type="text" name="name" />
                        </label>

                        <label>
                            <div className={s.labelName}></div>
                            <div className={s.checkboxRow}>
                                <div className={s.labelName}>Телефон</div>
                                <Checkbox displayEmail={displayEmail}/>
                                <div className={s.labelName}>E-mail</div>
                            </div>
                            <input className={s.inputField} placeholder={!showEmail ? '+7 (_ _ _) - _ _ _ - _ _ - _ _' : 'e-mail'} type="number" name="number" />
                        </label>
                        <label>
                            
                            {showPassModal ? <PasswordModal /> : null}
                            <div className={s.labelName}>Придумайте пароль 
                                <span className={s.imgInfo} onClick={modalShow} ></span>
                            </div>
                            <input className={s.inputField} placeholder='Введите свой пароль' type="password" name="password" />
                        </label>

                        <label>

                            {showPassModal ? <PasswordModal /> : null}
                            <div className={s.labelName}>Повторите пароль
                                <span className={s.imgInfo} onClick={modalShow} ></span>
                            </div>
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

export default EmployerRegScreen;
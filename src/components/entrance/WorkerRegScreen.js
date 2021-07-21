import React, {useState} from 'react'
import s from './modalBIN.module.css';
import SelectButton from './SelectButton';
import Checkbox from './Checkbox';
import PasswordModal from './PasswordModal';
import CheckboxSq from './CheckboxSq';
import RegisterBlockEnter from './RegisterBlockEnter';


const WorkerRegScreen = ({assign}) => {

    const screenWidth = window.innerWidth;

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
                            <div className={s.labelName}>ИИН</div>
                            <input className={s.inputField} placeholder='Введите 12 цифр' type="number" maxlength="8" name="BIN" />
                        </label>

                        <label>
                            <div className={s.labelName}> {screenWidth < 355 ? 'Фамилия, имя и отчество' : 'Фамилия, имя и отчество (если есть)'}</div>
                            <input className={s.inputFieldAuto} placeholder={screenWidth < 355 ? 'Заполняется автоматически'
                                : 'Заполняется автоматически после ввода БИН/ИИН'}
                                disabled type="text" name="name" />
                        </label>

                        <label>
                            <div className={s.labelName}></div>
                            <div className={s.checkboxRow}>
                                <div className={s.labelName}>Телефон</div>
                                <Checkbox displayEmail={displayEmail}/>
                                <div className={s.labelName}>E-mail</div>
                            </div>
                            <input className={s.inputField} placeholder={!showEmail ? '+7 (_ _ _) - _ _ _ - _ _ - _ _' : 'example@gmail.com'} type="number" name="number" />
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
                            <input className={s.inputField} placeholder='ABab1234' type="password" name="password" />
                        </label>
                    </form>
                        <CheckboxSq>
                        <p>Согласен/на <a href="#" className={s.agreement}>с пользовательским соглашением</a> и даю согласие на сбор и обработку своих персональных данных</p>
                        </CheckboxSq>
                        <a></a>
                    <div className={s.buttonPosition}>
                        <SelectButton
                            communication={showEmail ? 'email' : 'phone'}
                            assign={assign}
                            job={'employer'}
                        >

                            <p>Подписать ЭЦП и продолжить</p>
                        </SelectButton>
                    </div>
                    <RegisterBlockEnter />
                </div>
            </div>
        </>
    )
}

export default WorkerRegScreen;
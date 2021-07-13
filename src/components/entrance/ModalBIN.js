import s from './modalBIN.module.css';
import SmallButton from './SmallButton';

const ModalECP = ({ closeModal }) => {
    return (
        <>


            <div className={s.modalContainer}>



                <div className={s.inputBlock}>
                    <form>
                        <label>
                            <div className={s.labelName}>БИН/ИИН</div>
                            <input className={s.inputField} placeholder='Введите 12 цифр' type="text" name="BIN" />
                        </label>

                        <label>
                            <div className={s.labelName}>Пароль</div>
                            <input className={s.inputField} placeholder='Введите свой пароль' type="text" name="password" />
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
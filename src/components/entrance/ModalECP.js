import s from './modalECP.module.css';
import SmallButton from './SmallButton';

const ModalECP = ({ closeModal }) => {
    return (
        <>
            <div className={s.modalFrame}></div>
            <div className={s.modal}>
                <span className={s.cross} onClick={closeModal}></span>

                <div className={s.modalContainer}>

                    <div className={s.modalText}>Введите пароль к ЭЦП</div>

                    <div className={s.inputBlock}>
                        <form>
                            <label className={s.labelName}>
                                Пароль
                                <input className={s.inputField} placeholder='Введите ваш пароль к ЭЦП' type="text" name="name" />
                            </label>

                        </form>

                    </div>
                    <div className={s.buttonsRaw}>
                        <div className={s.btnNotActive}>
                            <span>Отмена</span>
                        </div>

                        <SmallButton>
                            <p>Далее</p>
                        </SmallButton>
                    </div>


                </div>
            </div>
        </>
    )
}

export default ModalECP;
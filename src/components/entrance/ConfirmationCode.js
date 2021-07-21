import s from './modalBIN.module.css';
import SmallButton from './SmallButton';

const ConfirmationCode = ({ children, text }) => {

    return (
        <>
            <div className={s.modalContainer}>
                <div className={s.inputBlock}>
                    <h3>{children}</h3>
                    <form>
                        <label>
                            <div className={s.labelName}>{text}</div>
                            <div className={s.codeField}>
                                <input className={s.inputFieldSmall} placeholder='1234' type="number" name="BIN" />
                                <SmallButton 
                                    width={{width: '180px'}}
                                >
                                    <p>Подтвердить и войти</p>
                                </SmallButton>

                            </div>
                        </label>
                        <div className={s.labelName}>Выслать код повторно через 29 c</div>     
                    </form> 
                </div>
            </div>
        </>
    )
}

export default ConfirmationCode;
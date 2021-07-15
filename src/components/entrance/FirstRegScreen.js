import SmallButton from "./SmallButton";
import s from './firstRegScreen.module.css';


const FirstRegScreen = ({ goToEmployer, goToWorker }) => {

    return (
        <div className={s.buttonBlock} >
            <SmallButton >
                <div className={s.buttonInside} onClick={goToEmployer}>
                    <p> Я - работодатель</p>
                </div>
            </SmallButton>

            <SmallButton >
                <div className={s.buttonInside} onClick={goToWorker}>
                    <p>Я - работник</p>

                </div>

            </SmallButton>
        </div>
    )
}

export default FirstRegScreen;
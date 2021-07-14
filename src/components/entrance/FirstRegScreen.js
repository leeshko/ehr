import SmallButton from "./SmallButton";
import s from './firstRegScreen.module.css';


const FirstRegScreen = ({ goToEmployer }) => {

    return (
        <div className={s.buttonBlock} onClick={goToEmployer}>
        <SmallButton >
            Я - работодатель
        </SmallButton>

        <SmallButton>
            Я - работник
        </SmallButton>
</div>
    )
}

export default FirstRegScreen;
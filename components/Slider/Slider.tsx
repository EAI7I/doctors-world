import s from "./Slider.module.sass";

import { useState } from "react";
import { Slide } from "../../interfaces/slide";


export const Slider = () => {

    const slides: Slide[] = [
        {
            title: "Сколиоз",
            src: "/assets/slider/scoliosis.png",
        },
        {
            title: "Ограниченная способность поднимать руки и переносить предметы",
            src: "/assets/slider/limitations.png",
        },
        {
            title: "Нарушения жевания и глотания",
            src: "/assets/slider/violation.png",
        },
        {
            title: "Дыхательная недостаточность/ респираторная дисфункция",
            src: "/assets/slider/breath.png",
        },
        {
            title: "Неспособность бегать, изменение походки",
            src: "/assets/slider/inability-to-run.png",
        },
        {
            title: "Контрактура суставов",
            src: "/assets/slider/joints.png",
        },
        {
            title: "Вывих бедра",
            src: "/assets/slider/hips.png",
        },
        {
            title: "Утомляемость",
            src: "/assets/slider/fatigue.png",
        },
    ];

    const [selected, setSelected] = useState<number | undefined>(undefined);

    const selectedClassName = (id: number): string | undefined => {
        switch (id) {
            case 0:
                return s.card_scoliosis;
            case 1:
                return s.card_limitations;
            case 2:
                return s.card_swallowing;
            case 3:
                return s.card_breathe;
            case 4:
                return s.card_inability;
            case 5:
                return s.card_joints;
            case 6:
                return s.card_hips;
            case 7:
                return s.card_fatigue;
            default:
                return undefined
        }
    };

    return (
        <div className={s.slider}>
            <div className={s.title}>
                <h4 className={s.info}>Сообщает ли один из ваших пациентов о следующих симптомах? </h4>
                <p className={s.description}>(нажмите на любую иконку и узнайте больше)</p>
            </div>
            {/*Desktop*/}
            <div className={s.cards}>
                <div className={s.container}>
                    <div className={s.cards_wrapper}>
                        {slides.map((slide: Slide, key: number) => (
                            <div className={s.angle_wrapper} key={key}>
                                <div className={selectedClassName(key)} onMouseEnter={() => setSelected(key)}
                                     onMouseLeave={() => setSelected(undefined)}>
                                    {selected === key && <h4 className={s.card_description}>{slide.title}</h4>}
                                    <img className={s.card_img} src={slide.src} alt="image"/>
                                    <img className={s.card_rating} src="/assets/slider/plus.png"/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/*Mobile*/}
            <div className={s.cards_mobile}>
                {slides.map((slide: Slide, key: number) => (
                    <div className={s.block} key={key}>
                        <img src={slide.src} alt="image"/>
                        <h4 className={s.text}>{slide.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
};
import s from "./Card.module.sass";
import { FC } from "react";

interface CardProps {
    title: string,
    src: string,
    info: string[]
}


export const Card: FC<CardProps> = ({title, src, info}) => {
    return (
        <>
            <div className={title === "Взрослый" ? s.card_adult : s.card_child}>
                <h3 className={s.card_title}>{title}</h3>
                <img src={src} className={s.card_img}/>
                <div className={s.card_info}>
                    {info.map((text: string, key: number) => (
                        <div className={title === "Взрослый" ? s.card_info_adult : s.card_info_child} key={key}>
                            <p className={s.text}>{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};
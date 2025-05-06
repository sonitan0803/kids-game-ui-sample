import styles from "./styles.module.css";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    CharacterLine,
    useCharacterMessage,
    type CharacterMessageProps,
} from "@kids-game-ui/react";

import Hakase from "../../assets/image/character/hakase/character_hakase.png";
import Hakase02 from "../../assets/image/character/hakase/hakase1_smile.png";

export function ExplanationView() {
    const [titleAnimationDone, setTitleAnimationDone] = useState(false);

    const tmp: CharacterMessageProps[] = [
        {
            message:
                "拝啓利用者の皆様\nこのWEBアプリは kids-game-ui を利用したサンプルアプリです。",
            characterImage: Hakase02,
            characterName: "神山",
        },
        {
            characterImage: Hakase02,
            message: "実際に触ってみて、できることを確認してみよう。",
            characterName: "神山",
        },
    ];

    const characterMessage = useCharacterMessage(tmp);

    return (
        <div className={styles.main_container}>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                onAnimationComplete={() => setTitleAnimationDone(true)}
            >
                <img
                    style={{
                        height: "500px",
                        width: "500px",
                        objectFit: "contain",
                        margin: "150px 0 0 200px",
                    }}
                    src={Hakase}
                    alt="博士"
                />
            </motion.div>

            {titleAnimationDone && (
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: "100%" }}
                >
                    <CharacterLine
                        characterName={characterMessage.currentName}
                        isEnd={false}
                        handleMessageClick={characterMessage.handleMessageClick}
                        characterImage={characterMessage.currentImage}
                        width="100%"
                        height="200px"
                        characterNameText="38px"
                        characterLineText="35px"
                        buttonSize="30px"
                    >
                        {characterMessage.currentMessage}
                    </CharacterLine>
                </motion.div>
            )}
        </div>
    );
}

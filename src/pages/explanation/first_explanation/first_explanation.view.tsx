import styles from "./styles.module.css";

import { motion } from "framer-motion";
import { useState } from "react";
import {
    CharacterLine,
    useCharacterMessage,
    YesNoPopup,
    type CharacterMessageProps,
} from "@kids-game-ui/react";

import Hakase from "@/assets/image/character/hakase/character_hakase.png";
import Hakase02 from "@/assets/image/character/hakase/hakase1_smile.png";

export function FirstExplanationView() {
    const [titleAnimationDone, setTitleAnimationDone] = useState(false);

    const firstMessage: CharacterMessageProps[] = [
        {
            message:
                "やあ\nこのWEBアプリは kids-game-ui を利用したサンプルアプリじゃよ",
            characterImage: Hakase02,
            characterName: "神山",
        },
        {
            characterImage: Hakase02,
            message:
                "実際に実装と、このサンプルを通じて\n使い方を学んでいくのじゃ",
            characterName: "神山",
        },
        {
            characterImage: Hakase02,
            message: "早速使い方を学ぶかい?",
            characterName: "神山",
        },
    ];

    const characterMessage = useCharacterMessage(firstMessage);

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

            {titleAnimationDone && characterMessage.isEnd && (
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 1000,
                        width: "auto",
                        marginTop: 0,
                    }}
                >
                    <YesNoPopup
                        handleClickNo={() => {
                            window.location.href = "/";
                        }}
                        handleClickYes={() => {
                            window.location.href =
                                "/explanation/first_explanation";
                        }}
                        height="300px"
                        width="500px"
                        fontColor="white"
                        border="5mm ridge rgb(255, 255, 255)"
                    />
                </motion.div>
            )}
        </div>
    );
}

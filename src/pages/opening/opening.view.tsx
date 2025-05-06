import { SelectMenu } from "@kids-game-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

import styles from "./styles.module.css";

interface OpeningViewProps {
    handleClickStart: () => void;
}

export function OpeningView(props: OpeningViewProps) {
    const [titleAnimationDone, setTitleAnimationDone] = useState(false);

    return (
        <div className={styles.main_container}>
            <div className={styles.contents_container}>
                <motion.div
                    style={{ fontFamily: "MadouFont" }}
                    className={styles.title_container}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    onAnimationComplete={() => setTitleAnimationDone(true)}
                >
                    <p className={styles.title}>React Story</p>
                </motion.div>
                {titleAnimationDone && (
                    <motion.div
                        className={styles.menu_container}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <SelectMenu
                            width="100%"
                            height="100%"
                            fontSize="30px"
                            handleClickContinue={() => {}}
                            handleClickOption={() => {}}
                            handleClickStart={props.handleClickStart}
                        />
                    </motion.div>
                )}
            </div>
            <div className={styles.footer_container}>© 2025 Sonitan</div>
        </div>
    );
}

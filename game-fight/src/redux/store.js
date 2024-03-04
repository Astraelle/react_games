import { configureStore } from "@reduxjs/toolkit";
import Jeu from "./jeu";

export default configureStore({
    reducer: {
        jeu: Jeu
    }
})
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const formStyles = (set) => ({
    formStyles: [],
    addFormStyle: (formStyles) => {
        set((state) => ({
            formStyles: [formStyles, ...state.formStyles],
        }))
    },
    removeFormStyle: (formStyles) => {
        set((state) => ({
            formStyles: [formStyles, ...state.formStyles],
        }))
    },

})

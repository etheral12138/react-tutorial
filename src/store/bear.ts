import {create} from 'zustand'

export interface Bears {
    bears: number
}

export const useBearStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state: Bears) => ({bears: state.bears + 1})),
    removeAllBears: () => set({bears: 0}),
}))

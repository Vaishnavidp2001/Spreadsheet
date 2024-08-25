import create from 'zustand';

const useStore = create((set) => ({
  gridData: Array(10).fill(Array(10).fill('')),
  history: [],
  future: [],

  setGridData: (newGridData) => set((state) => {
    const newHistory = [...state.history, state.gridData];
    return {
      gridData: newGridData,
      history: newHistory,
      future: [],
    };
  }),

  undo: () => set((state) => {
    if (state.history.length > 0) {
      const previousGridData = state.history.pop();
      return {
        gridData: previousGridData,
        history: [...state.history],
        future: [state.gridData, ...state.future],
      };
    }
    return state;
  }),

  redo: () => set((state) => {
    if (state.future.length > 0) {
      const nextGridData = state.future.shift();
      return {
        gridData: nextGridData,
        history: [...state.history, state.gridData],
        future: [...state.future],
      };
    }
    return state;
  }),

  handleNew: () => set(() => ({
    gridData: Array(10).fill(Array(10).fill('')),
    history: [],
    future: [],
  })),

  handleOpen: () => {
    // Add file loading logic here
  },

  handleSave: () => {
    // Add file saving logic here
  },
}));

export default useStore;
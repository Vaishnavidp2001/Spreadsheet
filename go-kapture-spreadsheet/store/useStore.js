import create from 'zustand';
const useStore = create((set) => ({
 cells: Array.from({ length: 1000 }, () => ''),
 setCell: (index, value) => set((state) => {
   const newCells = [...state.cells];
   newCells[index] = value;
   return { cells: newCells };
 }),
}));
export default useStore;


// import create from 'zustand';

// const useStore = create((set) => ({
//   gridData: [["A1", "B1"], ["A2", "B2"]], // Initial grid data
//   history: [],
//   future: [],

//   // Actions
//   editCell: (row, col, value) => set((state) => {
//     const newGrid = [...state.gridData];
//     newGrid[row][col] = value;
//     return {
//       gridData: newGrid,
//       history: [...state.history, state.gridData],
//       future: []
//     };
//   }),
//   undo: () => set((state) => {
//     if (state.history.length === 0) return state;
//     const previousState = state.history[state.history.length - 1];
//     return {
//       gridData: previousState,
//       history: state.history.slice(0, -1),
//       future: [state.gridData, ...state.future]
//     };
//   }),
//   redo: () => set((state) => {
//     if (state.future.length === 0) return state;
//     const nextState = state.future[0];
//     return {
//       gridData: nextState,
//       history: [...state.history, state.gridData],
//       future: state.future.slice(1)
//     };
//   }),
//   setGridData: (newData) => set({ gridData: newData }),
// }));

// export default useStore;
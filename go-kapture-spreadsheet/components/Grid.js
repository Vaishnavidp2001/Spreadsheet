// import React from 'react';
// import useStore from '../store/useStore';

// const Grid = () => {
//   const { gridData, setGridData } = useStore();

//   const handleCellChange = (row, col, value) => {
//     const updatedGrid = gridData.map((r, rowIndex) =>
//       rowIndex === row
//         ? r.map((c, colIndex) => (colIndex === col ? value : c))
//         : r
//     );
//     setGridData(updatedGrid);
//   };

//   const renderColumnHeaders = () => {
//     return (
//       <div className="grid grid-cols-11">
//         <div className="border border-gray-300  p-2 font-bold text-center">#</div>
//         {Array(10)
//           .fill('')
//           .map((_, index) => (
//             <div key={index} className="border border-gray-300 bg-green-300 p-2 font-bold text-center hover:bg-green-400">
//               {String.fromCharCode(65 + index)}
//             </div>
//           ))}
//       </div>
//     );
//   };

//   const renderRows = () => {
//     return gridData.map((rowData, rowIndex) => (
//       <div key={rowIndex} className="grid grid-cols-11">
//         <div className="border border-gray-300 bg-green-300 p-2 font-bold text-center hover:bg-green-400">{rowIndex + 1}</div>
//         {rowData.map((cellData, colIndex) => (
//           <input
//             key={`${rowIndex}-${colIndex}`}
//             className="border border-gray-300  p-2 text-center hover:bg-gray-200"
//             type="text"
//             value={cellData}
//             onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
//           />
//         ))}
//       </div>
//     ));
//   };

//   return (
//     <div className="overflow-auto">
//       {renderColumnHeaders()}
//       {renderRows()}
//     </div>
//   );
// };

// export default Grid;



import React from 'react';
import useStore from '../store/useStore';

const Grid = () => {
  const { gridData, setGridData } = useStore();
  
  // Adjust the number of rows and columns independently
  const numberOfRows = 30; // Set the number of rows
  const numberOfColumns = 26; // Set the number of columns

  const handleCellChange = (row, col, value) => {
    const updatedGrid = gridData.map((r, rowIndex) =>
      rowIndex === row
        ? r.map((c, colIndex) => (colIndex === col ? value : c))
        : r
    );
    setGridData(updatedGrid);
  };

  const renderColumnHeaders = () => {
    return (
      <div className="sticky top-0 bg-white z-10 grid" style={{ gridTemplateColumns: `repeat(${numberOfColumns + 1}, minmax(100px, 1fr))` }}>
        <div className="border border-gray-300 p-2 font-bold text-center">#</div>
        {Array(numberOfColumns)
          .fill('')
          .map((_, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-green-300 p-2 font-bold text-center  hover:bg-green-400"
            >
              {String.fromCharCode(65 + index)}
            </div>
          ))}
      </div>
    );
  };

  const renderRows = () => {
    return Array(numberOfRows).fill('').map((_, rowIndex) => (
      <div key={rowIndex} className="grid" style={{ gridTemplateColumns: `repeat(${numberOfColumns + 1}, minmax(100px, 1fr))` }}>
        <div className="border border-gray-300 bg-green-300 p-2 font-bold text-center hover:bg-green-400">
          {rowIndex + 1}
        </div>
        {Array(numberOfColumns).fill('').map((_, colIndex) => (
          <input
            key={`${rowIndex}-${colIndex}`}
            className="border border-gray-300 p-2 text-center hover:bg-gray-200"
            type="text"
            value={gridData[rowIndex]?.[colIndex] || ''}
            onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
          />
        ))}
      </div>
    ));
  };

  return (
    <div className="overflow-auto h-[calc(100vh-100px)] w-full">
      <div className="min-w-100">
        {renderColumnHeaders()}
        {renderRows()}
      </div>
    </div>
  );
};

export default Grid;
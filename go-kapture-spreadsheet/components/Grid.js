
import { useRef } from 'react';
import useStore from '../store/useStore';

const Grid = () => {
  const { cells, setCell } = useStore();
  const inputRefs = useRef([]);
  
  const numRows = 50; // Number of rows (excluding header)
  const numCols = 10; // Number of columns (excluding header)

  const handleChange = (index, event) => {
    setCell(index, event.target.value);
  };

  return (
    <div className="overflow-auto">
      <div className="relative">
        <div className="sticky top-0 left-0 z-10  style={{ backgroundColor: '#e89980' }}">
          <div className="grid grid-cols-11">
            <div className="bg-gray-100 border border-gray-300 "></div>
            {/* Column Headers */}
            {Array.from({ length: numCols }).map((_, colIndex) => (
              <div
                key={`col-header-${colIndex}`}
                className="bg-green-300 text-center border border-gray-500 p-2 font-semibold hover:!bg-green-500">
                {String.fromCharCode(65 + colIndex)} {/* A, B, C, etc. */}
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-11">
          {/* Row Headers and Cells */}
          {Array.from({ length: numRows }).map((_, rowIndex) => (
            <>
              <div
                key={`row-header-${rowIndex}`}
                className="sticky left-0 z-10 bg-green-300 text-center border border-gray-500 p-2 font-semibold hover:!bg-green-500">

                {rowIndex + 1} {/* 1, 2, 3, etc. */}
              </div>
              {Array.from({ length: numCols }).map((_, colIndex) => (
                <input
                  key={`cell-${rowIndex}-${colIndex}`}
                  type="text"
                  value={cells[rowIndex * numCols + colIndex]}
                  onChange={(event) =>
                    handleChange(rowIndex * numCols + colIndex, event)
                  }
                  className="border border-gray-300 text-center p-2 focus:outline-none focus:border-blue-500 hover:!bg-gray-200"
                  style={{
                    minWidth: '80px',
                    height: '40px',
                    boxSizing: 'border-box',
                    backgroundColor: '#ffffff',
                  }}
                  ref={(el) => (inputRefs.current[rowIndex * numCols + colIndex] = el)}
                />
              ))}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Grid;




// import React, { useRef } from 'react';
// import useStore from '../store/useStore';

// const Grid = () => {
//   const { gridData, editCell } = useStore();
//   const inputRefs = useRef([]);
  
//   // Calculate number of rows and columns from gridData
//   const numRows = gridData.length; // Number of rows
//   const numCols = gridData[0] ? gridData[0].length : 0; // Number of columns
  
//   const handleChange = (rowIndex, colIndex, event) => {
//     editCell(rowIndex, colIndex, event.target.value);
//   };

//   return (
//     <div className="overflow-auto">
//       <div className="relative">
//         <div className="sticky top-0 left-0 z-10" style={{ backgroundColor: '#e89980' }}>
//           <div className="grid grid-cols-11">
//             <div className="bg-gray-100 border border-gray-300 "></div>
//             {/* Column Headers */}
//             {Array.from({ length: numCols }).map((_, colIndex) => (
//               <div
//                 key={`col-header-${colIndex}`}
//                 className="bg-green-300 text-center border border-gray-500 p-2 font-semibold hover:!bg-green-500">
//                 {String.fromCharCode(65 + colIndex)} {/* A, B, C, etc. */}
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="grid grid-cols-11">
//           {/* Row Headers and Cells */}
//           {gridData.map((row, rowIndex) => (
//             <React.Fragment key={`row-${rowIndex}`}>
//               <div
//                 key={`row-header-${rowIndex}`}
//                 className="sticky left-0 z-10 bg-green-300 text-center border border-gray-500 p-2 font-semibold hover:!bg-green-500">
//                 {rowIndex + 1} {/* 1, 2, 3, etc. */}
//               </div>
//               {row.map((cell, colIndex) => (
//                 <input
//                   key={`cell-${rowIndex}-${colIndex}`}
//                   type="text"
//                   value={cell}
//                   onChange={(event) =>
//                     handleChange(rowIndex, colIndex, event)
//                   }
//                   className="border border-gray-300 text-center p-2 focus:outline-none focus:border-blue-500 hover:!bg-gray-200"
//                   style={{
//                     minWidth: '80px',
//                     height: '40px',
//                     boxSizing: 'border-box',
//                     backgroundColor: '#ffffff',
//                   }}
//                   ref={(el) => (inputRefs.current[rowIndex * numCols + colIndex] = el)}
//                 />
//               ))}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Grid;
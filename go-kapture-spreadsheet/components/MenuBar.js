
import React, { useState } from 'react';

const MenuBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    if (openDropdown === menu) {
      setOpenDropdown(null); // Close dropdown if already open
    } else {
      setOpenDropdown(menu); // Open the clicked dropdown
    }
  };

  const closeDropdown = () => setOpenDropdown(null);

  const menuOptions = {
    File: ["New", "Open", "Save", "Save As", "Print"],
    Edit: ["Undo", "Redo", "Cut", "Copy", "Paste", "Find and Replace"],
    View: ["Zoom In", "Zoom Out", "Full Screen", "Gridlines"],
    Insert: ["Image", "Chart", "Hyperlink", "Function"],
    Format: ["Bold", "Italic", "Underline", "Text Color", "Cell Color"],
    Data: ["Sort Ascending", "Sort Descending", "Filter", "Data Validation"],
    Tools: ["Spelling", "Script Editor", "Accessibility Settings"],
  };

  return (
    <div className="relative z-50">
      <div className="flex items-center justify-between bg-green-500 p-2 mb-3 border-b border-black-300 text-white">
        {/* Menu options */}
        <div className="flex space-x-4">
          {Object.keys(menuOptions).map((menu) => (
            <div key={menu} className="relative">
              <button
                onClick={() => toggleDropdown(menu)}
                className="text-m font-semibold hover:underline"
              >
                {menu}
              </button>
              {openDropdown === menu && (
                <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
                  {menuOptions[menu].map((option, index) => (
                    <button
                      key={index}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-green-200"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search bar */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded p-1 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="text-sm font-semibold text-white border border-black bg-violet-600 px-1 hover:underline">
            Search
          </button>
        </div>
      </div>

      {/* Close dropdown when clicking outside */}
      {openDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeDropdown}
        />
      )}
    </div>
  );
};

export default MenuBar;


// import React, { useState } from 'react';
// import useStore from '../store/useStore';

// const MenuBar = () => {
//   const { gridData, setGridData, undo, redo } = useStore();
//   const [searchTerm, setSearchTerm] = useState('');

//   // Function to reset grid to initial state
//   const handleNew = () => {
//     const initialGridData = [["", ""], ["", ""]]; // Default 2x2 grid
//     setGridData(initialGridData);
//   };

//   // Function to open and load data (stub function for now)
//   const handleOpen = () => {
//     // Implement logic to load grid data from a file or source
//     const loadedData = [["A1", "B1"], ["A2", "B2"]]; // Example data
//     setGridData(loadedData);
//   };

//   // Function to save the current grid data (stub function for now)
//   const handleSave = () => {
//     // Implement logic to save grid data to a file or source
//     console.log("Grid data saved:", gridData);
//   };

//   const handleSearch = () => {
//     const lowerCaseTerm = searchTerm.toLowerCase();
//     const filteredGrid = gridData.map(row =>
//       row.map(cell => (cell.toLowerCase().includes(lowerCaseTerm) ? cell : ''))
//     );
//     setGridData(filteredGrid);
//   };

//   return (
//     <div className="flex items-center justify-between bg-green-500 p-2 mb-3 border-b border-black-300 text-white">
//       {/* Menu options */}
//       <div className="flex space-x-4">
//         <div className="dropdown">
//           <button className="text-m font-semibold hover:underline">File</button>
//           <div className="dropdown-content">
//             <button onClick={handleNew}>New</button>
//             <button onClick={handleOpen}>Open</button>
//             <button onClick={handleSave}>Save</button>
//           </div>
//         </div>
//         <div className="dropdown">
//           <button className="text-m font-semibold hover:underline">Edit</button>
//           <div className="dropdown-content">
//             <button onClick={undo}>Undo</button>
//             <button onClick={redo}>Redo</button>
//           </div>
//         </div>
//         <button className="text-m font-semibold hover:underline">View</button>
//         <button className="text-m font-semibold hover:underline">Insert</button>
//         <button className="text-m font-semibold hover:underline">Format</button>
//         <button className="text-m font-semibold hover:underline">Data</button>
//         <button className="text-m font-semibold hover:underline">Tools</button>
//       </div>

//       {/* Search bar */}
//       <div className="flex items-center space-x-2">
//         <input
//           type="text"
//           placeholder="Search"
//           className="border border-gray-300 rounded p-1 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button
//           className="text-sm font-semibold text-white border border-black bg-violet-600 px-1 hover:underline"
//           onClick={handleSearch}
//         >
//           Search
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MenuBar;
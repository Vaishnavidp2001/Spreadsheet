
// import React, { useState } from 'react';

// const MenuBar = () => {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const toggleDropdown = (menu) => {
//     if (openDropdown === menu) {
//       setOpenDropdown(null); // Close dropdown if already open
//     } else {
//       setOpenDropdown(menu); // Open the clicked dropdown
//     }
//   };

//   const closeDropdown = () => setOpenDropdown(null);

//   const menuOptions = {
//     File: ["New", "Open", "Save", "Save As", "Print"],
//     Edit: ["Undo", "Redo", "Cut", "Copy", "Paste", "Find and Replace"],
//     View: ["Zoom In", "Zoom Out", "Full Screen", "Gridlines"],
//     Insert: ["Image", "Chart", "Hyperlink", "Function"],
//     Format: ["Bold", "Italic", "Underline", "Text Color", "Cell Color"],
//     Data: ["Sort Ascending", "Sort Descending", "Filter", "Data Validation"],
//     Tools: ["Spelling", "Script Editor", "Accessibility Settings"],
//   };

//   return (
//     <div className="relative z-50">
//       <div className="flex items-center justify-between bg-green-500 p-2 mb-3 border-b border-black-300 text-white">
//         {/* Menu options */}
//         <div className="flex space-x-4">
//           {Object.keys(menuOptions).map((menu) => (
//             <div key={menu} className="relative">
//               <button
//                 onClick={() => toggleDropdown(menu)}
//                 className="text-m font-semibold hover:underline"
//               >
//                 {menu}
//               </button>
//               {openDropdown === menu && (
//                 <div className="absolute left-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
//                   {menuOptions[menu].map((option, index) => (
//                     <button
//                       key={index}
//                       className="block w-full text-left px-4 py-2 text-sm hover:bg-green-200"
//                     >
//                       {option}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Search bar */}
//         <div className="flex items-center space-x-2">
//           <input
//             type="text"
//             placeholder="Search"
//             className="border border-gray-300 rounded p-1 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <button className="text-sm font-semibold text-white border border-black bg-violet-600 px-1 hover:underline">
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Close dropdown when clicking outside */}
//       {openDropdown && (
//         <div
//           className="fixed inset-0 z-40"
//           onClick={closeDropdown}
//         />
//       )}
//     </div>
//   );
// };

// export default MenuBar;


import React, { useState, useRef, useEffect } from 'react';
import useStore from '../store/useStore';

const MenuBar = () => {
  const { undo, redo, handleNew, handleOpen, handleSave } = useStore();

  // State to manage dropdown visibility
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Refs for dropdown containers
  const fileRef = useRef(null);
  const editRef = useRef(null);
  const viewRef = useRef(null);
  const insertRef = useRef(null);
  const formatRef = useRef(null);
  const dataRef = useRef(null);
  const toolsRef = useRef(null);

  // Handle dropdown click
  const handleDropdownClick = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Handle clicks outside of dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        fileRef.current &&
        !fileRef.current.contains(event.target) &&
        editRef.current &&
        !editRef.current.contains(event.target) &&
        viewRef.current &&
        !viewRef.current.contains(event.target) &&
        insertRef.current &&
        !insertRef.current.contains(event.target) &&
        formatRef.current &&
        !formatRef.current.contains(event.target) &&
        dataRef.current &&
        !dataRef.current.contains(event.target) &&
        toolsRef.current &&
        !toolsRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between bg-green-500 p-2 mb-3 border-b border-black text-white">
      <div className="flex space-x-4">
        {/* File Dropdown */}
        <div className="relative" ref={fileRef}>
          <button
            className="text-m font-semibold hover:underline"
            onClick={() => handleDropdownClick('file')}
          >
            File
          </button>
          {activeDropdown === 'file' && (
            <div className="absolute w-40 bg-white text-black mt-2 p-2 z-50 rounded shadow-lg">
              <button onClick={handleNew} className="block p-2 hover:text-blue-700">New</button>
              <button onClick={handleOpen} className="block p-2 hover:text-blue-700">Open</button>
              <button onClick={handleSave} className="block p-2 hover:text-blue-700">Save</button>
            </div>
          )}
        </div>

        {/* Edit Dropdown */}
        <div className="relative "  ref={editRef}>
          <button
            className="text-m font-semibold hover:underline"
            onClick={() => handleDropdownClick('edit')}
          >
            Edit
          </button>
          {activeDropdown === 'edit' && (
            <div className="absolute w-40 bg-white text-black mt-2 p-2 z-50 rounded shadow-lg">
              <button onClick={undo} className="block p-2 hover:text-blue-700">Undo</button>
              <button onClick={redo} className="block p-2 hover:text-blue-700">Redo</button>
            </div>
          )}
        </div>

        {/* View Dropdown */}
        <div className="relative" ref={viewRef}>
          <button
            className="text-m font-semibold hover:underline"
            onClick={() => handleDropdownClick('view')}
          >
            View
          </button>
          {activeDropdown === 'view' && (
            <div className="absolute w-40 bg-white text-black mt-2 p-2 z-50 rounded shadow-lg">
              <button className="block p-2 hover:text-blue-700">Zoom In</button>
              <button className="block p-2 hover:text-blue-700">Zoom Out</button>
              <button className="block p-2 hover:text-blue-700">Full Screen</button>
            </div>
          )}
        </div>

        {/* Insert Dropdown */}
        <div className="relative" ref={insertRef}>
          <button
            className="text-m font-semibold hover:underline"
            onClick={() => handleDropdownClick('insert')}
          >
            Insert
          </button>
          {activeDropdown === 'insert' && (
            <div className="absolute w-40 bg-white text-black mt-2 p-2 z-50 rounded shadow-lg">
              <button className="block p-2 hover:text-blue-700">Row</button>
              <button className="block p-2 hover:text-blue-700">Column</button>
              <button className="block p-2 hover:text-blue-700">Image</button>
            </div>
          )}
        </div>

        {/* Format Dropdown */}
        <div className="relative" ref={formatRef}>
          <button
            className="text-m font-semibold hover:underline"
            onClick={() => handleDropdownClick('format')}
          >
            Format
          </button>
          {activeDropdown === 'format' && (
            <div className="absolute w-40 bg-white text-black mt-2 p-2 z-50 rounded shadow-lg">
              <button className="block p-2 hover:text-blue-700">Bold</button>
              <button className="block p-2 hover:text-blue-700">Italic</button>
              <button className="block p-2 hover:text-blue-700">Underline</button>
            </div>
          )}
        </div>

        {/* Data Dropdown */}
        <div className="relative" ref={dataRef}>
          <button
            className="text-m font-semibold hover:underline"
            onClick={() => handleDropdownClick('data')}
          >
            Data
          </button>
          {activeDropdown === 'data' && (
            <div className="absolute w-40 bg-white text-black mt-2 p-2 z-50 rounded shadow-lg">
              <button className="block p-2 hover:text-blue-700">Sort Ascending</button>
              <button className="block p-2 hover:text-blue-700">Sort Descending</button>
              <button className="block p-2 hover:text-blue-700">Filter</button>
            </div>
          )}
        </div>

        {/* Tools Dropdown */}
        <div className="relative" ref={toolsRef}>
          <button
            className="text-m font-semibold hover:underline"
            onClick={() => handleDropdownClick('tools')}
          >
            Tools
          </button>
          {activeDropdown === 'tools' && (
            <div className="absolute w-40 bg-white text-black mt-2 p-2 z-50 rounded shadow-lg">
              <button className="block p-2 hover:text-blue-700">Spelling Check</button>
              <button className="block p-2 hover:text-blue-700">Script Editor</button>
            </div>
          )}
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded p-1 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
        />
        <button className="text-sm font-semibold text-white border border-black bg-violet-600 px-2 py-1 hover:underline">
          Search
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
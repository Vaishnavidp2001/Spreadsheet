// // import Head from 'next/head';
// // import Grid from '../components/Grid';

// // export default function Home() {
// //   return (
// //     <div className="container mx-auto">
// //       <Head>
// //         <title>Spreadsheet App</title>
// //         <meta name="description" content="A simple spreadsheet application built with Next.js and Tailwind CSS" />
// //       </Head>
// //       <main className="flex flex-col items-center">
// //         <h1 className="text-2xl font-bold mb-4">Spreadsheet Application</h1>
// //         <Grid />
// //       </main>
// //     </div>
// //   );
// // }



// import Head from 'next/head';
// import MenuBar from '../components/MenuBar';
// import Grid from '../components/Grid';

// export default function Home() {
//   return (
//     <div>
//       <Head>
//         <title>Spreadsheet App</title>
//         <meta name="description" content="A simple spreadsheet application built with Next.js and Tailwind CSS" />
//       </Head>

//       {/* Menu Bar */}
//       <h1 className="text-2xl font-bold mb-4 text-center" >Spreadsheet Application</h1>
//       <MenuBar />

//       {/* Main Content */}
//       <div className="container mx-auto p-4">
//         <main className="flex flex-col items-center">
//           <Grid />
//         </main>
//       </div>
//     </div>
//   );
// }


import { useState } from 'react';
import Head from 'next/head';
import MenuBar from '../components/MenuBar';
import Grid from '../components/Grid';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="h-screen flex flex-col">
      <Head>
        <title>Spreadsheet App</title>
        <meta name="description" content="A simple spreadsheet application with search functionality." />
      </Head>

      {/* Menu Bar */}
      <h1 className="text-2xl font-bold mb-4 text-center" >Spreadsheet Application</h1>
      <MenuBar />


      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Grid searchQuery={searchQuery} />
      </div>
    </div>
  );
}




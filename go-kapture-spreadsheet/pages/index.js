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




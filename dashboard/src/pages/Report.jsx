import React, { useState } from 'react'
import Papa from 'papaparse';
import axios from 'axios';

const Report = () => {
  const [jsonData, setJsonData] = useState(null);

  const HandleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        delimiter: ",",
        skipEmptyLines: true,
        complete: (result) => {
          const formatData = result.data.map((row) => {
            return { id: row[0], name: row[1] };
          });
          setJsonData(formatData);
        },
        error: (error) => {
          console.error("Error Parsing CSV file :", error);
        }
      })
    }
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('/upload-csv', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('File uploaded and converted succesfully!');
    } catch (error) {
      console.log('Error uploading file :', error);
    }
  };

  const handleSaveJson = async () => {
    if (!jsonData) return;

    try {
      await axios.post('/upload-csv', { data: jsonData });
      alert('JSON file saved successfully on the server!');
    } catch (error) {
      console.error('Error saving JSON file: ', error);
    }
  }

  return (
    <div className='p-8'>
      <div>
        <h1>Unggal File CSV</h1>
        <input type='file' accept='.csv' onChange={HandleFileUpload} />
        <button
              onClick={handleSaveJson}
              className='border rounded p-1 cursor-pointer hover:scale-105 hover:bg-black hover:text-white transition-all duration-300'
            >
              Simpan sebagai JSON di Server
            </button>
        {jsonData && (
          <div className='mt-4 border bg-green-100'>
            <div className='m-2'>
              <h2>Data JSON</h2>
              <pre>{JSON.stringify(jsonData, null, 2)}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Report;
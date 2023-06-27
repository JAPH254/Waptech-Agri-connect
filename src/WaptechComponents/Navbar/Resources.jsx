import React from 'react';

function Resources() {
    const handleDownload = () => {
        // Create a new file Blob object
        const file = new Blob(['file content'], { type: 'text/plain;charset=utf-8' });
        // Use the FileSaver library to save the file
        saveAs(file, 'filename.txt');
      };
      
    return (  
              <div className='Resources' style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <h2>Agriconnect</h2>
                <div style={{}}>
                <button onClick={handleDownload}>Downloads</button>
                </div>
              </div> 
    );
}

export default Resources;
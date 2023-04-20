import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import html2pdf from 'html2pdf.js';

import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('# Texts Here ');
  useEffect(() =>{
    document.title='Markdown Previewer';
  },[]);
  
  function handleChange(event) {
    setMarkdown(event.target.value);
  }

  function exportPDF() {
    const element = document.getElementById('preview');
    const opt = {
      margin:       1,
      filename:     'markdown-preview.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  }

  return (
    <center>
      <div className="bg" style={{ background: 'linear-gradient(45deg, #992a70, #f45c5d, #e8a87c)' }}>
        <header>
          <h1>Markdown Previewer</h1>
        </header>

        <br />

        <div className="container">
          <div className="textare">
            <textarea onChange={handleChange} value={markdown} />
          </div>
          <h2>Output :</h2>
          <div className="preview" id="preview">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
          <button id="exp" onClick={exportPDF}>Export</button>
          <hr id='hh'></hr>
          <h3 id='footer'>Click on export to get your output as pdf</h3>
        </div>
      </div>
    </center>
  );
}

export default App;
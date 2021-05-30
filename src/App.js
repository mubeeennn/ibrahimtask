import logo from './logo.svg';
import {useState, useRef, useCallback} from 'react';
import './App.css';
import {AiOutlineCloudUpload} from 'react-icons/ai'
import {useDropzone} from 'react-dropzone';
import Plagiarism from './pages/Plagiarism';
import Result from './pages/Result.jsx';

function App() {
  
  return (
    <Result/>
  );
}

export default App;

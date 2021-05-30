import {useState, useRef, useCallback} from 'react';
import './style.css';
import {AiOutlineCloudUpload} from 'react-icons/ai'
import {useDropzone} from 'react-dropzone';

function Plagiarism() {
  const [file, setFile] = useState({});
  
  const onDrop = useCallback((acceptedFiles) => {
    setFile({name:acceptedFiles[0].name,
    path:acceptedFiles[0].path})
    console.log(file)
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})
  return (
    <div className="App" >
      <div style={{border:"2px solid #94a0a8", width:"100%", color:"#07c2fe"}}>
        <h2>LOGO</h2>
      </div>
      <div className="borderContainer" style={{width:"40%"}}>
        <div className="container" {...getRootProps()}>
          <div>
            {<AiOutlineCloudUpload color="#94a0a8" size={70}/>}
            <h2 className="grey">Drag&Drop files here</h2>
            <h6 className="grey">or</h6>
          </div>
          <input {...getInputProps()} />
            <button   style={{border:"2px solid #07c2fe", backgroundColor:"white", color:"#07c2fe", borderRadius:"5px", width:"200px", height:"50px", fontWeight:"700"}}>
              Browse Files
            </button>
          </div>
        </div>
        <div style={{border:"2px solid #94a0a8", width:"100%", color:"#07c2fe", textAlign:"center"}}>
           <h2>Footer</h2>
        </div>
    </div>
  );
}

export default Plagiarism;

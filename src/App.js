import React, { useRef, useState } from 'react';
import './styles/global.css';

import Gallery from './components/Gallery';
import Navbar from './components/Navbar';

const App = () => {

    const [name, setName] = useState("Luis")

    const [languages, setLanguages] = useState([
        "PHP", "Java", "JavaScript", "Python", "C#"
    ])

    const [selectedLang, setSelectedLang] = useState("Java");

    let inpurtSearchRef = useRef();
    return (
        <>
            <Navbar />
            <h1>REACT APP</h1>
            <div className="w-50 m-5">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control mb-3" />

                <input type="text" ref={inpurtSearchRef} className="form-control mb-3" />
                <button className='btn btn-primary' onClick={() => {
                    console.log(inpurtSearchRef.current.value)
                    inpurtSearchRef.current.type = "password";
                }}>
                    Search
                </button>
                <select value={selectedLang} onChange={(e) => setSelectedLang(e.target.value)} className="form-select mb-3">
                    <option value="">SELECCIONE LANG</option>
                    {
                        languages.map((lang) => <option key={lang} value={lang}>{lang}</option>)
                    }
                </select>
            </div>

            <Gallery />
        </>
    )
}

export default App;
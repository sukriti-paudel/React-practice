import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Translator = () => {
    const [to, setTo] = useState('es'); // Default target language
    const [from, setFrom] = useState('en'); // Default source language
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const response = await axios.get('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', {
                    headers: {
                        'x-rapidapi-key': '09c2b81b34msh6c14cf0c34b1c8dp1baf93jsn51c0cc357c3e', // Replace with your actual key
                        'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
                    }
                });
                setLanguages(response.data.data.languages);
            } catch (error) {
                console.error('Error fetching languages:', error);
            }
        };
    
        fetchLanguages();
    }, []);

    const handleTranslate = async () => {
        // Create URL-encoded form data
        const data = new URLSearchParams();
        data.append('q', input);
        data.append('source', from);
        data.append('target', to);

        const options = {
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
                'x-rapidapi-key': '09c2b81b34msh6c14cf0c34b1c8dp1baf93jsn51c0cc357c3e', // Replace with your actual key
                'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
                'Content-Type': 'application/x-www-form-urlencoded', // Set the correct content type
            },
            data: data.toString() // Convert data to string
        };

        try {
            const response = await axios.request(options);
            setOutput(response.data.data.translations[0].translatedText);
        } catch (error) {
            console.error('Error in translation request:', error);
        }
    };

    return (
        <>
            <div className='container' style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                <h2>From</h2>
                <select value={from} onChange={(e) => setFrom(e.target.value)}>
                    {languages.map((lang) => (
                        <option key={lang.language} value={lang.language}>{lang.language}</option>
                    ))}
                </select>
                <h2>To</h2>
                <select value={to} onChange={(e) => setTo(e.target.value)}>
                    {languages.map((lang) => (
                        <option key={lang.language} value={lang.language}>{lang.language}</option>
                    ))}
                </select>
            </div>
            <div>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    cols='50'
                    rows='8'
                    placeholder='Enter text to translate...'></textarea>
            </div>
            <div className="divider"/>
            <div>
                <textarea
                    value={output}
                    readOnly
                    cols='50'
                    rows='8'
                    placeholder='Translated text will appear here...'></textarea>
            </div>
            <button onClick={handleTranslate}>Translate</button>
        </>
    );
};

export default Translator;

import Header from "./components/Header";
import './App.css';
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Words from "./components/Words";
import Hint from "./components/Hint";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Notification } from "./components/Notification";
import { randomWord } from "./components/Randomword";

const types = ['color', 'animal', 'country'];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctlet, setCorrectlet] = useState([]);
  const [wronglet, setWronglet] = useState([]);
  const [hint, setHint] = useState('');
  const [selectedWord, setSelectedWord] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const getRandomWord = async () => {
    const randomType = types[Math.floor(Math.random() * types.length)];
    const word = randomWord(randomType);
    const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error('Error fetching word definition');
      }
      const data = await response.json();
      const definition = data[0].meanings[0].definitions[0].definition;
      const hint = `${definition} (${randomType})`;
      return { word, hint, type: randomType };
    } catch (error) {
      console.log(error);
      return { word, hint: `${randomType}`, type: randomType }; // Fallback hint
    }
  };

  useEffect(() => {
    const fetchWord = async () => {
      const selectedWordObj = await getRandomWord(); // Wait for the word to be fetched
      setSelectedWord(selectedWordObj.word);
      setHint(selectedWordObj.hint);
      setSelectedType(selectedWordObj.type);
    };

    fetchWord();
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      const { key, keyCode } = e;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctlet.includes(letter)) {
            setCorrectlet((currentletters) => [...currentletters, letter]);
          } else {
            Swal.fire({
              icon: 'info',
              text: 'Letter already guessed',
              showConfirmButton: false,
              timer: 1000,
              timerProgressBar: true,
            });
          }
        } else {
          if (!wronglet.includes(letter)) {
            setWronglet((wronglet) => [...wronglet, letter]);
          } else {
            Swal.fire({
              icon: 'info',
              text: 'You have already entered this letter',
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
            });
          }
        }
      }
    };

    if (playable) {
      window.addEventListener('keydown', handleKey);
    }

    return () => window.removeEventListener('keydown', handleKey);
  }, [correctlet, wronglet, playable, selectedWord]);

  const playAgain = async () => {
    setPlayable(true);
    setCorrectlet([]);
    setWronglet([]);
    const selectedWordObj = await getRandomWord(); // Await for the new random word
    setSelectedWord(selectedWordObj.word);
    setHint(selectedWordObj.hint);
    setSelectedType(selectedWordObj.type);
  };

  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wronglet={wronglet} />
        <Words selectedWord={selectedWord} correctlet={correctlet} />
        <WrongLetters wronglet={wronglet} />
      </div>
      <Hint hint={hint} /> {/* Display the hint */}
      <Notification
        correctlet={correctlet}
        wronglet={wronglet}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
        selectedType={selectedType}
      />
    </>
  );
}

export default App;

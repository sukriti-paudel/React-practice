import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from 'react-use-clipboard'
import Swal from 'sweetalert2'
const SpeechText = () => {
    const start = () => SpeechRecognition.startListening({ continuous: true, language: 'en-NEP' })
    const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();
    const [isCopied, setCopied] = useClipboard(transcript)
    if (!browserSupportsSpeechRecognition) {
        return null
    }
    const reset = () => {
        resetTranscript();
    }
    const handlecopy = () => {
        setCopied();
        if (isCopied) {
            Swal.fire("Success!", "Text has been copied to clipboard!", "success")

        }
    }
    return (
        <>
            <div className="container">
                <h2>Speech to Text converter</h2>
                <p>React hook that gives a component access to a transcript of speech picked up from the user's microphone.</p>
                <div className="main-content">
                    {transcript}
                </div>
                <div className="btn-style">
                    <button onClick={handlecopy}>
                        Copy
                    </button>
                    <button onClick={start}>
                        Start Listening
                    </button>
                    <button onClick={SpeechRecognition.stopListening}>
                        Stop listening
                    </button>
                    <button onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
        </>
    )
}

export default SpeechText
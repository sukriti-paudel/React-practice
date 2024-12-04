import React from 'react'

const WrongLetters = ({wronglet}) => {
  return (
    <div className='wrong-letters-container'>
      <div>
        {wronglet.length>0 ? <strong>Wrong letters:</strong>:''}
        <br/>
        {wronglet
        .map((letter,i)=> <span key={i}>{letter}</span>)
        .reduce((prev,curr)=> prev === null ? [curr]:[prev, ',',curr],null
        )}
      </div>
    </div>
  )
}

export default WrongLetters
import React from 'react'

const Words = ({selectedWord, correctlet}) => {

  return (
    <>
    <div className='word'>
    <p style={{fontWeight:'bold',fontSize:20, marginRight:'20px'}}>Word:</p>
      {selectedWord.split('').map((letter,i)=>{
        return(
        <div className='letter'key={i}>
           <span  >
            
            {correctlet.includes(letter) ? letter:''}
          </span>
        </div>
        )
      })

      }
    {/* <div>Hint:</div>
    <div style={{fontSize:25}}>Word to be guessed: _ _ _ _ _ _ _  </div> */}
    </div>
    </>
  )
}

export default Words
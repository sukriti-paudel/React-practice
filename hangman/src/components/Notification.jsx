import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

export const Notification = ({correctlet,wronglet, selectedWord,setPlayable,playAgain , selectedType}) => {
   
   

    const checkwin=()=>{
        if (!selectedWord) return null;
        const hasWon = selectedWord.split('').every(letter => correctlet.includes(letter));
        if (hasWon) return 'win';

        if(wronglet.length===6){
            return 'lose'
        }
        return null
    }
    const declare = () => {
        const status = checkwin();
        if (status === 'win') {
            setPlayable(false);
            Swal.fire({
                icon: 'success',
                title: '🎉🥳',
                text: 'You won!',
                confirmButtonText: 'Play again!'
            }).then(() => {
                // Reset game logic can go here
                playAgain()
               
            });
        } else if (status === 'lose') {
            setPlayable(false);
            Swal.fire({
                icon: 'error',
                title: 'Sorry! you lost',
                text: `The word was: ${selectedWord} `,
                confirmButtonText: 'Play again!'
            }).then(() => {
                // Reset game logic can go here
                playAgain()
                 // Example reset
            });
        }
    };

    useEffect(() => {
        declare();
        
    }, [correctlet, wronglet, selectedWord]);

  return (
    <>
       
    </>
  )
}

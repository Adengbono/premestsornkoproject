import React, { useState }from 'react';
//import FlashcardList from './FlashcardList';
//import Flashcard from '../Components/Flashcard';
import '../App.css'

export default function FlashApp() {
    const [flashcards /*setFlashcards*/] = useState(SAMPLE_FLASHCARDS)
    return (
        <FlashcardList flashcards= {flashcards}/>
    );
}


const SAMPLE_FLASHCARDS=[
    {

        
        id: 1,
        question: 'what is 2 + 2?',
        answer:'4',
        options:[
            '2',
            '3',
            '4',
            '5', 
        ]

},
{
    id: 2,
    question: 'what is 2 + 2?',
    answer:'4',
    options:[
        '2',
        '3',
        '4',
        '5', 
    ]

}
]

function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    return (
        <div
          className={`card ${flip ? 'flip' : ''}`}
          //style={{ height: height }}
          onClick={() => setFlip(!flip)}
        >
          <div className="front" /*ref={frontEl}*/>
            {flashcard.question}
            <div className="flashcard-options">
              {flashcard.options.map(option => {
                return <div className="flashcard-option" key={option}>{option}</div>
              })}
            </div>
          </div>
          <div className="back" /*ref={backEl}*/>{flashcard.answer}</div>
        </div>
      )
    }
    function FlashcardList({ flashcards }) {
        return (
          <div className="card-grid">
            {flashcards.map(flashcard => {
              return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}
          </div>
        )
      }



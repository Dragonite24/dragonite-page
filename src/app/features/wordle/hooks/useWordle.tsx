import { useEffect, useState } from 'react'

import { Line } from '../Line'

import '../styles/wordle.css'

export type UseWordleReturnT = ReturnType<typeof useWordle>

const WORD_LENGTH: number = 5

export const useWordle = () => {
  const [solution, setSolution] = useState<string>('QWEEE')
  const [guesses, setGuesses] = useState(Array(6).fill(''))
  const [currentGuess, setCurrentGuess] = useState<string>('')
  const [isGameOver, setIsGameOver] = useState<boolean | null>(null)

  useEffect(() => {
    const handleType = (event: KeyboardEvent) => {
      if (isGameOver) {
        return
      }

      console.log(event.key)

      if (event.key === 'Enter') {
        console.log(currentGuess.length)

        if (currentGuess.length !== 5) {
          return
        }
        const newGuesses = [...guesses]
        newGuesses[guesses.findIndex((el) => el === '')] = currentGuess
        setGuesses(newGuesses)

        setIsGameOver(solution === currentGuess)
      }

      if (event.key === 'Backspace') {
        setCurrentGuess(currentGuess.slice(0, -1))
        return
      }

      if (currentGuess.length >= 5) {
        return
      }

      const isLetter = event.key.match(/^[a-z]$/) != null

      if (isLetter) {
        setCurrentGuess((prev) => prev + event.key)
      }
    }

    window.addEventListener('keydown', handleType)

    // cleaning
    return () => window.removeEventListener('keydown', handleType)
  }, [currentGuess, guesses, isGameOver, solution])

  return (
    <div className="board">
      {guesses.map((guess: string, i) => {
        const isCurrentGuess = i === guesses.findIndex((el: string) => el === '')

        return (
          <Line
            key={i}
            guess={isCurrentGuess ? currentGuess : guess ?? ''}
            isFinal={!isCurrentGuess && guess !== ''}
            solution={solution}
            wordLength={WORD_LENGTH}
          ></Line>
        )
      })}
    </div>
  )
}

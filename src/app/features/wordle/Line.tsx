type LineProps = {
  guess: string
  isFinal: boolean
  solution: string
  wordLength: number
}

export const Line: React.FC<LineProps> = ({ guess, isFinal, solution, wordLength }) => {
  const tiles = []

  for (let i = 0; i < wordLength; i++) {
    const char = guess[i]
    let className = 'tile'

    if (isFinal) {
      if (char === solution[i]) {
        className += ' correct'
      } else if (solution.includes(char)) {
        className += ' close'
      } else {
        className += ' incorrect'
      }
    }

    tiles.push(
      <div key={i} className={className}>
        {char}
      </div>
    )
  }
  return <div className="line">{tiles}</div>
}

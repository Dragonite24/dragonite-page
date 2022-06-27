export const shuffleStr = (value: string): string => {
  const shuffledArray = value.split('').sort((_) => Math.random() - 0.5)
  return shuffledArray.join('')
}

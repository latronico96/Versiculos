export const backgrounds = [
  'linear-gradient(135deg, #1e3c72, #2a5298)',
  'linear-gradient(135deg, #0f2027, #203a43)',
  'linear-gradient(135deg, #232526, #414345)',
  'linear-gradient(135deg, #3a1c71, #d76d77, #ffaf7b)',
  'linear-gradient(135deg, #16222A, #3A6073)',
]

export function getRandomBackground(): string {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)]
}

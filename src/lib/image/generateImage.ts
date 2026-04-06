import { ImageResponse } from '@vercel/og'
import { getRandomBackground } from './backgrounds'
import { formatVerse, formatCitation } from './text'
import { buildLayout } from './layout'

type Params = {
  texto: string
  cita: string
  width?: number
  height?: number
}

export function generateImage({
  texto,
  cita,
  width = 1080,
  height = 1920,
}: Params) {
  const background = getRandomBackground()

  return new ImageResponse(
    buildLayout({
      texto: formatVerse(texto),
      cita: formatCitation(cita),
      background,
      width,
      height,
    }),
    {
      width,
      height,
    }
  )
}

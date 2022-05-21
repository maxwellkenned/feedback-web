import { Camera, Trash } from 'phosphor-react'
import html2canvas from 'html2canvas'
import { useState } from 'react'
import { Loading } from '../../Loading'

interface IScreenshotButtonProps {
  screenshot: string | null
  onScreenshotTook: (screenshot: string | null) => void
}
export function ScreenshotButton({
  screenshot,
  onScreenshotTook,
}: IScreenshotButtonProps) {
  const [isTakaingScreenshot, setIsTakaingScreenshot] = useState(false)

  async function hadleTakeScreenshot() {
    setIsTakaingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64Image = canvas.toDataURL('image/png')

    onScreenshotTook(base64Image)
    setIsTakaingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="w-10 h-10 p-1 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
        {/* <img
          className="object-cover rounded-md"
          src={screenshot}
          alt="screenshot da tela"
        /> */}
      </button>
    )
  }

  return (
    <button
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
      type="button"
      onClick={hadleTakeScreenshot}
    >
      {isTakaingScreenshot ? (
        <Loading />
      ) : (
        <Camera className="w-6 h-6 text-zinc-100" />
      )}
    </button>
  )
}

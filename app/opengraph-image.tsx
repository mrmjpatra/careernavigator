import { ImageResponse } from 'next/server'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Institute Insider'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'
const baseUrl = 'https://carrernavigator.vercel.app'

// Image generation
export default async function Image() {


  return new ImageResponse
    (
      <div tw="relative flex w-full h-full items-center justify-center bg-blue-900">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <img
            src={`${baseUrl}/assets/og.svg`}
            alt='institute insider'
            tw='w-[90%] mx-auto mt-10 flex'
          />
        </div>
      </div>
    )
}
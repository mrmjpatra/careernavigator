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
          {/* Overlay */}

        </div>
        <div tw="flex flex-col absolute left-0 right-0 bottom-3">
          {/* Tags */}
          <div tw="flex mt-6 flex-wrap items-center text-4xl text-white">
            <div tw='p-2'>Choose your best Carrer. We guide you to choose best path with best College. Based on your rank and score, we can show you the best college.You gurantee you to get 100% seat on your wishlist collge.</div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300 " />
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
          </div>
        </div>
      </div>
    )
}
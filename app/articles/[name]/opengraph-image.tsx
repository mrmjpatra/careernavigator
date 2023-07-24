import { checkLength, convertWord, getFormattedString } from '@/utils/functions'
import { ImageResponse } from 'next/server'
import logo from '@/public/assets/cnlogo.png'
export const runtime = 'edge'

export const alt = 'Schools'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { name: string } }) {
  const data = await fetch(`${process.env.HOST}/api/articles/name/${getFormattedString(params.name)}`).then((res) =>
    res.json()
  )

  const description = checkLength(JSON.parse(data.message.content.replace(/<[^>]+>/g, '')), 150);

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full flex items-center justify-center">
        {/* Background */}
        {/* <img src={logo} alt="logo" /> */}
        <div tw="absolute flex inset-0">
          {/* Overlay */}
          <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
        </div>
        <div tw="flex flex-col text-neutral-50">
          {/* Title */}
          <div tw="text-7xl font-bold text-center">{convertWord(data.message.title)}</div>
          {/* Tags */}
          <div tw="flex mt-6 flex-wrap items-center text-4xl text-neutral-200">
            <div tw='pb-4'>{(description)}</div>
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300 " />
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
            <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
          </div>
        </div>
      </div>
    ),
    size
  );
}
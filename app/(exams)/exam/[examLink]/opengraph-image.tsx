import { checkLength, convertWord, getFormattedString } from '@/utils/functions'
import { ImageResponse } from 'next/server'
export const runtime = 'edge'

export const alt = 'Exams'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { examLink: string } }) {
  const data = await fetch(`${process.env.HOST}/api/exam/name/${getFormattedString(params.examLink)}`).then((res) =>
    res.json()
  )

  data.message.overview ? data.message.overview.overView : 'Over View of' + name;
  const description = data.message.overview ? checkLength(JSON.parse(data.message.overview.overView.replace(/<[^>]+>/g, '')), 150) : 'Over View of' + getFormattedString(params.examLink);

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full flex items-center justify-center">
        {/* Background */}
        <div tw="absolute flex inset-0">
          <img src={'https://careernavigator.vercel.app/assets/carrernavigator.svg'} alt="logo" tw='w-full h-full object-fill' />
          {/* Overlay */}
          <div tw="absolute flex inset-0 bg-black bg-opacity-50" />
        </div>
        <div tw="flex flex-col text-neutral-50">
          {/* Title */}
          <div tw="flex text-2xl font-bold justify-center">
            <h1 className=' text-center'>{convertWord(data.message.examName)}</h1>
          </div>
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
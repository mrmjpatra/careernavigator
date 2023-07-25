import { ImageResponse } from 'next/server'
export const runtime = 'edge'

export const alt = 'Carrer Navigator'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: { name: string } }) {

  return new ImageResponse(
    (
      <div tw="relative flex w-full h-full flex items-center justify-center">
          <img src={'https://careernavigator.vercel.app/assets/carrernavigator.svg'} alt="logo" tw='w-full h-full object-fill' />
      </div>
    ),
    size
  );
}
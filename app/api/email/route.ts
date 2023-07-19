import CarrerNavigatorContactEmail from '@/components/email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request) {
  try {
    // const data = await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'mrmjpatra@gmail.com',
    //   subject: "New College Apply",
    //   react: CarrerNavigatorContactEmail(),
    // });
    // return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
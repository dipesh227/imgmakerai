import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  const { prompt } = await request.json();
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10000000) + 1;
  };
  const randomSeed = generateRandomNumber();
  const image = `https://image.pollinations.ai/prompt/${encodeURIComponent(
    prompt
  )}?seed=${randomSeed}&width=512&height=512&nologo=True`;

  await fetch(image);
  return NextResponse.json({ url: image });
}

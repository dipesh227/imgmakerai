import { NextRequest, NextResponse } from "next/server";
export async function Post(request: NextRequest) {
  const { prompt } = await request.json();
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10000000) + 1;
  };
  const randomSeed = generateRandomNumber();
  const image = `https://image.pollinations.ai/prompt/${encodeURIComponent(
    prompt
  )}&seed=${randomSeed}`;

  await fetch(image);
  return NextResponse.json({ image });
}

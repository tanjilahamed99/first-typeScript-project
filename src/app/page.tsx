"use client";

export default function Home() {
  const hello = (ami: string) => {
    console.log(ami);
  };

  return <div onClick={() => hello('hello')}>hello</div>;
}

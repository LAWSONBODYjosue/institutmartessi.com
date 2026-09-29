import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 py-12">
      <div className="">
        <Image
          src="/martessi_logo_optimized.svg"
          alt="Blason de l'Institut Martessi"
          width={200}
          height={200}
        />
        <h1 className="text-4xl font-medium">Institut Martessi</h1>
      </div>
    </main>
  );
}

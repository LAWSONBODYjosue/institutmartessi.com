import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-6 py-12">
      <div className="flex flex-col items-center ">
        <h1 className="text-5xl mb-4">Institut Martessi</h1>
        <Image
          src="/martessi_logo_optimized.svg"
          alt="Blason de l'Institut Martessi"
          width={300}
          height={300}
        />
        <p className="text-4xl font-normal max-w-2xl mx-auto text-center mt-8">
          Notre site est en cours de développement. Nous serons bientôt heureux
          de vous accueillir.
        </p>
        <a href="mail:to"></a>
      </div>
    </main>
  );
}

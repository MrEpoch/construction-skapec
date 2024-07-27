import Link from "next/link";
import CTA from "./_sections/CTA";
import Gallery from "./_sections/Gallery";
import Landing from "./_sections/Landing";
import Review from "./_sections/Review";

export default function Home() {
  return (
    <main className="h-view-container">
      <div className="max-w-container">
        <Landing />
        <div className="min-h-screen" />
        <Gallery />
        <CTA />
        <Review />
        <Link href="/work">Kontaktujte nás</Link>
      </div>
    </main>
  );
}

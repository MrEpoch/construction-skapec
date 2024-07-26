import CTA from "./_sections/CTA";
import Gallery from "./_sections/Gallery";
import Landing from "./_sections/Landing";
import Review from "./_sections/Review";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Landing />
      <Gallery />
      <CTA />
      <Review />
    </main>
  );
}

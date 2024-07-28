import FaqsCard from "@/components/shared/FaqCard";

const faqsList = [
  {
    q: "Lorem ipsum dolor sit amet, qui ?",
    a: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat adipisicing minim sint cillum sint consectetur cupidatat.",
  },
  {
    q: "Lorem ipsum dolor sit amet, qui ?",
    a: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat adipisicing minim sint cillum sint consectetur cupidatat.",
  },
  {
    q: "Lorem ipsum dolor sit amet, qui ?",
    a: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat adipisicing minim sint cillum sint consectetur cupidatat.",
  },
  {
    q: "Lorem ipsum dolor sit amet, qui ?",
    a: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat adipisicing minim sint cillum sint consectetur cupidatat.",
  },
  {
    q: "Lorem ipsum dolor sit amet, qui ?",
    a: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat adipisicing minim sint cillum sint consectetur cupidatat.",
  },
];

export default function Faq() {
  return (
    <section className="leading-relaxed py-16 min-h-screen flex items-center justify-center flex-col">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Často kladené dotazy
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Máš nějáké další dotazy? Tak nám zavolej a my ti poradíme!
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
}

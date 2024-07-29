import FaqsCard from "@/components/shared/FaqCard";
import { constContactPage } from "@/constants/cs_main";

export default function Faq() {
  return (
    <section className="leading-relaxed py-16 min-h-screen flex items-center justify-center flex-col">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          {constContactPage.faq.heading}
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          {constContactPage.faq.para}
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {constContactPage.faq.faqsList.map((item, idx) => (
          <FaqsCard key={idx} idx={idx} faqsList={item} />
        ))}
      </div>
    </section>
  );
}

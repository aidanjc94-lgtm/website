import type { FAQ } from '@/content/types';

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <details key={faq.question} className="group rounded-3xl border border-fenland-purple/10 bg-white p-6 shadow-sm">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-lg font-black text-fenland-dark focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-fenland-red">
            {faq.question}
            <span className="mt-1 text-fenland-purple group-open:rotate-45 motion-safe:transition" aria-hidden="true">+</span>
          </summary>
          <p className="mt-4 leading-7 text-fenland-dark/75">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

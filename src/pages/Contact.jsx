import PageHead from "../components/sections/PageHead";
import { ContactPanel } from "../components/sections/ContactForm";
import FAQSection from "../components/sections/FAQSection";
import usePageMeta from "../hooks/usePageMeta";
import { meta, pageHead, contactPanel, faq } from "../data/contactData";

export default function Contact() {
  usePageMeta(meta.title, meta.description);
  return (
    <>
      <PageHead {...pageHead} />
      <ContactPanel {...contactPanel} />
      <FAQSection {...faq} />
    </>
  );
}

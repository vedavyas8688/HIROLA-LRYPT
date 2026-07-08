import LegalLayout from "./LegalLayout";

 

const SECTIONS = [
  {
    id: "introduction",
    heading: "Introduction",
    body: [
      `[Company Name] ("we", "our", "us") provides CAD design, ANSYS simulation, Formlabs 3D printing, utility network, engineering design, and HRMS solutions and services (the "Services"). This Privacy Policy explains what information we collect through our website and Services, how we use it, and the choices you have.`,
      `By using our website or Services, you agree to the collection and use of information as described in this policy. If you do not agree, please do not use our website or Services.`,
    ],
  },
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    body: [
      `Information you provide directly: your name, email address, phone number, company name, and any other details you submit through our contact, quote, or newsletter forms, or when you engage us for a project.`,
      `Information collected automatically: IP address, browser type, device information, pages visited, referring URLs, and timestamps, collected through cookies and similar technologies.`,
      `Information from third parties: where relevant, information shared by partners or vendors (for example, ANSYS or Formlabs) in connection with a project or licensing arrangement you have with us.`,
    ],
  },
  {
    id: "how-we-use-information",
    heading: "How We Use Your Information",
    body: [`We use the information we collect to:`],
    bullets: [
      "Respond to inquiries and provide quotes or consultations",
      "Deliver, maintain, and improve our Services",
      "Send updates, invoices, and service-related communications",
      "Send marketing communications, where you have opted in (you may unsubscribe at any time)",
      "Analyze website usage to improve content and user experience",
      "Comply with legal obligations and enforce our agreements",
    ],
  },
  {
    id: "how-we-share-information",
    heading: "How We Share Information",
    body: [`We do not sell your personal information. We may share it with:`],
    bullets: [
      "Service providers who help us operate our website, host data, or process payments, under confidentiality obligations",
      "Software or hardware partners (e.g. ANSYS, Formlabs) where necessary to deliver a licensed product or project you have requested",
      "Professional advisors, such as legal or accounting firms, where necessary",
      "Authorities, where required by law or to protect our rights, users, or the public",
      "A successor entity, in the event of a merger, acquisition, or sale of assets",
    ],
  },
  {
    id: "cookies",
    heading: "Cookies & Tracking Technologies",
    body: [
      `We use cookies and similar technologies to operate our site, remember preferences, and understand how visitors use our website, including through analytics tools such as Google Analytics. You can control cookies through your browser settings; disabling cookies may affect some site functionality.`,
    ],
  },
  {
    id: "data-retention",
    heading: "Data Retention",
    body: [
      `We retain personal information for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. When no longer needed, we securely delete or anonymize it.`,
    ],
  },
  {
    id: "data-security",
    heading: "Data Security",
    body: [
      `We use reasonable administrative, technical, and physical safeguards designed to protect your information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.`,
    ],
  },
  {
    id: "your-rights",
    heading: "Your Rights & Choices",
    body: [
      `Depending on your location, you may have the right to access, correct, delete, or restrict the use of your personal information, or to object to certain processing. To exercise these rights, contact us using the details below. We will respond in accordance with applicable law.`,
    ],
  },
  {
    id: "childrens-privacy",
    heading: "Children's Privacy",
    body: [
      `Our website and Services are intended for business and professional use and are not directed at children under 16. We do not knowingly collect personal information from children.`,
    ],
  },
  {
    id: "changes",
    heading: "Changes to This Policy",
    body: [
      `We may update this Privacy Policy from time to time. The effective date above reflects the most recent revision. Continued use of our website or Services after changes take effect constitutes acceptance of the revised policy.`,
    ],
  },
  {
    id: "contact",
    heading: "Contact Us",
    body: [
      `If you have questions about this Privacy Policy or how we handle your information, contact us at:`,
      `[Company Name]\n[Street Address, City, State, ZIP]\nEmail: [privacy@yourcompany.com]\nPhone: [+1 (000) 000-0000]`,
    ],
  },
];

export default function Privacy() {
  return (
    <LegalLayout
      eyebrow="Legal · Documentation"
      title="Privacy Policy"
      subhead="How we collect, use, and protect information across our CAD, simulation, and engineering services."
      docNumber="PRIVACY-POL-01"
      revision="A"
      effectiveDate="[Month Day, Year]"
      status="Active"
      sections={SECTIONS}
      crossLinkTo="/terms"
      crossLinkLabel="Terms & Conditions"
    />
  );
}
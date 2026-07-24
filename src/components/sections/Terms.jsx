import LegalLayout from "./LegalLayout";

/* Fill in the bracketed placeholders with your real details
   before publishing. General template, not legal advice —
   have counsel review before it goes live. */

const SECTIONS = [
  {
    id: "acceptance",
    heading: "Acceptance of Terms",
    body: [
      `These Terms & Conditions ("Terms") govern your access to and use of the website and services provided by LRYPT Technologies ("we", "our", "us"), including Proteger, Cadence Simulation, Formlabs 3D printing, utility network, and engineering design solutions (the "Services"). By accessing our website or engaging our Services, you agree to be bound by these Terms.`,
    ],
  },
  {
    id: "use-of-website",
    heading: "Use of Our Website",
    body: [
      `You agree to use our website only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use of, this website by any third party. You must not attempt to gain unauthorized access to our systems or interfere with the proper functioning of the site.`,
    ],
  },
  {
    id: "services-and-quotes",
    heading: "Services & Quotes",
    body: [
      `Descriptions of our Services on this website are for general informational purposes and do not constitute a binding offer. Any project engagement, quote, license, or scope of work will be governed by a separate written agreement or order form between you and LRYPT Technologies, which will take precedence over these Terms in the event of a conflict.`,
    ],
  },
  {
    id: "third-party-software",
    heading: "Third-Party Software & Products",
    body: [
      `Certain Services may involve third-party software or hardware. Your use of such products is subject to the applicable third party's own license terms, and LRYPT Technologies makes no warranties on their behalf.`,
    ],
  },
  {
    id: "intellectual-property",
    heading: "Intellectual Property",
    body: [
      `All content on this website, including text, graphics, logos, and software, is the property of LRYPT Technologies or its licensors and is protected by intellectual property laws. Deliverables produced under a separate project agreement are governed by the ownership and licensing terms set out in that agreement.`,
    ],
  },
  {
    id: "client-materials",
    heading: "Client Materials & Data",
    body: [
      `Where you provide us with designs, specifications, data, or other materials to perform the Services, you represent that you have the right to share them, and you grant us a license to use them solely to deliver the Services.`,
    ],
  },
  {
    id: "disclaimers",
    heading: "Disclaimers",
    body: [
      `Our website and general information are provided "as is" without warranties of any kind, express or implied, including but not limited to accuracy, completeness, or fitness for a particular purpose. Engineering, simulation, and design outcomes depend on inputs, assumptions, and third-party tools, and we do not guarantee specific results outside the scope defined in a signed project agreement.`,
    ],
  },
  {
    id: "limitation-of-liability",
    heading: "Limitation of Liability",
    body: [
      `To the maximum extent permitted by law, LRYPT Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenue, arising from your use of our website or Services. Our total liability for any claim arising from a project shall not exceed the fees paid by you for the relevant Services, as further detailed in your project agreement.`,
    ],
  },
  {
    id: "third-party-links",
    heading: "Third-Party Links",
    body: [
      `Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of any third-party site, and inclusion of a link does not imply endorsement.`,
    ],
  },
  {
    id: "termination",
    heading: "Termination",
    body: [
      `We may suspend or terminate your access to our website at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.`,
    ],
  },
  {
    id: "governing-law",
    heading: "Governing Law",
    body: [
      `These Terms are governed by the laws of India, without regard to conflict of law principles. Any disputes arising from these Terms or your use of our website shall be subject to the exclusive jurisdiction of the courts located in Bangalore, Karnataka.`,
    ],
  },
  {
    id: "changes",
    heading: "Changes to These Terms",
    body: [
      `We may revise these Terms from time to time. The effective date above reflects the most recent revision. Continued use of our website after changes take effect constitutes acceptance of the revised Terms.`,
    ],
  },
  {
    id: "contact",
    heading: "Contact Us",
    body: [
      `If you have questions about these Terms, contact us at:`,
      `LRYPT Technologies\n4th Floor, Symphony Managed Office Space, Hormavu Agara Road, Vadarpalya, Hennur, Bangalore 560043\nEmail: enquiry@lrypt.com\nPhone: 9036354564`,
    ],
  },
];

export default function Terms() {
  return (
    <LegalLayout
      eyebrow="Legal · Documentation"
      title="Terms & Conditions"
      subhead="The terms that govern use of our website and engagement of our engineering and software services."
      docNumber="TERMS-COND-01"
      revision="A"
      effectiveDate="July 24, 2026"
      status="Active"
      sections={SECTIONS}
      crossLinkTo="/privacy"
      crossLinkLabel="Privacy Policy"
    />
  );
}

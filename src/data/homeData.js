// Content for the Home page.
// Edit copy, images, and items here — no component code needed.

export const meta = {
  title: "LRYPT Technologies | Engineering Software, Simulation & Services",
  description:
    "Proteger, Cadence Simulation, Formlabs 3D printing, utility network design, and engineering design solutions from LRYPT Technologies.",
};

export const hero = {
  slides: [
    {
      image: "/assets/img/image11.jpeg",
      imageAlt: "Proteger technology solutions",
      label: "Welcome to LRYPT Technologies",
      lines: ["Transform possibilities", "with Proteger"],
      sub: "Reliable technology solutions designed to help businesses innovate, perform, and grow.",
      btnText: "Explore Proteger",
      btnHref: "/proteger",
    },
    {
      image: "/assets/img/image12.jpeg",
      imageAlt: "Cadence engineering simulation software",
      label: "Welcome to LRYPT Technologies",
      lines: [
        "Accelerate innovation",
        "with Cadence Simulation",
      ],
      sub: "High-fidelity CAE simulation for faster, smarter, lower-risk engineering decisions.",
      btnText: "Explore Cadence",
      btnHref: "/cadence-simulation",
    },
    {
      image: "/assets/img/banner4.png",
      imageAlt:
        "Driving the future of additive manufacturing with Formlabs 3D printers",
      label: "Welcome to LRYPT Technologies",
      lines: [
        "Driving the future of",
        "additive manufacturing    ",
        "with Formlabs 3D printers",
      ],
      sub: "Production-grade precision, speed, and possibility.",
      btnText: "Explore Formlabs",
      btnHref: "/formlabs",
    },
  ],
};

export const intro = {
  bg: "cream",
  label: "Welcome to LRYPT Technologies",
  lede: "Empowering Innovation Through Engineering & Digital Transformation",
  lead: [
    "At LRYPT Technologies, we empower engineering, infrastructure, manufacturing, and technology-driven organizations with innovative digital engineering solutions. By combining advanced engineering software, simulation technologies, geospatial intelligence, digital engineering, and specialized consulting, we help businesses accelerate product development, optimize operations, and deliver complex projects with confidence.",
    "From product design and simulation to network planning, GIS mapping and digital transformation, our team delivers the expertise and technology needed to improve accuracy, enhance productivity, reduce time-to-market, and drive sustainable business growth.",
  ],
  tagline: "LRYPT Technologies – Your trusted partner for Engineering Excellence, Digital Innovation, and Business Transformation.",
};

export const solutionsGrid = {
  bg: "cream",
  heading: "Our Solutions",
  subheading:
    "Empowering businesses with cutting-edge engineering, simulation, digital engineering, and manufacturing solutions to drive innovation, solve complex challenges, and achieve faster, smarter, and more sustainable outcomes.",

  items: [
    {
      href: "/proteger",
      img: "/assets/img/image15.jpeg",
      alt: "Proteger engineering technology solutions",
      meta: "Engineering Technology",
      title: "Proteger",
      desc: "Innovative engineering technology solutions that help organizations improve performance, strengthen operations, and accelerate digital transformation.",
    },
    {
      href: "/cadence-simulation",
      img: "/assets/img/image16.jpeg",
      alt: "Cadence engineering simulation",
      meta: "Simulation",
      title: "Cadence Simulation",
      desc: "High-fidelity CAE simulation technologies that help engineers predict performance, reduce development risk, and accelerate product innovation.",
    },
    {
      href: "/formlabs",
      img: "/assets/img/image17.jpeg",
      alt: "Formlabs 3D Printing",
      meta: "Additive Manufacturing",
      title: "Formlabs 3D Printing",
      desc: "Industrial-grade SLA and SLS 3D printing solutions for rapid prototyping, functional testing, product validation, and custom manufacturing.",
    },
  ],
};
export const servicesGrid = {
  bg: "dark",
  heading: "Our Services",
  subheading:
    "Delivering specialized engineering, geospatial, utility network, and digital solutions that help organizations execute projects efficiently and drive sustainable growth.",

  items: [
    {
      href: "/utility-network",
      img: "/assets/img/utilityimage.jpeg",
      alt: "Utility Network Services",
      meta: "Geospatial",
      title: "Utility Network Services",
      desc: "Comprehensive GIS, utility mapping, FTTx, electric, water, and oil & gas network design solutions for smarter infrastructure planning and asset management.",
    },
    {
      href: "/engineering-design",
      img: "/assets/img/image19.jpeg",
      alt: "Engineering Design Services",
      meta: "Engineering",
      title: "Engineering Design Services",
      desc: "End-to-end engineering design, technical drafting, product development, simulation, prototyping, and consulting for innovative, high-quality solutions.",
    },
  ],
};

export const whyChoose = {
  bg: "cream",
  kicker: null,
  heading: "Why choose LRYPT",
  subheading: "",
  columns: 3,
  items: [
    {
      icon: {
        viewBox: "0 0 40 40",
        shapes: [
          {
            tag: "circle",
            props: {
              cx: "20",
              cy: "20",
              r: "13",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
            },
            text: null,
          },
          {
            tag: "circle",
            props: {
              cx: "20",
              cy: "20",
              r: "4",
              fill: "currentColor",
            },
            text: null,
          },
        ],
      },
      title: "Multi-domain expertise",
      desc: "Software, infrastructure, and workforce — all under one roof.",
    },
    {
      icon: {
        viewBox: "0 0 40 40",
        shapes: [
          {
            tag: "circle",
            props: {
              cx: "15",
              cy: "17",
              r: "9",
              fill: "currentColor",
            },
            text: null,
          },
          {
            tag: "rect",
            props: {
              x: "20",
              y: "22",
              width: "14",
              height: "14",
              rx: "3",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
            },
            text: null,
          },
        ],
      },
      title: "Experienced professionals",
      desc: "Specialists with real industry knowledge on every engagement.",
    },
    {
      icon: {
        viewBox: "0 0 40 40",
        shapes: [
          {
            tag: "rect",
            props: {
              x: "6",
              y: "6",
              width: "15",
              height: "15",
              rx: "2",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
            },
            text: null,
          },
          {
            tag: "rect",
            props: {
              x: "19",
              y: "19",
              width: "15",
              height: "15",
              rx: "2",
              fill: "currentColor",
            },
            text: null,
          },
        ],
      },
      title: "Customized & scalable",
      desc: "Solutions tailored to your needs that scale as you grow.",
    },
    {
      icon: {
        viewBox: "0 0 40 40",
        shapes: [
          {
            tag: "rect",
            props: {
              x: "6",
              y: "6",
              width: "8",
              height: "8",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
            },
            text: null,
          },
          {
            tag: "rect",
            props: {
              x: "6",
              y: "20",
              width: "8",
              height: "8",
              fill: "currentColor",
            },
            text: null,
          },
          {
            tag: "rect",
            props: {
              x: "20",
              y: "14",
              width: "14",
              height: "14",
              rx: "2",
              fill: "currentColor",
            },
            text: null,
          },
        ],
      },
      title: "Quality-driven delivery",
      desc: "A rigorous, quality-first approach on every deliverable.",
    },
    {
      icon: {
        viewBox: "0 0 40 40",
        shapes: [
          {
            tag: "path",
            props: {
              d: "M8 28L18 16l6 6 8-12",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
            },
            text: null,
          },
        ],
      },
      title: "Customer-centric",
      desc: "A partnership model built around your goals and success.",
    },
    {
      icon: {
        viewBox: "0 0 40 40",
        shapes: [
          {
            tag: "rect",
            props: {
              x: "8",
              y: "6",
              width: "10",
              height: "28",
              rx: "2",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2.5",
            },
            text: null,
          },
          {
            tag: "rect",
            props: {
              x: "20",
              y: "14",
              width: "12",
              height: "20",
              rx: "2",
              fill: "currentColor",
            },
            text: null,
          },
        ],
      },
      title: "Technology-enabled",
      desc: "Modern tools and timely execution you can rely on.",
    },
  ],
  extraTags: [],
};

export const faq = {
  items: [
    {
      q: "What does LRYPT Technologies do?",
      a: "LRYPT Technologies provides Proteger engineering technology solutions, Cadence simulation software, and Formlabs 3D printing, alongside expert utility network and engineering design services.",
    },
    {
      q: "Which industries does LRYPT serve?",
      a: "We support engineering-driven organizations across aerospace, automotive, defence, energy, healthcare, manufacturing, utilities, water, oil and gas, and infrastructure.",
    },
    {
      q: "Do you offer both software and services?",
      a: "Yes. We combine Proteger, Cadence simulation, and Formlabs technologies with hands-on utility network and engineering design services, giving clients one partner from technology selection through project delivery.",
    },
    {
      q: "Where is LRYPT Technologies located?",
      a: "Our office is on the 4th Floor, Symphony Managed Office Space, Hormavu Agara Road, Vadarpalya, Hennur, Bangalore 560043. We serve clients across India and worldwide.",
    },
    {
      q: "How do I get a quote?",
      a: "Call or WhatsApp 9036354564, email enquiry@lrypt.com, or use the Get a Free Quote form on our Contact page. We typically respond within one business day.",
    },
    {
      q: "Why choose LRYPT?",
      a: "Multi-domain expertise under one roof, experienced professionals, customised and scalable solutions, a quality-driven delivery approach, and a customer-centric, technology-enabled engagement model.",
    },
  ],
};

export const cta = {
  heading: "Ready to Move Your Next Project Forward?",
  sub: "Connect with LRYPT Technologies for Proteger solutions, Cadence simulation, Formlabs 3D printing, utility network services, and engineering design expertise tailored to your goals.",
  btnText: "Contact Our Experts",
  btnHref: "/contact",
  image: "/assets/img/image21.jpeg",
};

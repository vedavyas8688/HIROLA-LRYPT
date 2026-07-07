// Content for the Home page.
// Edit copy, images, and items here — no component code needed.

export const meta = {
  title: "LRYPT Technologies | Engineering Software, Simulation & Services",
  description:
    "ANSYS simulation, CAD, Formlabs 3D printing, utility network design, engineering design and HRMS — LRYPT Technologies helps you design, build, and scale from Bangalore.",
};

export const hero = {
  slides: [
    {
      image: "/assets/img/image11.jpeg",
      imageAlt: "Empowering innovation, sparking creativity through CAD",
      label: "Welcome to LRYPT Technologies",
      lines: ["Empowering innovation,", "sparking creativity through CAD"],
      sub: "Design, visualise, and validate — from first sketch to finished product.",
      btnText: "Explore CAD",
      btnHref: "/cad-design",
    },
    {
      image: "/assets/img/image9.jpeg",
      imageAlt: "Unlock your success with top talent",
      label: "Welcome to LRYPT Technologies",
      lines: ["Unlock your success", "with top talent"],
      sub: "Expert staffing services connecting you with skilled professionals.",
      btnText: "Explore HRMS",
      btnHref: "/hrms",
    },
    {
      image: "/assets/img/image12.jpeg",
      imageAlt: "Unleash the potential of CAE through ANSYS simulation",
      label: "Welcome to LRYPT Technologies",
      lines: [
        "Unleash the potential   ",
        "of CAE through ANSYS  ",
        "simulation",
      ],
      sub: "Predict real-world performance before you build a single part.",
      btnText: "Explore ANSYS",
      btnHref: "/ansys-simulation",
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
  lede: null,
  lead: "Empowering engineering, infrastructure, and technology-driven organizations with innovative solutions. At LRYPT Technologies, we combine advanced engineering software, geospatial intelligence, CAD services, digital engineering, and expert consulting under one roof to help businesses streamline operations, accelerate project delivery, and drive innovation. Whether you're designing, analyzing, mapping, or managing complex projects, we provide the expertise and technology to help you deliver with precision, efficiency, and confidence.",
};

export const solutionsGrid = {
  bg: "cream",
  heading: "Our Solutions",
  subheading:
    "Delivering innovative engineering, geospatial, digital, and manufacturing solutions that help businesses design smarter, optimize operations, and accelerate project success.",

  items: [
    {
      href: "/cad-design",
      img: "/assets/img/image15.jpeg",
      alt: "CAD Design",
      meta: "Engineering",
      title: "CAD Design",
      desc: "Comprehensive 2D drafting and 3D CAD modeling services that transform concepts into precise, production-ready engineering designs.",
    },
    {
      href: "/ansys-simulation",
      img: "/assets/img/image16.jpeg",
      alt: "ANSYS Simulation",
      meta: "Simulation",
      title: "ANSYS Simulation",
      desc: "Advanced engineering simulations that analyze performance, improve reliability, reduce development costs, and accelerate product innovation.",
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
    "Delivering specialized engineering, geospatial, telecom, and workforce solutions that help organizations execute projects efficiently and drive sustainable growth.",

  items: [
    {
      href: "/utility-network",
      img: "/assets/img/image18.jpeg",
      alt: "Utility Network Services",
      meta: "Geospatial",
      title: "Utility Network Services",
      desc: "Comprehensive GIS, utility mapping, telecom, electric, water, and oil & gas network design solutions for smarter infrastructure planning and asset management.",
    },
    {
      href: "/engineering-design",
      img: "/assets/img/image19.jpeg",
      alt: "Engineering Design Services",
      meta: "Engineering",
      title: "Engineering Design Services",
      desc: "End-to-end engineering design, CAD drafting, product development, simulation, prototyping, and technical consulting for innovative, high-quality solutions.",
    },
    {
      href: "/hrms",
      img: "/assets/img/image20.jpeg",
      alt: "Recruitment & Staffing",
      meta: "Workforce",
      title: "Recruitment & Staffing",
      desc: "Connecting businesses with experienced engineering, GIS, telecom, IT, and technical professionals through reliable recruitment and workforce solutions.",
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
      a: "LRYPT Technologies is a Bangalore-based engineering technology company. We provide engineering software solutions — CAD design, ANSYS simulation, and Formlabs 3D printing — alongside expert services in utility network design, engineering design, and HR management (HRMS).",
    },
    {
      q: "Which industries does LRYPT serve?",
      a: "We work across aerospace, automotive, defence, energy, healthcare, manufacturing, utilities, telecom, water, oil & gas, and infrastructure — plus IT, finance, and more through our HR services.",
    },
    {
      q: "Do you offer both software and services?",
      a: "Yes. We pair best-in-class engineering software (CAD, ANSYS, Formlabs) with hands-on delivery teams for utility networks, engineering design, and workforce management — a single partner across the lifecycle.",
    },
    {
      q: "Where is LRYPT Technologies located?",
      a: "Our office is in Hennur, Bangalore — No. 23, Symphony Managed Office Space, Hormavu Agara Road, Bangalore 560043. We serve clients across India and worldwide.",
    },
    {
      q: "How do I get a quote?",
      a: "Call or WhatsApp +91 78274 88464, email info@lrypt.com, or use the Get a Free Quote form on our Contact page. We typically respond within one business day.",
    },
    {
      q: "Why choose LRYPT?",
      a: "Multi-domain expertise under one roof, experienced professionals, customised and scalable solutions, a quality-driven delivery approach, and a customer-centric, technology-enabled engagement model.",
    },
  ],
};

export const cta = {
  heading: "Need our expert help? We’re here!",
  sub: "At LRYPT Technologies, our team of experienced engineers, GIS specialists, telecom experts, and technical consultants works closely with clients to deliver innovative, reliable, and scalable solutions. From engineering design and digital transformation to geospatial intelligence and workforce solutions, we provide the expertise you need to turn ideas into successful projects.",
  btnText: "Get a quote",
  btnHref: "/contact",
  image: "/assets/img/image21.jpeg",
};

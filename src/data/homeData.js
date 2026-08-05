// Content for the Home page.
// Edit copy, images, and items here — no component code needed.

export const meta = {
  title: "Engineering Services Company | Digital Engineering | LRYPT Technologies",
  description:
    "LRYPT Technologies is an engineering services company delivering digital engineering, smart manufacturing, engineering design, utility engineering, and simulation solutions.",
};

export const hero = {
  slides: [
    {
      image: "/assets/img/banner4.png",
      mobileImage: "/assets/img/mobilebanner4.webp",
      imageAlt:
        "Driving the future of additive manufacturing with Formlabs 3D printers",
      label: "Welcome to LRYPT Technologies",
      lines: [
        " Accelerate Innovation with  ",
        " Formlabs 3D Printers",
         
      ],
      sub: "Production-grade precision, speed, and reliability.",
      btnText: "Explore Formlabs",
      btnHref: "/formlabs",
    },
    {
      image: "/assets/img/cadencesolutions.webp",
      imageAlt: "Cadence engineering simulation software",
      label: "Welcome to LRYPT Technologies",
      lines: ["Design with Confidence ", " Using MSC Software", "Part of Cadence"],
      sub: "Predict performance, reduce risk, and accelerate product development with high-fidelity CAE simulation.",
      btnText: "Explore MSC Software",
      btnHref: "/cadence-simulation",
    },

    {
      image: "/assets/img/protegerbanner.webp",
      imageAlt: "Proteger technology solutions",
      label: "Welcome to LRYPT Technologies",
      lines: ["Transform Manufacturing", "with Digital Transformation"],
      sub: "Digital solutions for smarter operations, predictive maintenance, quality management",
      btnText: "Explore Digital Transformation",
      btnHref: "/proteger",
    },
     {
  image: "/assets/img/utilitybanner.webp",
  imageAlt: "Modern utility network planning and digital infrastructure",
  label: "Utility Engineering",
  lines: [
    "Building Resilient",
    "Utility Networks" ,
     
  ],
  sub: "Delivering intelligent planning, precise network design, GIS mapping, and engineering documentation for reliable, scalable infrastructure.",
  btnText: "Explore Utility Engineering",
  btnHref: "/utility-network",
},
{
  image: "/assets/img/image28.jpeg",
  imageAlt: "Advanced engineering design and product development",
  label: "Engineering Design",
  lines: [
    "Transforming ideas",
    "into engineered reality"
  ],
  sub: "Accelerate product development through innovative design, simulation, validation, prototyping, and manufacturing-ready engineering solutions.",
  btnText: "Explore Engineering Design",
  btnHref: "/engineering-design",
},
  ],
};

export const intro = {
  bg: "cream",
  label: "Welcome to LRYPT Technologies",
  lede: "Empowering Innovation Through Engineering & Technology",
  lead: [
    " At LRYPT Technologies, we help engineering, infrastructure, manufacturing, and technology-driven organisations innovate through advanced engineering services and technology solutions. By combining engineering software, simulation, geospatial intelligence (GIS), additive manufacturing, and specialised consulting, we enable businesses to design, analyse, optimise, and deliver complex projects with confidence.",
    " From product design and engineering simulation to utility network planning, GIS mapping, 3D printing, and digital engineering, we deliver the expertise and technology needed to improve accuracy, enhance productivity, accelerate innovation, and support sustainable growth. ",
   ],
  tagline:
    "LRYPT Technologies – Where Engineering Meets Technology.",
};

export const solutionsGrid = {
  bg: "cream",
  headLayout: "split-eyebrow",
  heading: "Our Solutions",
  eyebrow: "Technology platforms and products that enable innovation.",
  subheading:
    "Empowering organisations with engineering, simulation, digital engineering, and advanced manufacturing solutions that accelerate innovation, improve performance, and solve complex engineering challenges.",

  items: [

     {
      href: "/formlabs",
      img: "/assets/img/image17.jpeg",
      alt: "Formlabs 3D Printing",
      meta: "Additive Manufacturing",
      title: "Formlabs 3D Printing",
      desc: "Industrial-grade SLA and SLS 3D printing solutions for rapid prototyping, functional testing, product validation, and low-volume production.",
    },

    {
      href: "/cadence-simulation",
      img: "/assets/img/cadencesolutions.webp",
      alt: "Cadence engineering simulation",
      meta: "Simulation",
      title: "MSC Software",
      subTitle: "Part of Cadence",
      desc: "High-fidelity CAE simulation solutions that help engineers predict product performance, reduce development risk, and accelerate innovation.",
    },


    {
      href: "/proteger",
      img: "/assets/img/protegerbanner.webp",
      alt: "Proteger engineering technology solutions",
      meta: "Smart Manufacturing",
      title: "Digital Transformation",
      desc: "Smart manufacturing solutions that streamline operations, improve productivity, and provide greater visibility across manufacturing processes.",
    },
     
     
  ],
};
export const servicesGrid = {
  bg: "dark",
  headLayout: "split-eyebrow",
  heading: "Our Services",
  eyebrow: "Professional engineering and consulting services that help clients plan, design, deliver, and optimise projects.",
  subheading:
    "Delivering specialised engineering, utility network, geospatial, and digital engineering services that help organisations execute projects with confidence, improve efficiency, and achieve sustainable growth.",

  items: [
    {
      href: "/utility-network",
      img: "/assets/img/utilitynetwork.webp",
      alt: "Utility Network",
      meta: "",
      title: "Utility Engineering",
      desc: "Deliver accurate, scalable utility networks through intelligent planning, GIS mapping, engineering design, and reliable documentation for smarter infrastructure management.",
    },
    {
      href: "/engineering-design",
      img: "/assets/img/engeneeringservice.webp",
      alt: "Engineering Design",
      meta: "",
      title: "Engineering Design",
      desc: "Transform concepts into production-ready solutions through engineering design, 3D CAD modelling, drafting, prototyping, simulation support, and product development.",
    },
  ],
};

export const whyChoose = {
  bg: "cream",
  kicker: null,
  heading: "Why Choose LRYPT",
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
      title: "Multi-Domain Expertise",
      desc: "Engineering, technology, infrastructure, and workforce solutions-all under one roof.",
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
      title: "Experienced Professionals",
      desc: "Industry experts delivering practical solutions across engineering, utilities, manufacturing, and digital technologies.",
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
      title: "Tailored & Scalable Solutions",
      desc: "Solutions designed around your business needs and built to grow with you.",
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
      title: "Quality-Driven Delivery",
      desc: "A quality-first approach that ensures accuracy, reliability, and consistent project outcomes.",
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
      title: "Customer-Focused Partnership",
      desc: "We work as an extension of your team, committed to your long-term success.",
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
      title: "Technology-Enabled Solutions",
      desc: "Leveraging advanced tools and proven processes to deliver efficient, reliable results.",
    },
  ],
  extraTags: [],
};

export const faq = {
  items: [
    {
      q: "What solutions does LRYPT Technologies provide?",
      a: "LRYPT provides technology platforms and products that enable innovation, including Formlabs 3D printers, MSC Software solutions, and Digital Transformation solutions.",
    },
    {
      q: "What professional services does LRYPT offer?",
      a: "We deliver professional engineering and consulting services across utility engineering, engineering design, geospatial services, digital engineering, project documentation, and product development support.",
    },
    {
      q: "How can LRYPT support utility engineering projects?",
      a: "Our teams help clients deliver accurate, scalable utility networks through intelligent planning, GIS mapping, engineering design, survey validation, asset documentation, and reliable project records.",
    },
    {
      q: "Can LRYPT help with engineering design and product development?",
      a: "Yes. We support engineering design, 3D CAD modelling, drafting, prototyping, simulation support, and product development to help transform concepts into production-ready solutions.",
    },
    {
      q: "Why choose LRYPT for engineering and technology projects?",
      a: "Clients choose LRYPT for multi-domain expertise, experienced professionals, tailored and scalable solutions, quality-driven delivery, customer-focused partnership, and technology-enabled execution.",
    },
    {
      q: "How do I request a quote?",
      a: "Contact LRYPT with your project requirements, technology needs, or engineering challenge. Our experts will review your goals and recommend the right solution, service model, or project approach.",
    },
  ],
};

export const cta = {
  heading: "Let's Discuss Your Requirements",
  sub: "Tell us about your project, and our experts will help you identify the right engineering services, technology solutions, and professional support to achieve your goals.",
  btnText: "Contact Our Experts",
  btnHref: "/contact",
  image: "/assets/img/homegetaquote.webp",
};

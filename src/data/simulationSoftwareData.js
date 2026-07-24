// Content for the Simulation Software page.
// Routing and navigation will be connected separately.

const letterIcon = (label) => ({
  viewBox: "0 0 40 40",
  shapes: [
    { tag: "circle", props: { cx: 20, cy: 20, r: 17, fill: "none", stroke: "currentColor", strokeWidth: 1.5 } },
    { tag: "text", props: { x: 20, y: 25, textAnchor: "middle", fontSize: 13, fontWeight: 700, fill: "currentColor" }, text: label },
  ],
});

export const meta = {
  title: "Cadence Simulation | Engineering Analysis Solutions | LRYPT",
  description:
    "Explore engineering simulation software for structural, fluid, thermal, electromagnetic, optical, and multiphysics analysis with LRYPT Technologies.",
};

export const pageHead = {
  variant: "img",
  image: "/assets/img/image25.jpeg",
  imageAlt: "Cadence engineering simulation visualization",
  crumb: "Solutions / Cadence Simulation",
  lines: ["Cadence Simulation", "for confident engineering"],
  lead:
    "Predict real-world product performance, explore design alternatives, and make better engineering decisions before physical testing.",
};

export const intro = {
  label: "Overview",
  lede:
    "High-Fidelity CAE Simulation Powering Faster, Smarter, Lower-Risk Innovation",
  lead: [
    "Our industry-leading computer-aided engineering (CAE) simulation technologies help engineers design, validate, and optimize products with precision and speed. Multidisciplinary solutions spanning materials, structural behavior, acoustics, fluid dynamics, and multiphysics replace costly physical prototypes with high-fidelity digital twins.",
    "From space exploration to next-generation automotive systems, these simulation solutions enable innovators to solve complex engineering challenges, accelerate time-to-market, reduce development risk, and elevate product performance through deep simulation insight.",
  ],
};

export const solutions = {
  kicker: "Solutions",
  heading: "Engineering Simulation Solutions Driving Breakthrough Performance",
  subheading:
    "Discover solutions that unlock and unify physical systems simulation, empowering smarter, faster decision making.",
  items: [
    {
      title: "Acoustic Simulation",
      desc: "Acoustic and vibroacoustic simulation to reduce noise, improve sound quality, and meet regulatory needs across industries.",
      products: [{ label: "Actran", href: "/cadence-simulation/actran" }],
    },
    {
      title: "Vehicle Dynamics & ADAS",
      desc: "Scalable simulation platform for building, testing, and validating virtual environments for ADAS and autonomous systems.",
      products: [],
    },
    {
      title: "Fluid Dynamics (CFD)",
      desc: "CFD simulation software for engineers to model fluid flow, heat transfer, and multiphysics for product design optimization.",
      products: [],
    },
    {
      title: "Material Modeling & Simulation",
      desc: "Advanced material modeling for lightweight, high-performance designs, driving innovation in engineering and product development.",
      products: [],
    },
    {
      title: "Multiphysics Simulation",
      desc: "Industry-leading multiphysics toolkit for high-accuracy structural, thermal, dynamic, and nonlinear simulations.",
      products: [],
    },
    {
      title: "Structural Simulation & Analysis",
      desc: "Advanced nonlinear finite element analysis for manufacturing, material forming, and complex contact simulations across industries.",
      products: [],
    },
    {
      title: "Drivetrain Design & Simulation",
      desc: "Multibody dynamics and drivetrain simulation for faster virtual prototyping, motion analysis, and full system development.",
      products: [],
    },
    {
      title: "Manufacturing Process Simulation",
      desc: "Enabling sustainable and efficient manufacturing with optimized processes, reduced waste, and improved productivity.",
      products: [],
    },
    {
      title: "AI & ML",
      desc: "AI-powered engineering solutions that optimize processes, saving time and reducing costs.",
      products: [],
    },
    {
      title: "Multibody Dynamics & Motion Simulation",
      desc: "Physics-accurate shared insights into complex systems, empowering teams to make better engineering choices.",
      products: [],
    },
    {
      title: "High Performance Computing (HPC) & Cloud",
      desc: "Cloud-based simulation platform with flexible, secure, high-capacity compute for fast, efficient engineering workflows.",
      products: [],
    },
    {
      title: "Simulation Data Management",
      desc: "Streamline engineering data and workflows to boost collaboration, speed decisions, and ensure traceability.",
      products: [],
    },
    {
      title: "Licensing",
      desc: "Flexible token-based access to CAE tools, giving engineers on-demand, cost-effective licensing.",
      products: [],
    },
  ],
};

export const simulationDisciplines = {
  bg: "cream",
  kicker: "Simulation disciplines",
  heading:
    "A connected portfolio for analyzing structures, fluids, heat, electronics, optics, and interacting physical systems.",
  items: [
    {
      label: "Structural",
      title: "Structural mechanics",
      desc:
        "Evaluate strength, stiffness, deformation, fatigue, vibration, impact, and nonlinear behavior under realistic operating conditions.",
      bullets: ["Static and transient analysis", "Modal and harmonic response", "Fatigue and durability", "Explicit dynamics and impact", "Composite and nonlinear materials"],
      cols: 2,
    },
    {
      label: "Fluids",
      title: "Computational fluid dynamics",
      desc:
        "Understand fluid flow, pressure, turbulence, heat transfer, mixing, and multiphase behavior in products and processes.",
      bullets: ["Internal and external aerodynamics", "Turbulence and combustion", "Multiphase and particle flows", "Conjugate heat transfer", "Rotating machinery"],
      cols: 2,
    },
    {
      label: "Thermal",
      title: "Thermal analysis",
      desc:
        "Predict temperature distribution and heat flow to improve cooling, thermal protection, efficiency, and service life.",
      bullets: ["Steady-state and transient thermal", "Conduction, convection, and radiation", "Electronics cooling", "Thermal stress", "Design optimization"],
      cols: 2,
    },
    {
      label: "Electromagnetics",
      title: "Electromagnetic simulation",
      desc:
        "Design and validate motors, antennas, sensors, power electronics, high-frequency systems, and connected devices.",
      bullets: ["Low- and high-frequency analysis", "Signal and power integrity", "Electric machines", "Antenna performance", "EMI and EMC studies"],
      cols: 2,
    },
    {
      label: "Optics",
      title: "Optical simulation",
      desc:
        "Model light from source to system to develop imaging, illumination, photonic, and optical communication products.",
      bullets: ["Optical system design", "Illumination analysis", "Stray-light assessment", "Photonic component simulation", "Human-vision evaluation"],
      cols: 2,
    },
    {
      label: "Multiphysics",
      title: "Multiphysics and system simulation",
      desc:
        "Couple multiple physical domains and system-level behavior to capture the interactions that determine real product performance.",
      bullets: ["Fluid-structure interaction", "Electro-thermal coupling", "Reduced-order models", "Digital twins", "System architecture validation"],
      cols: 2,
    },
  ],
};

export const softwareCapabilities = {
  bg: "dark",
  kicker: "Connected capabilities",
  heading: "From individual analysis to an enterprise simulation workflow",
  subheading:
    "Build repeatable processes that help more engineers use simulation accurately and efficiently.",
  columns: 3,
  headingStyle: "proj-head",
  items: [
    { icon: letterIcon("P"), title: "Pre-processing", desc: "Prepare geometry, materials, meshes, contacts, loads, and boundary conditions with efficient engineering workflows." },
    { icon: letterIcon("S"), title: "High-performance solvers", desc: "Solve demanding models accurately using scalable CPU, GPU, cloud, and high-performance computing resources." },
    { icon: letterIcon("O"), title: "Optimization", desc: "Explore design spaces, run sensitivity studies, and identify configurations that meet competing performance targets." },
    { icon: letterIcon("A"), title: "Automation", desc: "Standardize repeatable analyses with templates, scripting, parameterization, and process integration." },
    { icon: letterIcon("D"), title: "Data management", desc: "Organize simulation inputs, results, traceability, and collaboration across teams and engineering programs." },
    { icon: letterIcon("V"), title: "Visualization", desc: "Convert complex simulation results into clear plots, animations, reports, and decision-ready engineering evidence." },
  ],
};

export const industries = {
  bg: "cream",
  heading: "Built for engineering-intensive industries",
  subheading:
    "Adaptable simulation workflows support product development, operations, certification, and research across diverse sectors.",
  columns: 3,
  items: [
    { icon: letterIcon("AE"), title: "Aerospace and defence", desc: "Lightweight structures, aerodynamics, propulsion, electronics, safety, and mission-critical reliability." },
    { icon: letterIcon("AU"), title: "Automotive and mobility", desc: "Vehicle performance, electrification, crashworthiness, thermal management, and advanced mobility systems." },
    { icon: letterIcon("EN"), title: "Energy", desc: "Power generation, renewable energy, batteries, oil and gas, turbomachinery, and process equipment." },
    { icon: letterIcon("EL"), title: "Electronics", desc: "Semiconductors, PCB reliability, signal integrity, antennas, cooling, and consumer electronic devices." },
    { icon: letterIcon("IM"), title: "Industrial equipment", desc: "Machines, rotating equipment, pressure systems, manufacturing processes, and heavy engineering." },
    { icon: letterIcon("HC"), title: "Healthcare", desc: "Medical devices, biomechanics, fluid delivery, diagnostics, wearables, and patient-specific innovation." },
  ],
};

export const benefits = {
  bg: "dark",
  heading: "Why use simulation software?",
  subheading:
    "Move engineering learning earlier in development, when changes are faster and less expensive.",
  columns: 4,
  items: [
    { icon: letterIcon("01"), title: "Reduce physical prototypes", desc: "Evaluate more concepts digitally and reserve physical testing for focused validation." },
    { icon: letterIcon("02"), title: "Accelerate development", desc: "Identify performance issues sooner and shorten design-review and testing cycles." },
    { icon: letterIcon("03"), title: "Improve reliability", desc: "Study realistic loads, environments, tolerances, and failure modes before release." },
    { icon: letterIcon("04"), title: "Drive innovation", desc: "Explore unconventional ideas and optimize performance beyond manual design iteration." },
  ],
};

export const faq = {
  items: [
    {
      q: "What is engineering simulation software?",
      a: "Engineering simulation software uses numerical models to predict how a product, component, or process will behave under real-world physical conditions. It helps engineers investigate performance before building and testing physical prototypes.",
    },
    {
      q: "Which simulation discipline should we start with?",
      a: "The right starting point depends on the design question and dominant physics. LRYPT can help define objectives, identify suitable analysis methods, and select a practical software workflow for your team.",
    },
    {
      q: "Can different types of physics be coupled?",
      a: "Yes. Multiphysics workflows can connect structural, thermal, fluid, electromagnetic, and system models when interactions between domains materially affect product behavior.",
    },
    {
      q: "Can simulation software integrate with our product design workflow?",
      a: "Yes. Modern simulation workflows can import common geometry formats, maintain associativity, automate design variations, and exchange parameters with product development systems.",
    },
    {
      q: "Does LRYPT provide implementation and technical support?",
      a: "LRYPT can support software selection, deployment planning, workflow development, user enablement, and ongoing technical adoption based on your engineering requirements.",
    },
    {
      q: "Is simulation useful for small engineering teams?",
      a: "Yes. A focused simulation workflow can help small teams reduce rework, compare alternatives quickly, and make defensible design decisions without creating unnecessary process overhead.",
    },
  ],
};

export const cta = {
  heading: "Ready to strengthen your simulation capability?",
  sub:
    "Tell us about your products, engineering challenges, and current workflow. LRYPT will help you identify a practical simulation software approach aligned with your technical goals, team, and development process.",
  btnText: "Talk to a simulation expert",
  btnHref: "/contact",
  image: "/assets/img/ph-hero-simulation.webp",
};

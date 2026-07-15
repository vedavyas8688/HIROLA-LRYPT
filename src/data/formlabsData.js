// Content for the Formlabs page.
// Edit copy, images, and items here — no component code needed.

export const meta = {
  "title": "Formlabs 3D Printers & Ecosystem | SLA & SLS | LRYPT",
  "description": "Form 4, 4L and Fuse SLS printers with the complete Formlabs ecosystem — Form Wash, Form Cure, Fuse Sift and Fuse Blast — for professional additive manufacturing."
};

export const pageHead = {
  "variant": "img",
  "image": "/assets/img/image29.jpg",
  "imageAlt": "Formlabs — LRYPT Technologies",
  "crumb": "Formlabs",
  "lines": [
    "Precision, speed,",
    "and possibility"
  ],
  "lead": null
};

 export const intro = {
  bg: "cream",
  label: null,
  lede: "Accelerate Innovation with 3D Printing.",
  lead:
    "Unlock the power of advanced additive manufacturing with LRYPT Technologies. Our Formlabs 3D printing solutions enable engineers, designers, and manufacturers to create accurate prototypes, functional components, and production-ready parts with exceptional speed, precision, and consistency—reducing development time and bringing ideas to market faster."
};

 // FeatureCTA — image + heading + copy + button 
export const featureCta = {
  bg: "cream",
  imgFirst: true,
  image: "/assets/img/formlabs/form-cure-scene.webp",
  imageAlt: "Formlabs SLA and SLS 3D printers in a professional workflow",
  label: "Formlabs",
  heading: "Precise and Versatile 3D Printing for Professionals Across Industries",
   paragraphs: [
  "Formlabs 3D printers combine advanced SLA (Stereolithography) and SLS (Selective Laser Sintering) technology to deliver precise, production-quality parts with exceptional speed, reliability, and cost efficiency for prototyping and manufacturing.",

  "LRYPT Technologies provides Formlabs 3D printing solutions for engineering, manufacturing, automotive, aerospace, healthcare, dental, education, entertainment, jewelry, and audio industries, backed by expert guidance, implementation, and ongoing support."
],
  btnText: "Contact Us",
  btnHref: "/contact"
};

 export const slaProducts = {
  bg: "cream",
  heading: "The Complete Formlabs Ecosystem",
  subheading:
    "A fully integrated 3D printing workflow—from printing and washing to curing, powder management, and finishing—for consistent, professional-quality results.",
  wide: false,
  items: [
    {
      img: "/assets/img/formlabs/f4-wash-cure.webp",
      alt: "Form Wash & Form Cure",
      kicker: "Post-Processing",
      title: "Form Wash & Form Cure",
      desc:
        "Automate washing and curing to achieve clean, fully cured, and production-ready SLA parts with consistent quality and minimal manual effort.",
      white: false
    },
    {
      img: "/assets/img/formlabs/form-cure.webp",
      alt: "Form Cure",
      kicker: "Precision Curing",
      title: "Form Cure",
      desc:
        "Deliver uniform heat and light exposure to maximize the strength, durability, and performance of every printed resin component.",
      white: false
    },
    {
      img: "/assets/img/formlabs/fuse-sift.webp",
      alt: "Fuse Sift",
      kicker: "Powder Management",
      title: "Fuse Sift",
      desc:
        "Efficiently recover, mix, and store SLS powder while simplifying part extraction and maintaining a clean, organized workflow.",
      white: false
    },
    {
      img: "/assets/img/formlabs/fuse-blast.webp",
      alt: "Fuse Blast",
      kicker: "Surface Finishing",
      title: "Fuse Blast",
      desc:
        "Automatically remove excess powder and produce smooth, high-quality surface finishes, preparing SLS parts for final use or post-processing.",
      white: false
    }
  ]
};

 export const slaFeature = {
  bg: "cream",
  imgFirst: true,
  image: "/assets/img/formlabs/fuse-blast-scene.webp",
  imageAlt: "Automated SLS part finishing with Fuse Blast",
  label: "Fuse Blast",
  heading: "Automated & Surface Finishing",
  paragraphs: [
    "The Formlabs Fuse Blast streamlines post-processing by automatically removing excess powder from SLS parts while delivering a clean, smooth, and consistent surface finish. This advanced finishing system reduces manual effort and significantly improves workflow efficiency.",
    "Designed for high-quality additive manufacturing, Fuse Blast prepares printed components for dyeing, assembly, or end-use applications, ensuring professional-grade results with exceptional speed, consistency, and reliability."
  ]
};

 export const slsFeature = {
  bg: "cream",
  imgFirst: false,
  image: "/assets/img/formlabs/fuse-sift-scene.webp",
  imageAlt: "Formlabs Fuse Sift powder management system",
  label: "Fuse Sift",
  heading: "Smart Powder Management",
  paragraphs: [
    "The Formlabs Fuse Sift simplifies SLS post-processing by combining part extraction, powder recovery, storage, and material mixing into a single, efficient workstation. It helps streamline your workflow while keeping your workspace clean and organized.",
    "With automated powder dispensing and precise mixing of fresh and recycled material, Fuse Sift minimizes waste, improves material utilization, and ensures consistent print quality across every production cycle."
  ]
};

export const slsProducts = {
  bg: "dark",
  heading: "Complete 3D Printing Packages",
  subheading: "Everything you need to start printing with confidence.",
  wide: true,
  items: [
    {
      img: "/assets/img/formlabs/core-bundle.webp",
      alt: "Form 4 Professional Package",
      kicker: "Professional Package",
      title: "Form 4 Professional Package",
      desc: "A complete SLA printing solution including the Form 4 printer, Form Wash, and Form Cure for fast, accurate, and reliable professional workflows.",
      white: true
    },
    {
      img: "/assets/img/formlabs/dental-bundle.webp",
      alt: "Form 4 Dental Package",
      kicker: "Dental Package",
      title: "Form 4 Dental Package",
      desc: "An integrated dental 3D printing solution designed for producing highly accurate, biocompatible dental models, guides, and appliances.",
      white: true
    }
  ]
};

export const printerLineup = {
  bg: "cream",
  kicker: "Formlabs Printers",
  heading: "Explore the Formlabs Printer Range",
  subheading: "Professional SLA and SLS 3D printing systems designed for speed, precision, and production-ready performance.",
  columns: 3,
  items: [
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
              strokeWidth: "2.5"
            }
          },
          {
            tag: "rect",
            props: {
              x: "20",
              y: "14",
              width: "12",
              height: "20",
              rx: "2",
              fill: "currentColor"
            }
          }
        ]
      },
      title: "Form 4 & Form 4B",
      desc: "High-speed SLA printers delivering exceptional surface quality, precision, and biocompatible printing for engineering and healthcare applications."
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
              strokeWidth: "2.5"
            }
          },
          {
            tag: "rect",
            props: {
              x: "19",
              y: "19",
              width: "15",
              height: "15",
              rx: "2",
              fill: "currentColor"
            }
          }
        ]
      },
      title: "Form 4L & Form 4BL",
      desc: "Large-format SLA printers engineered to produce bigger parts with exceptional accuracy, speed, and consistent print quality."
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
              strokeWidth: "2.5"
            }
          },
          {
            tag: "rect",
            props: {
              x: "6",
              y: "20",
              width: "8",
              height: "8",
              fill: "currentColor"
            }
          },
          {
            tag: "rect",
            props: {
              x: "20",
              y: "14",
              width: "14",
              height: "14",
              rx: "2",
              fill: "currentColor"
            }
          }
        ]
      },
      title: "Fuse Series (SLS)",
      desc: "Industrial-grade SLS printers designed to produce durable functional parts, prototypes, tooling, and low-volume production components."
    }
  ],
  extraTags: [
    {
      heading: "Available Materials",
      tags: [
        "General Purpose",
        "Engineering",
        "High Temp",
        "Flexible",
        "Dental",
        "Medical",
        "Jewelry"
      ]
    },
    {
      heading: "Applications",
      tags: [
        "Rapid Prototyping",
        "Product Development",
        "Manufacturing",
        "Automotive",
        "Aerospace",
        "Healthcare",
        "Dental",
        "Education",
        "Jewelry"
      ]
    }
  ]
};

 // TabbedProductGrid — SLA / SLS tabs, each with a Packages / Post
 // Processing sub-tab, feeding a card grid  
 //
 // Any item can carry an optional `detail` object. If present,
 // clicking that card opens ProductDetailModal:
 //   - detail.variant: "gallery" → image carousel + specs +
 //     Key Features / Ideal For tabs  
 //   - detail.variant: "simple" → single image + heading +
 //     paragraph + CTA 
 // Items without `detail` behave exactly as before (no click).
export const ecosystemTabs = {
  bg: "cream",
  heading: "Formlabs 3D Printing: Precision Ecosystems Built for Every Workflow",
  center: true,
  groups: [
    {
      id: "sla",
      label: "SLA 3D Printing",
      subgroups: [
        {
          id: "printers",
          label: "Printers",
          items: [
            {
              // Add these five images in: SLA 3D Printing/Printers/
              // form-4l-01.webp through form-4l-05.webp
              img: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4l-01.webp",
              alt: "Form 4L",
              label: "Form 4L",
              detail: {
                variant: "gallery",
                title: "FORM 4L",
                tagline: "Where Speed Meets Precision",
                images: [
                  { src: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4l-01.webp", alt: "Form 4L front view" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4l-02.webp", alt: "Form 4L detail view" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4l-03.webp", alt: "Form 4L build platform" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4l-04.webp", alt: "Form 4L material system" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4l-05.webp", alt: "Form 4L rear view" }
                ],
                paragraphs: [
                  "The Form 4L's incredible speed is powered by Formlabs' state-of-the-art Low Force Display Print Engine, an ingenious combination of ultra-high-power LEDs, precision collimating lenses, optical filters, and a durable liquid crystal display.",
                  "This advanced system ensures rapid resin curing for every layer. With ultra-tight tolerances, every Form 4L print is consistently aligned with your exact design specifications."
                ],
                specs: [
                  { label: "Build Volume", value: "35.3 x 19.6 x 35.0 cm\n13.9 x 7.7 x 13.8 in" },
                  { label: "Technology", value: "Low Force Display (LFD)" }
                ],
                keyFeatures: [
                  { label: "Blazing Fast", text: "Large prints in under 6 hours." },
                  { label: "Large Build Area", text: "4.6 times larger build volume than Form 4." },
                  { label: "User-Friendly", text: "Automatic resin dispensing and easy-to-use software." },
                  { label: "Reliable", text: "Production-ready large-format 3D printing." },
                  { label: "Low Downtime", text: "Replaceable parts for minimal downtime." },
                  { label: "Big Parts", text: "Solve bigger problems with bigger parts." }
                ],
                idealFor: [
                  "Large engineering prototypes and functional parts",
                  "Production tooling, jigs, fixtures, and end-use components",
                  "Teams that need fast, reliable large-format resin printing"
                ],
                btnText: "Request a Quote",
                btnHref: "/contact"
              }
            },
            {
              // Add these four images in: SLA 3D Printing/Printers/
              // form-4bl-01.png and form-4bl-02.webp through form-4bl-04.webp
              img: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4bl-01.png",
              alt: "Form 4BL",
              label: "Form 4BL",
              detail: {
                variant: "gallery",
                title: "FORM 4BL",
                tagline: "Blazing Fast With Accurate Print Engine",
                images: [
                  { src: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4bl-01.png", alt: "Form 4BL front view" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4bl-02.webp", alt: "Form 4BL build platform" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4bl-03.webp", alt: "Form 4BL material system" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4bl-04.webp", alt: "Form 4BL detail view" }
                ],
                paragraphs: [
                  "The Form 4BL's lightning-fast performance is powered by Formlabs' cutting-edge Low Force Display Print Engine, a sophisticated blend of ultra-high-power LEDs, precision collimating lenses, optical filters, and a durable liquid crystal display.",
                  "This advanced technology rapidly cures each resin layer, regardless of part size or volume, ensuring flawless surface accuracy. From models to appliances and prosthetics, you can expect a perfect fit every time."
                ],
                specs: [
                  { label: "Build Volume", value: "35.3 x 19.6 x 35.0 cm\n13.9 x 7.7 x 13.8 in" },
                  { label: "Technology", value: "Low Force Display (LFD)" }
                ],
                keyFeatures: [
                  { label: "Versatile", text: "Industry-leading materials and an open platform." },
                  { label: "Stunning Parts", text: "Create stunning parts that always fit." },
                  { label: "Intuitive", text: "Anyone can learn the workflow in 15 minutes." },
                  { label: "Reliable", text: "Large-format 3D printing you can depend on." }
                ],
                idealFor: [
                  "Large parts needing biocompatibility and sterilization.",
                  "Full-size anatomical models, including pediatric and adult.",
                  "Medical device prototypes, jigs, fixtures, and end-use parts.",
                  "Surgeon-specific or patient-specific surgical tools.",
                  "Surgical planning models for FDA-cleared diagnostics."
                ],
                btnText: "Request a Quote",
                btnHref: "/contact"
              }
            },
            {
              // Add these four images in: SLA 3D Printing/Printers/
              // form-4-01.webp through form-4-04.webp
              img: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4-01.webp",
              alt: "Form 4",
              label: "Form 4",
              imageScale: 1,
              // Example of the GALLERY variant 
              detail: {
                variant: "gallery",
                title: "FORM 4",
                tagline: "Blazing Speed Meets Industrial Production",
                images: [
                  { src: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4-01.webp", alt: "Form 4 printer" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4-02.webp", alt: "Form 4 printed parts" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4-03.webp", alt: "Form 4 component detail" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4-04.webp", alt: "Form 4 precision part" }
                ],
                paragraphs: [
                  "Bring your ideas to life faster than ever with the Form 4 professional 3D printer ecosystem, offering streamlined workflows, exceptional reliability, and outstanding part quality.",
                  "The Form 4 is a blazing-fast masked SLA 3D printer, combining an industry-leading materials library with a highly accurate and dependable print engine. With tight tolerances, every resin-printed part consistently matches your design specifications."
                ],
                specs: [
                  { label: "Build Volume", value: "20.0 x 12.5 x 21.0 cm\n7.9 x 4.9 x 8.3 in" },
                  { label: "Technology", value: "Masked Stereolithography (MSLA)" }
                ],
                keyFeatures: [
                  { label: "Blazing Fast", text: "Complete most prints in under 2 hours." },
                  { label: "Versatile", text: "A wide range of resins for any application." },
                  { label: "Intuitive", text: "Learn to use it in just 15 minutes." },
                  { label: "Reliable", text: "Industry-leading print success rate." },
                  { label: "Accurate", text: "Precision that rivals injection-molded parts." }
                ],
                idealFor: [
                  "Rapid prototyping and production.",
                  "Rapid tooling and manufacturing aids.",
                  "Patterns for molds and casting.",
                  "High-precision model making."
                ],
                btnText: "Request a Quote",
                btnHref: "/contact"
              }
            },
            {
              // Add these four images in: SLA 3D Printing/Printers/
              // form-4b-01.webp through form-4b-04.webp
              img: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4b-01.webp",
              alt: "Form 4B",
              label: "Form 4B",
              imageScale: 1,
              detail: {
                variant: "gallery",
                title: "FORM 4B",
                tagline: "Blazing Speed Meets Surgical Precision",
                images: [
                  { src: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4b-01.webp", alt: "Form 4B printer" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4b-02.webp", alt: "Form 4B medical device part" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4b-03.webp", alt: "Form 4B dental application" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Printers/form-4b-04.webp", alt: "Form 4B medical model" }
                ],
                paragraphs: [
                  "Quickly create biocompatible, sterilizable anatomical models and medical devices with the Form 4B, a blazing-fast medical 3D printer designed for healthcare. Offering easy workflows, exceptional reliability, versatile materials, and stunning part quality, the Form 4B provides access to the most diverse materials library in the industry."
                ],
                specs: [
                  { label: "Build Volume", value: "20.0 x 12.5 x 21.0 cm\\n7.9 x 4.9 x 8.3 in" },
                  { label: "Technology", value: "Masked Stereolithography (MSLA)" }
                ],
                keyFeatures: [
                  { label: "Fast", text: "4x faster with 30% more build volume." },
                  { label: "Precise", text: "Delivers accurate prints, every time." },
                  { label: "Reliable", text: "Industry-leading print success rate." }
                ],
                idealFor: [
                  "Small to medium parts requiring biocompatibility and sterilization.",
                  "Medical device prototypes, jigs, fixtures, molds, and end-use parts.",
                  "Patient-specific anatomical models and surgical instruments.",
                  "Visual aids for diagnosis and education.",
                  "Surgical planning models for FDA-cleared diagnostic workflows."
                ],
                btnText: "Request a Quote",
                btnHref: "/contact"
              }
            }
          ]
        },
        {
          id: "post-processing",
          label: "Post Processing",
          items: [
            {
              // Add these four images in: SLA 3D Printing/Post Processing/
              // form-cure-l-v2-01.webp through form-cure-l-v2-04.webp
              img: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-cure-l-v2-01.webp",
              alt: "Form Cure L V2",
              label: "Form Cure L V2",
              detail: {
                variant: "simple",
                title: "FORM CURE L V2",
                imgFirst: false,
                heading: "Fastest, Most Consistent Large-Format Cure Unit Ever Built By Formlabs",
                images: [
                  { src: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-cure-l-v2-01.webp", alt: "Form Cure L V2 with cured part" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-cure-l-v2-02.webp", alt: "Form Cure L V2 orange curing chamber" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-cure-l-v2-03.webp", alt: "Form Cure L V2 rear view" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-cure-l-v2-04.webp", alt: "Form Cure L V2 side view" }
                ],
                paragraphs: [
                  "Form Cure L V2 precisely combines heat and 405 nm light to deliver tough, strong prints with unprecedented speed and consistency. Now you can post-cure large Form 4L/BL prints in as little as 60 seconds, with 5x more UV power, faster heat-up times, and a 26% reduction in overall footprint from the previous generation while curing up to 19% larger parts. To begin curing, just select a validated preset for Formlabs 45+ materials. Advanced users can customize time and temperature to fit their specific needs.",
                  "Post-curing completes the chemical reaction started during printing, enhancing final part strength, toughness, heat resistance, and creep resistance while creating a harder, less sticky surface.",
                  "For biocompatible materials, post-curing is necessary to achieve the safety standards determined by regulatory agencies.",
                  "The new Form Cure L V2 is the fastest, most consistent large-format cure unit ever built by Formlabs — designed to perfectly complement the Form 4 and 4L printers. It delivers production-ready parts in minutes with the speed, precision and reliability you can trust."
                ],
                keyFeatures: [
                  { label: "Faster, Smarter Post-Processing", text: "Cures large batches of parts in minutes instead of hours, freeing up operators and printers for more production runs per day. Customers reclaim hours of idle time and accelerate delivery, improving their cost per part and time-to-market." },
                  { label: "Predictable Quality", text: "Uniform, validated curing eliminates reprints and wasted materials. Every part meets production specs the first time, reducing scrap costs and workflow interruptions." },
                  { label: "Simplified Operation", text: "Preset cycles and intuitive controls make for a foolproof, even for new operators, cutting training time and preventing costly mistakes." }
                ],
                btnText: "Request a Quote",
                btnHref: "/contact"
              }
            },
            {
              // Add these four images in: SLA 3D Printing/Post Processing/
              // form-cure-2nd-gen-01.webp through form-cure-2nd-gen-06.webp
              img: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-cure-2nd-gen-01.webp",
              alt: "Form Cure 2nd Gen",
              label: "Form Cure 2nd Gen",
              detail: {
                variant: "simple",
                title: "FORM CURE 2ND GEN",
                imgFirst: false,
                heading: "Faster, Stronger, And More Precise Post-Curing",
                images: [
                  { src: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-cure-2nd-gen-01.webp", alt: "Form Cure 2nd Gen front view" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-cure-2nd-gen-02.webp", alt: "Form Cure 2nd Gen curing chamber" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-cure-2nd-gen-03.webp", alt: "Form Cure 2nd Gen orange curing chamber" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-cure-2nd-gen-04.webp", alt: "Form Cure 2nd Gen side view" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-cure-2nd-gen-05.webp", alt: "Form Cure 2nd Gen detail view" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-cure-2nd-gen-06.webp", alt: "Form Cure 2nd Gen additional view" }
                ],
                paragraphs: [
                  "The Form Cure 2nd Gen delivers 3-5x faster curing with enhanced UV light and heat exposure, ensuring stronger and more reliable parts.",
                  "With 48 multi-directional LEDs (compared to 13 in the previous generation), an upgraded 150W LED power, and 50W LED radiant power, it provides 5x more 405 nm photon exposure, significantly accelerating final polymerization. This results in superior mechanical properties, making it ideal for high-performance and biocompatible applications."
                ],
                keyFeatures: [
                  { label: "Nitrogen-Enabled Curing", text: "Integrated nitrogen port enhances curing efficiency and material properties by minimizing oxygen inhibition." },
                  { label: "Ultra-Fast Heating", text: "Reaches 60°C in <90 seconds, 80°C in <180 seconds, and 100°C in <270 seconds, ensuring rapid and consistent post-curing." },
                  { label: "Advanced Low-Warp Mode", text: "Reduces warping for materials like Tough 1500, 2000, Rigid 4K/10K, and Durable, maintaining dimensional accuracy while balancing mechanical properties." },
                  { label: "High-Intensity, Even Curing", text: "Equipped with 48 multi-directional LEDs, delivering 150W LED power and 5x more 405 nm photon exposure." },
                  { label: "Adaptive Curing Control", text: "Supports both standard and low-warp curing modes, allowing users to tailor settings based on material." }
                ],
                secondaryTabLabel: "Specifications",
                idealFor: [
                  "Printer Compatibility: Form 4, Form 4B, Form 3/+, Form 3B/+, Form 2",
                  "Dimensions: 33.7 × 35.6 × 40.4 cm (13.3 × 14.0 × 15.9 in)",
                  "Weight: 12.1 kg (26.7 lb)",
                  "Turntable Diameter: 23.5 cm (9.25 in)",
                  "Maximum Part Height: 205mm",
                  "Operating Temperature: Suggested 18—28 °C (64—82 °F)",
                  "Maximum post-cure temperature: 100 °C (212 °F)",
                  "UV LED electrical power: 150 W",
                  "UV LED radiant power: 50 W",
                  "LED Wavelength: 405 nm",
                  "Power Requirements: Input (NA): 100 - 120 VAC, 50-60Hz, 15A; Input (EU): 220 - 240 VAC, 50-60Hz, 8A"
                ],
                btnText: "Request a Quote",
                btnHref: "/contact"
              }
            },
            {
              // Add these four images in: SLA 3D Printing/Post Processing/
              // form-wash-2nd-gen-01.webp through form-wash-2nd-gen-04.webp
              img: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-wash-2nd-gen-01.webp",
              alt: "Form Wash (2nd Generation)",
              label: "Form Wash 2nd Gen",
              detail: {
                variant: "simple",
                title: "FORM WASH (2ND GENERATION)",
                imgFirst: false,
                heading: "Effortless Cleaning And Drying With Form Wash",
                images: [
                  { src: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-wash-2nd-gen-01.webp", alt: "Form Wash 2nd Generation front view" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-wash-2nd-gen-02.webp", alt: "Form Wash 2nd Generation build platform wash" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-wash-2nd-gen-03.webp", alt: "Form Wash 2nd Generation basket wash" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-wash-2nd-gen-04.webp", alt: "Form Wash 2nd Generation wash basket" }
                ],
                paragraphs: [
                  "Form Wash automates the cleaning of printed parts with IPA or alternative solvents, ensuring thorough and efficient results. Parts can be left on the Build Platform or placed in the wash basket. The impeller provides precise agitation, reaching every detail for a complete clean. After the wash cycle, Form Wash automatically raises the parts out of the solvent for effortless air drying, streamlining your post-processing workflow."
                ],
                keyFeatures: [
                  { label: "Adaptable to Build Platforms", text: "Adjustable mounts accommodate various platform sizes and configurations." },
                  { label: "Enhanced Agitation", text: "Delivers 3x more cleaning power for thorough part washing." },
                  { label: "Flexible Solvent Capacity", text: "Supports solvent volumes between 7-15 liters to optimize efficiency for different part sizes." },
                  { label: "Solvent Compatibility", text: "Designed for use with IPA, while also supporting alternative solvents like TPM." },
                  { label: "Automated Cleaning", text: "Set the wash time (default 10 minutes) and clean up to 120 prints per solvent refill for streamlined workflow." }
                ],
                secondaryTabLabel: "Specifications",
                idealFor: [
                  "Printer Compatibility: Form 4, Form 4B, Form 3/+, Form 3B/+, Form 2",
                  "Dimensions: 31.5 x 29.3 x 40.5 cm (12.4 x 11.5 x 15.9 in)",
                  "Height open: 71.4 cm (28.1 in)",
                  "Weight: 8.6 kg (18.9 lbs) without solvent",
                  "Bucket Volume: 14.4 L (3.8 US gal)",
                  "Maximum Part Size: 20 x 14.5 x 19.5 cm (7.9 x 5.7 x 7.6 in)",
                  "Included Accessories: Wash Bucket, Wash Basket, Hydrometer, 2x Platform Mounts",
                  "Power Requirements: 90–240 V, 2.0 A, 50/60 Hz, 50 W",
                  "Compatible Solvents: Formlabs Resin Washing Solution, IPA, TPM, Water"
                ],
                btnText: "Request a Quote",
                btnHref: "/contact"
              }
            },
            {
              // Add these four images in: SLA 3D Printing/Post Processing/
              // form-wash-l-01.webp through form-wash-l-04.webp
              img: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-wash-l-01.webp",
              alt: "Form Wash L",
              label: "Form Wash L",
              detail: {
                variant: "simple",
                title: "FORM WASH L",
                imgFirst: false,
                heading: "Automate SLA Cleaning With Form Wash L",
                images: [
                  { src: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-wash-l-01.webp", alt: "Form Wash L front view" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-wash-l-02.webp", alt: "Form Wash L front detail" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-wash-l-03.webp", alt: "Form Wash L open view" },
                  { src: "/assets/img/formlabs/SLA 3D Printing/Post Processing/form-wash-l-04.webp", alt: "Form Wash L build platform view" }
                ],
                paragraphs: [
                  "Form Wash L ensures thorough cleaning of SLA 3D printed parts by automating the washing process, delivering consistently smooth and high-quality results.",
                  "After the washing cycle, parts are automatically lifted from the solvent to air dry, preventing issues such as over-soaking and warping. The integrated solvent monitor alerts you when it's time to replace the solvent, maintaining optimal cleaning performance.",
                  "Compatible with all Formlabs SLA 3D printers, Form Wash L can wash one Form 3L build platform or two Form 3 build platforms simultaneously using the included adapter."
                ],
                keyFeatures: [
                  { label: "Quick Set-Up", text: "Move parts directly from the printer to Form Wash L or use the basket." },
                  { label: "Material Compatibility", text: "Auto-cleans parts based on selected Formlabs material." },
                  { label: "Thorough Cleaning", text: "Precision agitation ensures detailed cleaning." },
                  { label: "Automated Wash Cycle", text: "Parts are automatically raised out of IPA to prevent warping." }
                ],
                secondaryTabLabel: "Specifications",
                idealFor: [
                  "Printer Compatibility: Form 3L, Form 3BL, Form 4, Form 4B, Form 3/+, Form 3B/+, Form 2",
                  "Dimensions: 78.0 x 46.0 x 67.0 cm (30.7 x 18.1 x 26.4 in); Height when open: 113 cm (44.5 in)",
                  "Weight: 56.7 kg (125 lbs) (without solvent)",
                  "Bucket Volume: 43 L (11.4 US gal)",
                  "Maximum Part Size: 33.5 x 20 x 30 cm (13.2 x 7.9 x 11.8 in)",
                  "Suggested Operating Environment: 18—28 °C (64—82 °F)",
                  "Agitation Method: Magnetically coupled impeller",
                  "Included Accessories: Wash Bucket, Wash Basket, Electric Solvent Pump, Flexible Scraper, Scraper, Flush Cutters, Rinse Bottle, Gloves, Form 3 Build Platform adaptor",
                  "Power Requirements: Input (NA) 100 - 120 VAC, 50-60Hz, 1A; Input (EU) 220 - 240 VAC, 50-60Hz, 1A",
                  "Compatible Solvents: Formlabs Resin Washing Solution, IPA, TPM, Water"
                ],
                btnText: "Request a Quote",
                btnHref: "/contact"
              }
            }
          ]
        }
      ]
    },
    {
      id: "sls",
      label: "SLS 3D Printing",
      subgroups: [
        {
          id: "printers",
          label: "Printers",
          items: [
            {
              // Add this image in: SLS 3D Printing/Printers/fuse-x1-01.webp
              img: "/assets/img/formlabs/SLS 3D Printing/Printers/fuse-x1-01.webp",
              alt: "Fuse X1",
              label: "Fuse X1",
              detail: {
                variant: "simple",
                title: "FUSE X1",
                imgFirst: false,
                heading: "Industrial SLS Made Accessible",
                paragraphs: [
                  "Fuse X1 is a large-format industrial SLS 3D printer, built for engineers, manufacturers, and service bureaus looking to produce large prototypes and high-volume end-use parts with a faster turnaround. Its massive build volume and high packing density enable same-day large parts and 3x the throughput compared to competing platforms.",
                  "AI-powered Print Intelligence monitors jobs from first layer to final part to reduce failures. Setup takes about an hour, print-to-print changeover takes minutes, and the same end-to-end workflow handles extraction, powder reclaiming, and finishing — moving parts from printed to polished in as little as 15 minutes."
                ],
                specs: [
                  { label: "Technology", value: "Selective Laser Sintering (SLS) | Class 1 Laser Product" },
                  { label: "Build Volume", value: "330 × 330 × 565 mm | 13.0 × 13.0 × 22.2 in (61.5 L)" },
                  { label: "Layer Thickness", value: "110 microns | 0.004 in" }
                ],
                keyFeatures: [
                  { label: "Build Big", text: "Produce full-scale production-quality parts in a massive build volume or run production builds at over 30% packing density to manufacture thousands of end-use parts in days, not weeks." },
                  { label: "Low Part Cost", text: "Production parts for 50% less per part." },
                  { label: "Productive", text: "With 30%+ packing density and a 61.5L build volume, the Fuse X1 fits more parts in a single build than competing industrial SLS and MJF systems, adding up to thousands more parts per week." },
                  { label: "Intuitive and Reliable", text: "Fuse X1 fits through a standard door, doesn't require facility retrofit, and installs and prints on day one. An intuitive touchscreen guides you, while the build unit enables 5-minute changeovers." }
                ],
                idealFor: [
                  "Engineers, manufacturers, and service bureaus looking to produce large prototypes and high-volume end-use parts with a faster turnaround."
                ],
                btnText: "Request a Quote",
                btnHref: "/contact"
              }
            },
            {
              // Add this image in: SLS 3D Printing/Printers/fuse-x1-build-unit-01.webp
              img: "/assets/img/formlabs/SLS 3D Printing/Printers/fuse-x1-build-unit-01.webp",
              alt: "Fuse X1 Build Unit",
              label: "Fuse X1 Build Unit",
              detail: {
                variant: "simple",
                title: "FUSE X1 BUILD UNIT",
                imgFirst: false,
                heading: "Mobile Print Transfer And Cooling For Continuous Production",
                paragraphs: [
                  "The Fuse X1 build unit contains and transports prints throughout the Fuse X1 ecosystem. It is wheeled and mobile to easily move between the Fuse X1 during printing and Fuse Sift X1 for breakout, with blind-mate power and data connectors for ergonomic print changeovers. An insulated chamber allows the print to passively cool outside of the printer, enabling the next print to start with minimal downtime."
                ],
                btnText: "Request a Quote",
                btnHref: "/contact"
              }
            },
            {
              // Add this image in: SLS 3D Printing/Printers/fuse-x1-vacuum-conveyer-01.webp
              img: "/assets/img/formlabs/SLS 3D Printing/Printers/fuse-x1-vacuum-conveyer-01.webp",
              alt: "Fuse X1 Vacuum Conveyer",
              label: "Fuse X1 Vacuum Conveyer",
              detail: {
                variant: "simple",
                title: "FUSE X1 VACUUM CONVEYER",
                imgFirst: false,
                heading: "Automated Powder Transport For A Seamless Workflow",
                paragraphs: [
                  "Fuse X1 Vacuum Conveyor is the building block of the powder transport system. One unit on the Fuse X1 loads refreshed powder into the printer, and a second unit moves sifted reclaimed powder from the Fuse Sift X1 to the Mix Kit or mixing setup of your choice. Additional vacuum conveyors can be used to transport and manage powder as desired to minimize bottlenecks, such as storing powder in large format containers.",
                  "Each Vacuum Conveyor ships with mounting hardware and a vacuum hose. One Vacuum Conveyor is included with the Fuse X1 and one with the Fuse Sift X1."
                ],
                btnText: "Request a Quote",
                btnHref: "/contact"
              }
            },
            {
              // Add this image in: SLS 3D Printing/Printers/fuse-x1-mix-kit-01.webp
              img: "/assets/img/formlabs/SLS 3D Printing/Printers/fuse-x1-mix-kit-01.webp",
              alt: "Fuse X1 Mix Kit",
              label: "Fuse X1 Mix Kit",
              detail: {
                variant: "simple",
                title: "FUSE X1 MIX KIT",
                imgFirst: false,
                heading: "Automated Powder Mixing For Consistent Print Quality",
                paragraphs: [
                  "Fuse X1 Mix Kit simplifies powder management by automatically blending reclaimed powder from the Fuse Sift X1 with fresh supply at the precise refresh rate. An included scale ensures an accurate mixing ratio for every batch. Once mixed, the Fuse X1 Vacuum Conveyor loads the material into the printer for the next job. For high-volume operations, additional Vacuum Conveyors can be added for additional flexibility to transfer and store powder as desired."
                ],
                btnText: "Request a Quote",
                btnHref: "/contact"
              }
            },
            {
              // Add these four images in: SLS 3D Printing/Printers/
              // fuse-1-plus-30w-01.webp through fuse-1-plus-30w-04.webp
              img: "/assets/img/formlabs/SLS 3D Printing/Printers/fuse-1-plus-30w-01.webp",
              alt: "Fuse 1+ 30W",
              label: "Fuse 1+ 30W",
              detail: {
                variant: "simple",
                title: "FUSE 1+ 30W",
                imgFirst: false,
                heading: "Truly Rapid SLS 3D Printing, From Print To Finish",
                images: [
                  { src: "/assets/img/formlabs/SLS 3D Printing/Printers/fuse-1-plus-30w-01.webp", alt: "Fuse 1+ 30W printer" },
                  { src: "/assets/img/formlabs/SLS 3D Printing/Printers/fuse-1-plus-30w-02.webp", alt: "Fuse 1+ 30W accessory" },
                  { src: "/assets/img/formlabs/SLS 3D Printing/Printers/fuse-1-plus-30w-03.webp", alt: "Fuse 1+ 30W powder tool" },
                  { src: "/assets/img/formlabs/SLS 3D Printing/Printers/fuse-1-plus-30w-04.webp", alt: "Fuse 1+ 30W part sample" }
                ],
                paragraphs: [
                  "The Fuse 1+ 30W is a compact, industrial SLS 3D printer designed for high efficiency and minimal waste. It offers exceptional print speeds and broad material compatibility, enabling rapid in-house production. With user-friendly hardware and software, the Fuse 1+ 30W streamlines every step of the process, from setup to powder recovery, ensuring maximum output and efficiency."
                ],
                specs: [
                  { label: "Build Volume", value: "16.5 x 16.5 x 30 cm\n6.5 x 6.5 x 11.8 in" },
                  { label: "Technology", value: "Selective Laser Sintering (SLS)" }
                ],
                keyFeatures: [
                  { label: "Rapid Post-Processing", text: "Transition from print to finished parts in as little as 15 minutes." },
                  { label: "Fast Printing", text: "30W laser enables quick production of prototypes and small-series parts." },
                  { label: "Efficient Workflow", text: "Hands-off setup and processing streamline the production process." },
                  { label: "Same-Day Prototypes", text: "Quickly create and test prototypes within the same day." },
                  { label: "Durable Parts", text: "Manufacture industrial-grade end-use parts in under 24 hours." }
                ],
                idealFor: [
                  "Engineering teams that need fast, durable functional prototypes.",
                  "In-house production of end-use parts, jigs, fixtures, and tooling.",
                  "Small-batch manufacturing and same-day product development.",
                  "Teams seeking an accessible SLS workflow with minimal material waste."
                ],
                btnText: "Request a Quote",
                btnHref: "/contact"
              }
            }
          ]
        },
        {
          id: "post-processing",
          label: "Post Processing",
          items: [
            {
              // Add this image in: SLS 3D Printing/Post Processing/fuse-sift-x1-01.webp
              img: "/assets/img/formlabs/SLS 3D Printing/Post Processing/fuse-sift-x1-01.webp",
              alt: "Fuse Sift",
              label: "Fuse Sift",
              // Same SIMPLE variant as the "FUSE SIFT X1" reference
              detail: {
                variant: "simple",
                title: "FUSE SIFT X1",
                imgFirst: false,
                heading: "Automated Large-Format Powder Recovery For Uninterrupted Production",
                paragraphs: [
                  "Fuse Sift X1 is a large format powder recovery station that turns post-print into a clean, hands-off workflow. An integrated powder transport system moves used powder from the Sift X1 to the Mix Kit automatically, and an integrated compressed air inlet and gun helps recover powder from parts in seconds, replacing slow manual brushing.",
                  "The sealed glovebox keeps operators and the workspace clean at any build size, while a built-in parts hatch sends broken-out parts straight to a transfer bin to free up the bench. With capacity for 3 to 5 full builds of used powder, Fuse Sift X1 keeps high-volume operations moving without bottlenecking on cleanup."
                ],
                btnText: "Request a Quote",
                btnHref: "/contact"
              }
            },
            {
              // Add this image in: SLS 3D Printing/Post Processing/fuse-blast-high-capacity-kit-01.webp
              img: "/assets/img/formlabs/SLS 3D Printing/Post Processing/fuse-blast-high-capacity-kit-01.webp",
              alt: "Fuse Blast High Capacity Kit",
              label: "Fuse Blast High Capacity Kit",
              detail: {
                variant: "simple",
                title: "FUSE BLAST HIGH CAPACITY KIT",
                imgFirst: false,
                heading: "50% More Capacity For High-Volume Post-Processing",
                paragraphs: [
                  "Scale your post-processing throughput with the Fuse Blast High Capacity Kit, a drop-in upgrade for Fuse Blast that processes over 50% more parts per cycle than the standard basket. It's the recommended configuration for Fuse X1 users and multi-Fuse 1 Series fleets running large, frequent batches.",
                  "A wider 400 mm opening makes loading and unloading easier and more ergonomic, while the added volume prevents the overcrowding that can damage parts mid-cycle. Swap it into your existing Fuse Blast in minutes, with no tools or machine modifications required.",
                  "Fuse Blast High Capacity Kit pairs the Large Tumbler Basket with an extra Fuse Blast Large Tumbler Basket Liner Kit, so high-volume users can replace the liner without any downtime waiting on a separate order."
                ],
                btnText: "Request a Quote",
                btnHref: "/contact"
              }
            },
            {
              // Add these four images in: SLS 3D Printing/Post Processing/
              // fuse-sift-01.webp through fuse-sift-04.webp
              img: "/assets/img/formlabs/SLS 3D Printing/Post Processing/fuse-sift-01.webp",
              alt: "Fuse Sift",
              label: "Fuse Sift",
              detail: {
                variant: "simple",
                title: "FUSE SIFT",
                imgFirst: false,
                heading: "Convenient, Compact Powder Management",
                images: [
                  { src: "/assets/img/formlabs/SLS 3D Printing/Post Processing/fuse-sift-01.webp", alt: "Fuse Sift open view" },
                  { src: "/assets/img/formlabs/SLS 3D Printing/Post Processing/fuse-sift-02.webp", alt: "Fuse Sift powder recovery" },
                  { src: "/assets/img/formlabs/SLS 3D Printing/Post Processing/fuse-sift-03.webp", alt: "Fuse Sift part extraction" },
                  { src: "/assets/img/formlabs/SLS 3D Printing/Post Processing/fuse-sift-04.webp", alt: "Fuse Sift control panel" }
                ],
                paragraphs: [
                  "Our comprehensive powder management station, Fuse Sift, integrates part extraction, powder recovery, storage, and mixing into one streamlined device.",
                  "It automates the dispensing and blending of used and new powders, helping you minimize waste and maintain precise control over your powder supply."
                ],
                btnText: "Request a Quote",
                btnHref: "/contact"
              }
            },
            {
              // Add these four images in: SLS 3D Printing/Post Processing/
              // fuse-blast-01.webp through fuse-blast-04.webp
              img: "/assets/img/formlabs/SLS 3D Printing/Post Processing/fuse-blast-01.webp",
              alt: "Fuse Blast",
              label: "Fuse Blast",
              detail: {
                variant: "simple",
                title: "FUSE BLAST",
                imgFirst: false,
                heading: "Fully Automated Part Cleaning And Polishing",
                images: [
                  { src: "/assets/img/formlabs/SLS 3D Printing/Post Processing/fuse-blast-01.webp", alt: "Fuse Blast front view" },
                  { src: "/assets/img/formlabs/SLS 3D Printing/Post Processing/fuse-blast-02.webp", alt: "Fuse Blast finished part" },
                  { src: "/assets/img/formlabs/SLS 3D Printing/Post Processing/fuse-blast-03.webp", alt: "Fuse Blast polished part" },
                  { src: "/assets/img/formlabs/SLS 3D Printing/Post Processing/fuse-blast-04.webp", alt: "Fuse Blast part samples" }
                ],
                paragraphs: [
                  "Fuse Blast is a sophisticated automated finishing solution designed for SLS parts. It efficiently removes excess powder and consistently produces professional clean parts with a smooth, semi-gloss finish.",
                  "The Fuse Blast Polishing System ensures your parts are ready for dyeing, delivering exceptional surface quality every time."
                ],
                btnText: "Request a Quote",
                btnHref: "/contact"
              }
            }
          ]
        }
      ]
    }
  ]
};

 // StatBanner — big stat + download CTA over a background photo
 export const materialsBanner = {
  stat: "50+",
  statLabel: "Materials",
  sub: "Download the complete Formlabs material library and explore every resin and powder engineered for your industry.",
  btnText: "Download",
  btnHref: "/contact",
  image: "/assets/img/formlabs/fuse-blast-scene2.webp"
};

 export const faq = {
  items: [
    {
      q: "What 3D printing solutions does LRYPT Technologies offer?",
      a: "LRYPT Technologies provides Formlabs SLA and SLS 3D printing solutions, enabling businesses to create high-quality prototypes, functional parts, manufacturing tools, and end-use components with exceptional precision and reliability."
    },
    {
      q: "Which Formlabs 3D printers are available?",
      a: "We offer the complete Formlabs portfolio, including Form 4, Form 4B, Form 4L, Form 4BL, and the Fuse Series SLS printers, providing solutions for rapid prototyping, product development, and production applications."
    },
    {
      q: "Do you provide complete 3D printing workflows?",
      a: "Yes. Along with Formlabs printers, we provide integrated post-processing solutions including Form Wash, Form Cure, Fuse Sift, and Fuse Blast to ensure efficient workflows and professional-quality finished parts."
    },
    {
      q: "Which industries benefit from Formlabs 3D printing?",
      a: "Our 3D printing solutions support industries including manufacturing, automotive, aerospace, healthcare, dental, engineering, education, product design, jewelry, and research & development."
    },
    {
      q: "What materials are supported?",
      a: "Formlabs offers a wide range of materials, including General Purpose, Engineering, Tough, Flexible, High Temperature, Dental, Medical, Castable, and SLS Nylon powders to meet diverse application requirements."
    },
    {
      q: "Why choose LRYPT Technologies for Formlabs solutions?",
      a: "As a trusted technology partner, LRYPT Technologies provides expert consultation, product guidance, installation support, training, and after-sales assistance to help customers maximize the value of their Formlabs 3D printing investment."
    }
  ]
};

 export const cta = {
  heading: "Bring Your Ideas to Life",
  sub: "Transform concepts into high-quality prototypes and production-ready parts with LRYPT Technologies' Formlabs 3D printing solutions. Our experts provide end-to-end guidance—from selecting the right printer and materials to installation, training, and ongoing technical support—helping you achieve faster innovation, exceptional precision, and reliable manufacturing results.",
  btnText: "Get a Quote",
  btnHref: "/contact",
  image: "/assets/img/image29.jpeg"
};

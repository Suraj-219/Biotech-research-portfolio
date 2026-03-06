// Mock data for Megha Mohish - Biotechnology Portfolio

export const personalInfo = {
  name: "Megha Mohish",
  title: "M.Sc Biotechnology Student | Research Enthusiast",
  university: "Lovely Professional University",
  email: "megha.mohish@example.com",
  linkedin: "https://www.linkedin.com/in/meghamohish",
  researchgate: "https://www.researchgate.net/profile/Megha-Mohish",
  profileImage: "https://images.unsplash.com/photo-1579154392128-bf8c7ebee541",
  about: "Passionate biotechnology researcher with a strong foundation in molecular biology, bioinformatics, and genetic analysis. Currently pursuing M.Sc in Biotechnology at Lovely Professional University, I am dedicated to advancing scientific knowledge through innovative research in genomics and protein analysis. My academic journey combines rigorous laboratory training with computational biology, preparing me for impactful contributions to the field of biotechnology and pharmaceutical research."
};

export const skills = [
  { name: "Molecular Biology", level: 90, icon: "dna" },
  { name: "Bioinformatics", level: 85, icon: "binary" },
  { name: "Genomics", level: 88, icon: "layers" },
  { name: "Protein Analysis", level: 82, icon: "atom" },
  { name: "Cell Culture Techniques", level: 87, icon: "microscope" },
  { name: "Data Analysis", level: 84, icon: "bar-chart" },
  { name: "Scientific Research", level: 91, icon: "flask-conical" },
  { name: "Lab Techniques", level: 89, icon: "test-tube" }
];

export const projects = [
  {
    id: 1,
    title: "Bioinformatics Analysis of Gene Expression",
    description: "Comprehensive analysis of differential gene expression patterns in cancer cells using RNA-seq data. Implemented computational pipelines for identifying potential therapeutic targets.",
    tools: ["Python", "R", "BioPython", "BLAST"],
    impact: "Identified 15 novel gene markers with potential diagnostic applications",
    image: "https://images.unsplash.com/photo-1727091506059-69012c069173"
  },
  {
    id: 2,
    title: "DNA Sequencing and Variant Analysis",
    description: "Next-generation sequencing study focusing on genetic variants associated with hereditary diseases. Applied computational tools for variant calling and annotation.",
    tools: ["NGS", "GATK", "SAMtools", "IGV"],
    impact: "Analyzed 500+ genetic variants across multiple disease phenotypes",
    image: "https://images.unsplash.com/photo-1748263582756-082fe4adaa5b"
  },
  {
    id: 3,
    title: "Protein Structure Prediction Study",
    description: "Computational modeling of protein structures using homology modeling and molecular dynamics simulations to understand protein-ligand interactions.",
    tools: ["PyMOL", "MODELLER", "GROMACS", "AutoDock"],
    impact: "Predicted 3D structures of 20 therapeutic protein targets",
    image: "https://images.pexels.com/photos/4031321/pexels-photo-4031321.jpeg"
  },
  {
    id: 4,
    title: "Microbial Genome Analysis",
    description: "Comparative genomics study of microbial pathogens to identify antibiotic resistance genes and potential drug targets for novel antimicrobial therapies.",
    tools: ["MEGA", "Prokka", "Mauve", "CARD"],
    impact: "Characterized resistance mechanisms in 10 bacterial strains",
    image: "https://images.pexels.com/photos/35645522/pexels-photo-35645522.jpeg"
  }
];

export const education = [
  {
    degree: "M.Sc Biotechnology",
    institution: "Lovely Professional University (LPU)",
    duration: "2023 - Present",
    description: "Advanced studies in molecular biology, genetic engineering, and bioinformatics with focus on research methodology."
  },
  {
    degree: "B.Sc Biotechnology",
    institution: "University Name",
    duration: "2019 - 2023",
    description: "Foundation in biological sciences, chemistry, and basic biotechnology techniques."
  }
];

export const certifications = [
  {
    title: "Bioinformatics Specialization",
    issuer: "Coursera - UC San Diego",
    year: "2024",
    description: "Advanced training in computational biology and genomic data analysis"
  },
  {
    title: "Laboratory Techniques in Molecular Biology",
    issuer: "Professional Training Institute",
    year: "2023",
    description: "Hands-on certification in PCR, gel electrophoresis, and cloning techniques"
  },
  {
    title: "Research Methodology in Life Sciences",
    issuer: "Academic Institution",
    year: "2023",
    description: "Comprehensive training in scientific research design and analysis"
  },
  {
    title: "Good Laboratory Practices (GLP)",
    issuer: "Regulatory Body",
    year: "2022",
    description: "Certification in standard laboratory protocols and safety procedures"
  }
];

export const researchInterests = [
  "Genomics and Personalized Medicine",
  "Protein Engineering and Drug Design",
  "Bioinformatics and Computational Biology",
  "Cancer Genomics and Biomarker Discovery",
  "Microbial Biotechnology",
  "CRISPR and Gene Editing Technologies"
];

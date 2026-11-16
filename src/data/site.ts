export const site = {
  name: 'Ali AliAkbari',
  tagline: 'CFD, surrogate models & scientific machine learning',
  role: 'M.Sc. student, Fluids and Thermal Engineering',
  affiliation: 'University of Tehran · Turbomachinery Lab',
  location: 'Tehran, Iran',
  email: 'ali0aliakbari0@gmail.com',
  phone: '+98 933 828 6505',
  orcid: 'https://orcid.org/0009-0001-6400-0750',
  scholar: 'https://scholar.google.com/citations?user=CdAv0HIAAAAJ',
  github: 'https://github.com/Ali-AliAkbari',
  linkedin: 'https://www.linkedin.com/in/ali-aliakbari-602227167',
  cvPdf: '/files/Ali-AliAkbari-CV.pdf',
} as const;

export const intro = {
  headline: 'Designing turbomachinery with CFD, surrogates, and Bayesian optimization.',
  paragraphs: [
    'I am a master’s student at the University of Tehran, working with Dr. Amir Nejat on multi-objective optimization of computing-device fans. My thesis couples high-fidelity ANSYS CFD with machine-learning surrogates and adaptive Bayesian sampling.',
    'I am drawn to scientific machine learning, turbulence modeling, and optimization at the intersection of experiments and simulation—wind-tunnel validation, automated dataset generation, and geometry search under competing aerodynamic objectives.',
  ],
} as const;

export const education = [
  {
    degree: 'M.Sc., Fluids and Thermal Engineering',
    school: 'University of Tehran',
    place: 'Tehran, Iran',
    dates: 'Sep 2023 – Sep 2026',
    gpa: '17.34 / 20',
    note: 'Thesis: multi-objective fan optimization with CFD · Supervisor: Dr. Amir Nejat',
  },
  {
    degree: 'B.Sc., Mechanical Engineering',
    school: 'Babol Noshirvani University of Technology',
    place: 'Babol, Iran',
    dates: 'Sep 2019 – Jun 2023',
    gpa: '18.05 / 20',
    note: 'Project: vertical-axis wind turbine performance (ANSYS Fluent)',
  },
] as const;

export const interests = [
  'Scientific machine learning',
  'Deep learning for CFD',
  'Graph neural networks & generative models',
  'Turbulence & fluid mechanics',
  'Bayesian & CFD-based optimization',
] as const;

export const experience = [
  {
    title: 'Graduate Research Assistant',
    org: 'Turbomachinery Lab, University of Tehran',
    dates: 'Apr 2024 – Present',
    bullets: [
      'Automated Python–ANSYS CFD framework for surrogate-model datasets',
      'Bayesian and evolutionary multi-objective turbomachinery design',
      'Laboratory wind tunnel for fan aerodynamics (10–45 cm)',
    ],
  },
  {
    title: 'CFD Engineer',
    org: 'TABA Engineering & Service Co.',
    dates: 'Jul – Sep 2023',
    bullets: [
      'Industrial fan simulation with ANSYS CFX',
      'Sensitivity and robustness studies with OptiSLang',
    ],
  },
] as const;

export const publications = [
  {
    year: 2026,
    title:
      'Surrogate-Based Geometry Optimization of a Centrifugal Fan Volute: A Numerical and Experimental Study',
    authors: 'H. Khosravi Firozjaei, A. AliAkbari, A. Nejat, A. Riasi',
    venue: 'Results in Engineering',
    doi: 'https://doi.org/10.1016/j.rineng.2026.113540',
  },
  {
    year: 2025,
    title:
      'Numerical Investigation of Heat Transfer and Flow Resistance in Tubes with Flat Plate, Blunt Edge, and Airfoil Turbulators',
    authors: 'M. S. Abdollahi, A. AliAkbari, Y. Ma, R. Mohebbi',
    venue: 'The European Physical Journal Plus',
    doi: 'https://doi.org/10.1140/epjp/s13360-025-06539-y',
  },
] as const;

export const manuscript = {
  title:
    'A Comparative Study of Surrogate Models and Multi-Objective Optimization Algorithms for CFD-Based Axial Fan Optimization Using Adaptive Bayesian Optimization',
  authors: 'A. AliAkbari, A. Nejat',
  status: 'Manuscript in preparation · 2026',
} as const;

export const projects = [
  {
    slug: 'thesis-cfd-bayes',
    title: 'Automated CFD & Bayesian optimization',
    period: '2024 – present',
    summary:
      'Thesis codebase: dataset generation, surrogate comparison, adaptive sampling, and multi-heuristic Pareto search on trained models.',
    tags: ['Python', 'ANSYS', 'BoTorch', 'PyMOO'],
  },
  {
    slug: 'flow-superres',
    title: 'Turbulent flow super-resolution',
    period: '2025',
    summary:
      'PyTorch reimplementations of residual U-Net and Fukami DSM/MSM models for reconstructing fine turbulent fields from coarse CFD.',
    tags: ['PyTorch', 'CFD', 'Deep learning'],
  },
  {
    slug: 'ac-ns',
    title: '2D incompressible Navier–Stokes solver',
    period: '2024',
    summary: 'Artificial compressibility method for incompressible flow in Python.',
    tags: ['Python', 'Numerics'],
  },
  {
    slug: 'evolutionary-opt',
    title: 'Evolutionary optimization suite',
    period: '2025',
    summary: 'GA, PSO, WOA, GSA, and GWO on classical benchmark functions.',
    tags: ['Optimization', 'Python'],
  },
  {
    slug: 'nndl',
    title: 'Deep learning coursework',
    period: '2024',
    summary: 'CNNs, RNNs, Transformers, GANs, and VAEs from scratch in PyTorch.',
    tags: ['PyTorch', 'Coursework'],
  },
  {
    slug: 'orr-sommerfeld',
    title: 'Parallel-plate instability',
    period: '2023',
    summary: 'Chebyshev spectral solution of the Orr–Sommerfeld equation with sidewall suction.',
    tags: ['Spectral methods', 'Stability'],
  },
] as const;

export const skills = [
  { label: 'Languages', items: ['Python', 'MATLAB'] },
  {
    label: 'ML & computing',
    items: ['PyTorch', 'scikit-learn', 'BoTorch', 'NumPy', 'SciPy'],
  },
  { label: 'Optimization', items: ['PyMOO', 'OptiSLang', 'Optuna'] },
  { label: 'CFD & CAD', items: ['ANSYS CFX', 'STAR-CCM+', 'SOLIDWORKS', 'ICEM', 'TurboGrid'] },
  { label: 'Tools', items: ['Git', 'LaTeX', 'Linux', 'OriginPro'] },
] as const;

export const honors = [
  'Top 1% among 10,000 entrants, National M.Sc. Mechanical Engineering exam (Iran)',
  '3rd of 108, B.Sc. Mechanical Engineering, Babol Noshirvani University of Technology',
] as const;

export const service = ['Peer reviewer, Physics of Fluids (AIP), invited since 2025'] as const;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/cv/', label: 'CV' },
  { href: '/publications/', label: 'Research' },
  { href: '/projects/', label: 'Projects' },
] as const;
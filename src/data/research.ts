export type PaperStatus = 'draft' | 'submitted' | 'under-review' | 'accepted' | 'published';
export type StudyStatus = 'active' | 'planned' | 'completed';

export interface Paper {
  slug: string;
  title: string;
  authors: string[];
  venue?: string;
  year: number;
  status: PaperStatus;
  abstract: string;
  tags: string[];
  pdfUrl?: string;
  codeUrl?: string;
  dataUrl?: string;
  doiUrl?: string;
}

export interface Study {
  id: string;
  title: string;
  description: string;
  status: StudyStatus;
  paperSlugs: string[];
}

export const papers: Paper[] = [
  {
    slug: 'keep-asking-study-1',
    title: 'Keep Asking: Conversational Prompts and Active AI Engagement in Student Learning',
    authors: ['Michael Borck'],
    year: 2025,
    status: 'submitted',
    abstract: 'Investigates whether structured conversational prompts help students move beyond passive AI use toward active engagement. Tested with advanced frontier models, measuring depth of inquiry, iteration rates, and learning outcomes.',
    tags: ['AI in Education', 'Prompt Design', 'Student Engagement'],
    pdfUrl: undefined,       // placeholder — add when available
    codeUrl: undefined,      // placeholder — repo to be created
    dataUrl: undefined,      // placeholder — dataset to be released
  },
  {
    slug: 'cognitive-strategy-transfer',
    title: 'Cognitive Strategy Transfer Across AI-Assisted Learning Environments',
    authors: ['Michael Borck'],
    year: 2025,
    status: 'submitted',
    abstract: 'A four-paper framework examining how cognitive approaches developed in one AI-assisted context transfer to new domains. Studies metacognitive regulation, strategy adaptation, and the role of AI feedback in transfer.',
    tags: ['Cognitive Science', 'AI in Education', 'Transfer Learning'],
    pdfUrl: undefined,
    codeUrl: undefined,
    dataUrl: undefined,
  },
  {
    slug: 'dsr-ai-education-simulation',
    title: 'Design Science Research for AI-Powered Educational Simulation',
    authors: ['Michael Borck'],
    year: 2025,
    status: 'submitted',
    abstract: 'Applies the Design Science Research methodology to the development and evaluation of AI-powered workplace simulations for professional skills education. Reports design cycles, artefact evaluation, and generalised design principles.',
    tags: ['Design Science', 'Simulation', 'AI in Education'],
    pdfUrl: undefined,
    codeUrl: undefined,
    dataUrl: undefined,
  },
  {
    slug: 'educational-ai-chat-analysis',
    title: 'Patterns in Educational AI Chat Interactions: A Large-Scale Analysis',
    authors: ['Michael Borck'],
    year: 2025,
    status: 'submitted',
    abstract: 'Analyses interaction logs from AI-assisted learning environments to identify recurring patterns in student questioning behaviour, AI response quality, and correlation with learning outcomes.',
    tags: ['Learning Analytics', 'AI in Education', 'HCI'],
    pdfUrl: undefined,
    codeUrl: undefined,
    dataUrl: undefined,
  },
  {
    slug: 'deliberate-friction',
    title: 'Deliberate Friction as a Pedagogical Strategy in AI-Assisted Learning',
    authors: ['Michael Borck'],
    year: 2025,
    status: 'submitted',
    abstract: 'Explores whether intentionally introducing friction into AI-assisted workflows — slower responses, constrained outputs, forced reflection steps — improves long-term retention and metacognitive development.',
    tags: ['Pedagogy', 'AI in Education', 'Learning Design'],
    pdfUrl: undefined,
    codeUrl: undefined,
    dataUrl: undefined,
  },
  {
    slug: 'keep-asking-study-2',
    title: 'Keep Asking Study 2: Local Model Constraints and Engagement Parity',
    authors: ['Michael Borck'],
    year: 2026,
    status: 'draft',
    abstract: 'Tests whether students nudged toward deeper engagement with weaker local models can match the learning outcomes of un-nudged users working with frontier systems. Examines the role of model capability as a confound.',
    tags: ['AI in Education', 'Local Models', 'Prompt Design'],
    pdfUrl: undefined,
    codeUrl: undefined,
    dataUrl: undefined,
  },
  {
    slug: 'context-length-effects',
    title: 'Context Length Effects on Small Language Models for Consumer Hardware',
    authors: ['Michael Borck'],
    year: 2026,
    status: 'draft',
    abstract: 'Examines how model context window sizes impact performance, coherence, and throughput on consumer-grade GPU hardware. Establishes practical guidance for deploying local models in resource-constrained educational environments.',
    tags: ['Local Models', 'Benchmarking', 'Consumer Hardware'],
    pdfUrl: undefined,
    codeUrl: undefined,
    dataUrl: undefined,
  },
  {
    slug: 'perceived-intelligence-v-token-rate',
    title: 'Perceived Intelligence vs Token Rate in Local Language Models',
    authors: ['Michael Borck'],
    year: 2026,
    status: 'draft',
    abstract: 'Explores the relationship between a model\'s token generation speed and users\' perception of its intelligence and usefulness. Investigates whether slower models are systematically underestimated in educational contexts.',
    tags: ['HCI', 'Local Models', 'User Perception'],
    pdfUrl: undefined,
    codeUrl: undefined,
    dataUrl: undefined,
  },
];

export const studies: Study[] = [
  {
    id: 'keep-asking',
    title: 'Keep Asking',
    description: 'A two-study programme examining whether structured conversational nudges help students engage more deeply with AI — and whether that engagement transfers across model capability tiers.',
    status: 'active',
    paperSlugs: ['keep-asking-study-1', 'keep-asking-study-2'],
  },
  {
    id: 'cognitive-strategy-transfer',
    title: 'Cognitive Strategy Transfer',
    description: 'A four-paper framework examining how cognitive approaches transfer across AI-assisted learning environments. Covers metacognitive regulation, strategy adaptation, and the role of AI feedback.',
    status: 'active',
    paperSlugs: ['cognitive-strategy-transfer'],
  },
  {
    id: 'dsr-simulation',
    title: 'DSR AI Education Simulation',
    description: 'Design science research programme applying rigorous artefact-evaluation cycles to AI-powered professional simulation tools used in workplace readiness education.',
    status: 'active',
    paperSlugs: ['dsr-ai-education-simulation'],
  },
  {
    id: 'chat-analysis',
    title: 'Educational AI Chat Analysis',
    description: 'Large-scale analysis of interaction logs from AI-assisted learning environments, examining questioning patterns, response quality, and correlations with outcomes.',
    status: 'active',
    paperSlugs: ['educational-ai-chat-analysis'],
  },
  {
    id: 'deliberate-friction',
    title: 'Deliberate Friction',
    description: 'Investigates whether introducing intentional friction into AI-assisted workflows — slower responses, forced reflection, constrained outputs — improves long-term retention.',
    status: 'active',
    paperSlugs: ['deliberate-friction'],
  },
  {
    id: 'locobench',
    title: 'Consumer Hardware Benchmarking',
    description: 'Systematic performance testing of local language models across consumer GPU memory tiers — context length effects, token rate, and perceived intelligence.',
    status: 'active',
    paperSlugs: ['context-length-effects', 'perceived-intelligence-v-token-rate'],
  },
];

export const statusLabel: Record<PaperStatus, string> = {
  draft: 'Draft',
  submitted: 'Submitted',
  'under-review': 'Under Review',
  accepted: 'Accepted',
  published: 'Published',
};

export const statusColor: Record<PaperStatus, string> = {
  draft: '#5e5e63',
  submitted: '#6366f1',
  'under-review': '#f59e0b',
  accepted: '#10b981',
  published: '#10b981',
};

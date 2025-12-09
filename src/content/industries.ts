export const industries = [
  {
    id: 'legal',
    label: '/0.1',
    title: 'Legal',
    description: 'Civil litigation support, criminal defense and prosecution, family law cases, intellectual property theft investigations, and expert witness testimony.',
  },
  {
    id: 'corporate',
    label: '/0.2',
    title: 'Corporate',
    description: 'Executive misconduct investigations, data breach response, insider threat detection, M&A due diligence, and employee activity monitoring.',
  },
  {
    id: 'banks',
    label: '/0.3',
    title: 'Banks',
    description: 'Financial fraud investigations, transaction analysis, account compromise detection, regulatory compliance support, and internal audit assistance.',
  },
  {
    id: 'insurance',
    label: '/0.4',
    title: 'Insurance',
    description: 'Claims fraud investigations, cyber insurance validation, risk assessment, policy holder dispute resolution, and evidence verification.',
  },
  {
    id: 'entertainment',
    label: '/0.5',
    title: 'Entertainment',
    description: 'Digital piracy investigations, intellectual property protection, contract dispute support, and content theft detection across media platforms.',
  },
  {
    id: 'government',
    label: '/0.6',
    title: 'Government',
    description: 'Agency investigation support, law enforcement training services, critical infrastructure protection, and national security matters.',
  },
];

export type Industry = typeof industries[number];

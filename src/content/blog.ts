export const blogPosts = [
  {
    id: '1',
    title: 'The First 48 Hours: Critical Actions After a Data Breach',
    category: 'Incident Response',
    date: 'Dec 2024',
    excerpt: 'When a breach occurs, the immediate response determines the outcome. Our experts detail the essential steps organizations must take in the critical first 48 hours.',
    slug: 'first-48-hours-data-breach',
  },
  {
    id: '2',
    title: 'Extracting Evidence from Encrypted Messaging Apps',
    category: 'Mobile Forensics',
    date: 'Dec 2024',
    excerpt: 'Signal, WhatsApp, Telegram—encrypted messaging presents unique challenges. Learn how forensic investigators legally extract critical evidence.',
    slug: 'encrypted-messaging-evidence',
  },
  {
    id: '3',
    title: 'Expert Witness Testimony: What Makes Evidence Court-Admissible',
    category: 'Legal',
    date: 'Nov 2024',
    excerpt: 'Not all digital evidence stands up in court. Understand the forensic standards required for legal proceedings and how to maintain chain of custody.',
    slug: 'court-admissible-evidence',
  },
  {
    id: '4',
    title: 'Investigating Cloud Infrastructure: AWS, Azure, and GCP',
    category: 'Cloud Forensics',
    date: 'Nov 2024',
    excerpt: 'Cloud forensics requires specialized knowledge. Our investigators explain how to preserve evidence across distributed cloud environments.',
    slug: 'cloud-infrastructure-investigation',
  },
  {
    id: '5',
    title: 'Insider Threat Detection: A Corporate Investigation',
    category: 'Case Study',
    date: 'Nov 2024',
    excerpt: 'A Fortune 500 company suspected data exfiltration by an employee. How our team uncovered the truth through digital forensics.',
    slug: 'insider-threat-case-study',
  },
  {
    id: '6',
    title: 'Reverse Engineering Ransomware: Attribution and Recovery',
    category: 'Malware Analysis',
    date: 'Oct 2024',
    excerpt: 'When ransomware strikes, understanding the attack vector is critical. Learn how malware analysis helps organizations recover and prevent future attacks.',
    slug: 'ransomware-reverse-engineering',
  },
];

export type BlogPost = typeof blogPosts[number];

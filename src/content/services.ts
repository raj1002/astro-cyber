export const services = [
  {
    id: 'computer-forensics',
    title: 'Computer Forensics',
    description: 'Deep analysis of desktops, laptops, and servers. File system examination, registry analysis, artifact recovery, and deleted data restoration using industry-leading forensic tools and methodologies.',
    video: 'https://cdn.pixabay.com/video/2023/07/18/172314-846596230_large.mp4',
  },
  {
    id: 'mobile-forensics',
    title: 'Mobile Device Forensics',
    description: 'iOS and Android extraction and analysis. App data recovery, location history, deleted messages, encrypted communications, and cloud backup analysis for smartphones and tablets.',
    video: 'https://cdn.pixabay.com/video/2022/11/01/136661-765982825_large.mp4',
  },
  {
    id: 'cloud-forensics',
    title: 'Cloud & Email Forensics',
    description: 'Investigation of cloud storage and email platforms. O365, Google Workspace, AWS environments, SaaS applications, and webmail forensics with proper preservation and analysis.',
    video: 'https://cdn.pixabay.com/video/2023/05/30/165140-831682604_large.mp4',
  },
  {
    id: 'network-forensics',
    title: 'Network Forensics',
    description: 'Traffic analysis, intrusion detection, and network behavior analysis. Packet capture review, log analysis, and identification of attack vectors and data exfiltration patterns.',
    video: 'https://cdn.pixabay.com/video/2022/12/08/142719-778464219_large.mp4',
  },
  {
    id: 'incident-response',
    title: 'Incident Response',
    description: '24/7 rapid response to security incidents. Containment, evidence preservation, threat analysis, eradication support, and comprehensive incident documentation for critical situations.',
    video: 'https://cdn.pixabay.com/video/2023/03/28/156576-811961945_large.mp4',
  },
  {
    id: 'malware-analysis',
    title: 'Malware Analysis',
    description: 'Reverse engineering of malicious code. Static and dynamic analysis, capability assessment, indicator extraction, attribution support, and comprehensive threat intelligence reporting.',
    video: 'https://cdn.pixabay.com/video/2023/04/20/160244-820128088_large.mp4',
  },
  {
    id: 'expert-witness',
    title: 'Expert Witness Services',
    description: 'Court testimony, deposition support, and forensic report writing. Extensive experience in criminal and civil proceedings with 100% court admissibility rate and expert credentials.',
    video: 'https://cdn.pixabay.com/video/2022/10/13/135248-760732341_large.mp4',
  },
  {
    id: 'cyber-intelligence',
    title: 'Cyber Intelligence',
    description: 'Threat actor profiling, dark web monitoring, competitive intelligence, and strategic cyber intelligence for high-stakes investigations and organizational security decision-making.',
    video: 'https://cdn.pixabay.com/video/2023/06/06/166820-835186877_large.mp4',
  },
];

export type Service = typeof services[number];

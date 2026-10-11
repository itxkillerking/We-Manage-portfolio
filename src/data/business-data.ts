export const businessInfo = {
  name: 'WeManage Consultancy Services',
  contact: {
    whatsapp: '+923102328040',
    whatsappDisplay: '+92 310 2328040',
    email: 'ashfaq1174@gmail.com',
  },
  hero: {
    headlineLine1: 'Practical Solutions.',
    headlineLine2: 'Better Management.',
    headlineLine3: 'Stronger Business.',
    supporting: 'Your Business. Our Expertise.',
    description:
      'Practical, customized solutions for businesses, entrepreneurs and professionals across accounting, finance, tax, ERP, data management and business communication.',
  },
  about: {
    title: 'Business support built around your real requirements.',
    description1:
      'WeManage Consultancy Services supports businesses and professionals with practical solutions across accounting, finance, tax documentation, ERP systems, data management, business documentation and content communication.',
    description2:
      'Our focus is organization, accuracy, efficiency and useful management information.',
  },
};

export const coreServices = [
  {
    id: 'business-consultancy',
    title: 'Business Consultancy',
    shortDescription: 'Planning, organization and operational support.',
  },
  {
    id: 'accounting-bookkeeping',
    title: 'Accounting & Bookkeeping',
    shortDescription: 'Bookkeeping, reconciliations, financial records and reporting.',
  },
  {
    id: 'financial-reporting',
    title: 'Financial Reporting',
    shortDescription: 'Comprehensive financial statements and management reports.',
  },
  {
    id: 'tax-management',
    title: 'Tax Management',
    shortDescription: 'FBR-related documentation, income tax and sales tax support.',
  },
  {
    id: 'erp-solutions',
    title: 'ERP Solutions',
    shortDescription: 'Implementation and management of customized business systems.',
  },
  {
    id: 'excel-google-sheets',
    title: 'Excel & Google Sheets',
    shortDescription: 'Advanced spreadsheets, models, templates and dashboards.',
  },
  {
    id: 'data-management',
    title: 'Data Management',
    shortDescription: 'Business data organization and management reporting.',
  },
  {
    id: 'business-documentation',
    title: 'Business Documentation',
    shortDescription: 'Business documents, procedures and customized templates.',
  },
  {
    id: 'content-copywriting',
    title: 'Content & Copywriting',
    shortDescription: 'Company profiles, website content, social media and marketing copy.',
  },
  {
    id: 'virtual-business-support',
    title: 'Virtual Business Support',
    shortDescription: 'Remote administrative and ongoing business support.',
  },
];

export const industries = [
  {
    id: 'trading',
    title: 'Trading',
    features: ['Sales', 'Purchases', 'Inventory', 'Accounts'],
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    features: ['Production', 'Costing', 'Inventory', 'Reporting'],
  },
  {
    id: 'services',
    title: 'Services',
    features: ['Clients', 'Projects', 'Billing', 'Management'],
  },
  {
    id: 'startups',
    title: 'Startups & Entrepreneurs',
    features: ['Setup', 'Structure', 'Finance', 'Growth'],
  },
  {
    id: 'professionals',
    title: 'Professionals',
    features: ['Documentation', 'Billing', 'Taxes', 'Support'],
  },
];

export const erpTechnologies = [
  'Splendid Accounts',
  'Odoo',
  'QuickBooks',
  'BUSY',
  'IFS',
  'Tally',
  'Manager.io',
  'Microsoft Excel',
  'Google Sheets',
  'Microsoft Word',
  'Microsoft PowerPoint',
  'Google Workspace',
];

export const whyWeManage = [
  'Practical Approach',
  'Customized Solutions',
  'Integrated Expertise',
  'Technology-Enabled',
  'Clear & Organized',
  'Flexible Support',
];

export const ourApproach = [
  { step: '01', title: 'Understand' },
  { step: '02', title: 'Organize' },
  { step: '03', title: 'Develop' },
  { step: '04', title: 'Support' },
];

export function getServiceWhatsappUrl(serviceName: string) {
  const message = `Hello WeManage, I would like to discuss ${serviceName} services.`;
  return `https://wa.me/923102328040?text=${encodeURIComponent(message)}`;
}


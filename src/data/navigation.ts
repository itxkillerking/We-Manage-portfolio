import { coreServices, industries } from './business-data';

export type NavItem = {
  name: string;
  href: string;
  megaMenu?: { name: string; description: string; href: string; icon?: string }[];
  dropdown?: { name: string; href: string }[];
};

export const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    megaMenu: coreServices.map((s) => {
      let icon = 'Briefcase';
      if (s.id === 'business-consultancy') icon = 'Briefcase';
      if (s.id === 'accounting-bookkeeping') icon = 'Calculator';
      if (s.id === 'financial-reporting') icon = 'ChartColumn';
      if (s.id === 'tax-management') icon = 'ReceiptText';
      if (s.id === 'erp-solutions') icon = 'Database';
      if (s.id === 'excel-google-sheets') icon = 'Table2';
      if (s.id === 'data-management') icon = 'DatabaseZap';
      if (s.id === 'business-documentation') icon = 'FileText';
      if (s.id === 'content-copywriting') icon = 'PenLine';
      if (s.id === 'virtual-business-support') icon = 'Headset';
      return {
        name: s.title,
        description: s.shortDescription,
        href: `/services/${s.id}`,
        icon,
      };
    }),
  },
  {
    name: 'Industries',
    href: '/industries',
    dropdown: industries.map((i) => ({
      name: i.title,
      href: `/industries#${i.id}`,
    })),
  },
  { name: 'Why WeManage', href: '/why-wemanage' },
  { name: 'Contact Us', href: '/contact' },
];

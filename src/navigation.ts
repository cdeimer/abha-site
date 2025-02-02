import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'About Us', href: getPermalink('/coming-soon') },
    { text: 'Calendar', href: getPermalink('/coming-soon') },
    { text: 'Resources', href: getPermalink('/coming-soon') },
    { text: 'Get Involved', href: getPermalink('/coming-soon') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [{ text: '(c) ABHA 2025', href: getPermalink('/terms') }],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
};

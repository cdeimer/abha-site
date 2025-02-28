import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    //{ text: 'About Us', href: getPermalink('/coming-soon') },
    { text: 'Calendar', href: getPermalink('/calendar') },
    { text: 'Resources', href: getPermalink('/resources') },
    //{ text: 'Get Involved', href: getPermalink('/coming-soon') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [{ text: '(c) ABHA 2025', href: getPermalink('/terms') }],
  socialLinks: [
    { ariaLabel: 'Bluesky', icon: 'tabler:brand-bluesky', href: 'https://bsky.app/profile/abhousingaction.org' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/abhousing_action/' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/cdeimer' },
  ],
};

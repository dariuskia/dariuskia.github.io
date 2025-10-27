export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://dariuskia.github.io',
    title: 'Darius Kianersi',
    // subtitle: 'Nice to meet!',
    description: 'Darius Kianersi\'s personal website',
    // image: {
    //     src: '/dante-preview.jpg',
    //     alt: 'Dante - Astro.js and Tailwind CSS theme'
    // },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Writing',
            href: '/writing'
        },
        // {
        //     text: 'Resume',
        //     href: '/Darius_Kianersi_Resume.pdf'
        // },
        // {
        //     text: 'Tags',
        //     href: '/tags'
        // }
    ],
    footerNavLinks: [
        // {
        //     text: 'About',
        //     href: '/about'
        // },
        // {
        //     text: 'Contact',
        //     href: '/contact'
        // },
        // {
        //     text: 'Terms',
        //     href: '/terms'
        // },
        // {
        //     text: 'Dante Theme',
        //     href: 'https://github.com/JustGoodUI/dante-astro-theme'
        // }
    ],
    socialLinks: [
        {
            text: 'X',
            href: 'https://x.com/radiuskia'
        },
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/dariuskianersi/'
        },
        {
            text: 'Github',
            href: 'https://github.com/dariuskia'
        }
    ],
    hero: {
        title: 'Hi, and welcome!',
        text: "I'm Darius, a student at the University of Maryland, and previously a research engineer at <a target='_blank' href='https://cartesia.ai'>Cartesia</a>.\n\nI care about building AI systems that advance public good. Recently I've been exploring AI tools for democratic thought and collaboration.\n\nI currently live in San Francisco, where I enjoy strolling past <a target='_blank' href='https://en.wikipedia.org/wiki/Painted_ladies'>Victorian homes</a> I wish I lived in, frequenting late-night, cash-only <a target='_blank' href='https://maps.app.goo.gl/8Ej28j2E3n6Uf2W77'>taquerias</a> in the Mission, and watching dreamlike noir films at the <a target='_blank' href='https://www.roxie.com'>Roxie</a>.",
        // image: {
        //     src: '/berkeley.png',
        //     alt: 'With some friends at Panoramic Hill',
        //     caption: 'With some friends at Panoramic Hill, Berkeley, CA!'
        // },
        // actions: [
        //     {
        //         text: 'Contact',
        //         href: '/contact'
        //     }
        // ]
    },
    // subscribe: {
    //     title: 'Subscribe to Dante Newsletter',
    //     text: 'One update per week. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;

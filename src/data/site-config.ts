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
    subtitle: 'firstnamelastname@gmail.com',
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
        // title: 'Hi, and welcome!',
        text: `Hi! I'm Darius. I'm interested in how advanced AI systems can interact with institutions, governance, and collective decision-making to advance social good. Recently I've been studying AI-delegated deliberation with the 
<a target="_blank" href="https://cooperativeai.org">Cooperative AI Foundation</a> 
and 
<a target="_blank" href="https://www.pivotal-research.org">Pivotal Research</a>.

I've previously researched 
<a target="_blank" href="https://arxiv.org/abs/2603.01437">chain-of-thought interpretability</a> 
with the 
<a target="_blank" href="https://cbai.ai/">Cambridge AI Alignment Initiative</a> and worked as a research engineer at 
<a target="_blank" href="https://cartesia.ai">Cartesia</a>, 
where I trained and optimized large-scale text-to-speech models. I've also worked on large language model systems and research engineering through internships at 
<a target="_blank" href="https://www.nvidia.com">NVIDIA</a> 
and 
<a target="_blank" href="https://www.microsoft.com">Microsoft</a>.

Outside of research, I like thrifting clothes, reading fiction, and being a 
<a target="_blank" href="https://en.wikipedia.org/wiki/Fl%C3%A2neur">flâneur</a>.`,
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

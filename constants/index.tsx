import { MenuItem } from "@/types";

import {
  Code,
  Blocks,
  ChartPie,
  Files,
  UserRoundPen,
  GitFork,
  LaptopMinimal,
  ArrowBigDownDash,
  CreditCard,
  Twitter,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  ServerCrash,
  StickerIcon,
  Palette,
  Image,
  Power,
  Book,
  BookOpen,
  School2,
  Contact,
} from "lucide-react";

import {
  feature1,
  feature2,
  blog1,
  blog2,
  blog3,
  avatar1,
  avatar2,
  avatar3,
} from "@/assets";

// Header
export const navMenu: MenuItem[] = [
  {
    href: "/pricing",
    label: "Pricing",
  },
  {
    href: "/services",
    label: "Services",
    submenu: [
      {
        href: "/services/hosting",
        icon: <ServerCrash />,
        label: "Hosting Services",
        desc: "Reliable and secure web hosting tailored to your needs.",
      },
      {
        href: "/services/domain-names",
        icon: <StickerIcon />,
        label: "Domaine Names",
        desc: "Register and manage your unique domain name easily.",
      },
      {
        href: "/services/graphic-design",
        icon: <Palette />,
        label: "Graphic Design",
        desc: "Creative design services for your brand and marketing.",
      },
      {
        href: "/services/full-stack",
        icon: <Code />,
        label: "Full Stack Developement",
        desc: "Custom web and mobile development from frontend to backend.",
      },
    ],
  },
  {
    href: "/explore",
    label: "Explore",
    submenu: [
      {
        href: "/blog",
        icon: <Image />,
        label: "Our Blog",
        desc: "Insights, tips, and updates from our creative and dev team.",
      },
      {
        href: "/features",
        icon: <Power />,
        label: "Features",
        desc: "Discover powerful features that make our platform stand out.",
      },
      {
        href: "/our-story",
        icon: <Book />,
        label: "Our Story",
        desc: "Learn more about our journey, mission, and vision.",
      },
    ],
  },
  {
    href: "/support",
    label: "Supports",
    submenu: [
      {
        href: "/knowledge",
        icon: <BookOpen />,
        label: "Knowledge Base",
        desc: "Find answers and guides in our comprehensive knowledge base.",
      },
      {
        href: "/tuto",
        icon: <School2 />,
        label: "Tutorials",
        desc: "Step-by-step tutorials to help you get started quickly.",
      },
      {
        href: "/contacts",
        icon: <Contact />,
        label: "Contacts",
        desc: "Need help? Get in touch with our support team.",
      },
    ],
  },
];

// Hero
export const heroData = {
  sectionSubtitle: "All at one place",
  sectionTitle: "Smart Hosting & Domain",
  decoTitle: "Solutions",
  sectionText:
    "Simplify your online presence with our all-in-one platform — from domain registration to high-performance hosting, seamless management, and enterprise-grade support. Everything you need to succeed, in one place.",
};

// Feature
export const featureData = {
  sectionSubtitle: "Features",
  sectionTitle: "Discover Powerful Features",
  sectionText:
    "Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.",
  features: [
    {
      icon: <ChartPie size={15} />,
      iconBoxColor: "bg-blue-600/20",
      title: "Advance Analytics",
      desc: "Experience advanced analytics capabilities that enable you to dive deep into data, uncover meaningful patterns, and derive actionable insights",
      imgSrc: feature1,
      link: "/services/hoting",
    },
    {
      icon: <Files size={15} />,
      iconBoxColor: "bg-cyan-500/20",
      title: "Automated Reports",
      desc: "Save time and effort with automated reporting, generating comprehensive and accurate reports automatically, streamlining your data analysis",
      imgSrc: feature2,
      link: "/services/hoting",
    },
    {
      icon: <UserRoundPen size={15} />,
      iconBoxColor: "bg-yellow-500/20",
      title: "Retention Report",
      desc: "Enhance retention with our report, maximizing customer engagement and loyalty for business",
    },
    {
      icon: <GitFork size={15} />,
      iconBoxColor: "bg-red-500/20",
      title: "A/B Test Variants",
      desc: "Efficiently compare A/B test variants to determine the most effective strategies",
      link: "/services/hoting",
    },
    {
      icon: <Blocks size={15} />,
      iconBoxColor: "bg-purple-500/20",
      title: "Integration Directory",
      desc: "Seamlessly integrate with our directory, maximizing efficiency and unlocking the full potentials",
      link: "/services/hoting",
    },
  ],
};

// Process
export const processData = {
  sectionSubtitle: "How it works",
  sectionTitle: "Easy Process to Get Started",
  sectionText:
    "Discover how it works by leveraging advanced algorithms and data analysis techniques.",
  list: [
    {
      icon: <LaptopMinimal size={32} />,
      title: "Create your account",
      text: "Join us now and create your account to start exploring our platform and unlocking exciting features.",
    },
    {
      icon: <ArrowBigDownDash size={32} />,
      title: "Install our tracking app",
      text: "Install our tracking app to effortlessly monitor and manage your activities, gaining valuable insights and optimizing your performance.",
    },
    {
      icon: <CreditCard size={32} />,
      title: "Start tracking your website",
      text: "Start tracking your website effortlessly to gain valuable insights into visitor behavior, performance metrics, and optimization opportunities.",
    },
  ],
};

// Overview
export const overviewData = {
  sectionSubtitle: "Overview",
  sectionTitle: "All-In-One Analytics Tool",
  sectionText:
    "Powerful analytics made easy. Make data-driven decisions with our all-in-one tool.",
  listTitle: "More than 1M+ people around the world are already using",
  list: [
    {
      title: "1M+",
      text: "Active Downloads",
    },
    {
      title: "4.86",
      text: "Average Rating",
    },
    {
      title: "60K+",
      text: "Active Users",
    },
  ],
};

// Review
export const reviewData = {
  sectionSubtitle: "Reviews",
  sectionTitle: "What Our Customers Are Says",
  reviewCard: [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jane",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/james",
    },
  ],
};

// Blog
export const blogData = {
  sectionSubtitle: "Our Blog",
  sectionTitle: "Resource Center",
  sectionText:
    "Unlock the potential of our resource center, accessing valuable information and insights for your business growth.",
  blogs: [
    {
      imgSrc: blog1,
      badge: "Growth",
      title: "Why customer retention is the ultimate growth strategy?",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quo numquam repudiandae. Doloribus, voluptates amet corrupti modi fugiat commodi itaque consectetur expedita rerum enim, voluptas quaerat animi pariatur sequi error?",
      author: {
        avatarSrc: avatar1,
        authorName: "John Carte",
        publishDate: "Oct 10, 2024",
        readingTime: "8 min read",
      },
    },
    {
      imgSrc: blog2,
      badge: "Marketing",
      title: "Optimizing your advertising campaigns for higher ROAS",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quo numquam repudiandae. Doloribus, voluptates amet corrupti modi fugiat commodi itaque consectetur expedita rerum enim, voluptas quaerat animi pariatur sequi error?",
      author: {
        avatarSrc: avatar2,
        authorName: "Annette Black",
        publishDate: "Jul 15, 2024",
        readingTime: "5 min read",
      },
    },
    {
      imgSrc: blog3,
      badge: "Growth",
      title: "How to build the ultimate tech stack for growth",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quo numquam repudiandae. Doloribus, voluptates amet corrupti modi fugiat commodi itaque consectetur expedita rerum enim, voluptas quaerat animi pariatur sequi error?",
      author: {
        avatarSrc: avatar3,
        authorName: "Ralph Edwards",
        publishDate: "Mar 24, 2024",
        readingTime: "2 min read",
      },
    },
  ],
};

// Cta
export const ctaData = {
  text: "Start tracking your user analytics to boost your business",
};

// Footer
export const footerData = {
  links: [
    {
      title: "Product",
      items: [
        {
          href: "#",
          label: "Components",
        },
        {
          href: "#",
          label: "Pricing",
        },
        {
          href: "#",
          label: "Dashboard",
        },
        {
          href: "#",
          label: "Feature requests",
        },
      ],
    },
    {
      title: "Developers",
      items: [
        {
          href: "#",
          label: "Documentation",
        },
        {
          href: "#",
          label: "Discord server",
        },
        {
          href: "#",
          label: "Support",
        },
        {
          href: "#",
          label: "Glossary",
        },
        {
          href: "#",
          label: "Changelog",
        },
      ],
    },
    {
      title: "Company",
      items: [
        {
          href: "#",
          label: "About",
        },
        {
          href: "#",
          label: "Careers",
        },
        {
          href: "#",
          label: "Blog",
        },
        {
          href: "#",
          label: "Contact",
        },
      ],
    },
    {
      title: "Legal",
      items: [
        {
          href: "#",
          label: "Terms and Conditions",
        },
        {
          href: "#",
          label: "Privacy Policy",
        },
        {
          href: "#",
          label: "Data Processing Agreement",
        },
        {
          href: "#",
          label: "Cookie manager",
        },
      ],
    },
  ],
  copyright: "© 2024 codewithsadee",
  socialLinks: [
    {
      href: "https://x.com/codewithsadee_",
      icon: <Twitter size={18} />,
    },
    {
      href: "https://github.com/codewithsadee",
      icon: <Github size={18} />,
    },
    {
      href: "https://www.linkedin.com/in/codewithsadee/",
      icon: <Linkedin size={18} />,
    },
    {
      href: "https://www.instagram.com/codewithsadee",
      icon: <Instagram size={18} />,
    },
    {
      href: "https://www.youtube.com/codewithsadee",
      icon: <Youtube size={18} />,
    },
  ],
};

export const faqData = {
  sectionSubtitle: "FAQ",
  sectionTitle: "Most Asked question.",
  sectionText:
    "Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.",

  items: [
    {
      question: "What is TopAiglons?",
      res: "TopAiglons is an all-in-one platform that allows users to manage domains, hosting, and other web services from a single dashboard.",
    },
    {
      question: "How do I create an account?",
      res: "Simply click on the Sign Up button on the homepage and fill in your details. You’ll receive a confirmation email to activate your account.",
    },
    {
      question: "Can I manage multiple domains?",
      res: "Absolutely. You can register, renew, and manage multiple domains under one account.",
    },
    {
      question: "How can I reset my password?",
      res: "Click on “Forgot Password” at the login page, and follow the instructions sent to your email.",
    },
    {
      question: "Do you offer customer support?",
      res: "Yes, our support team is available 24/7 via live chat and email.",
    },
    {
      question: "Can I upgrade my plan anytime?",
      res: "Yes, you can upgrade or downgrade your plan directly from your dashboard.",
    },
    {
      question: "Do you offer email hosting?",
      res: "Yes, we offer email hosting as an optional add-on to all domain and hosting plans.",
    },
    {
      question: "Is there a free trial available?",
      res: "Yes, we offer a 7-day free trial on selected services. No credit card required.",
    },
    {
      question: "How do I connect my domain to a website builder?",
      res: "You can easily connect your domain to platforms like WordPress, Wix, or custom servers via our DNS settings panel.",
    },
    {
      question: "Can I cancel my subscription?",
      res: "Yes, you can cancel at any time. No long-term commitments.",
    },
    {
      question: " Do you provide backups?",
      res: "Yes, automatic backups are included in all premium hosting plans.",
    },
    {
      question: "What payment methods are accepted?",
      res: "We accept Visa, MasterCard, PayPal, mobile money, and bank transfers (varies by region).",
    },
    {
      question: " Do you support subdomains?",
      res: "Yes, you can create and manage unlimited subdomains from your dashboard.",
    },
    {
      question: "What happens if my domain expires?",
      res: "You’ll receive email reminders before expiration. We also offer a grace period for renewal.",
    },
    {
      question: "Can I transfer an existing domain to your platform?",
      res: "Yes, transferring is simple. Just unlock your domain at the current registrar and follow our transfer guide.",
    },
    {
      question: " Is there a mobile app available?",
      res: "A mobile app is in development. Meanwhile, our platform is fully responsive and works on all devices.",
    },
    {
      question: "How do I enable two-factor authentication (2FA)?",
      res: "Go to your account settings, then enable 2FA using an authenticator app like Google Authenticator or Authy.",
    },
    {
      question: "Where can I find documentation or tutorials?",
      res: "Visit our Help Center or Knowledge Base for guides, video tutorials, and API documentation ",
    },
  ],
};

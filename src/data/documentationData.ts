export interface DocChapter {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  sections: {
    heading: string;
    content: string[];
    codeSnippet?: string;
    tip?: string;
  }[];
}

export interface FAQItem {
  question: string;
  keywords: string[];
  answer: string;
  chapterRef: string;
}

export const gitbookChapters: DocChapter[] = [
  {
    id: 'welcome',
    title: 'Welcome & System Requirements',
    category: 'Getting Started',
    readTime: '3 min read',
    summary:
      'Introduction to OvaSabi CV WordPress Theme, hosting requirements, and package structure.',
    sections: [
      {
        heading: 'About OvaSabi CV WordPress Theme',
        content: [
          'OvaSabi CV is a premium CV, Resume, and vCard WordPress theme designed for developers, programmers, designers, freelancers, and creative technologists.',
          'The theme is built on a responsive double-card layout designed for developers, programmers, designers, freelancers, photographers, and architects.',
          'It features seamless dark/light modes, multiple background effects, Elementor page builder widgets, ACF Pro fields, and custom post types for portfolio and blog.',
        ],
        tip: 'Check your ThemeForest purchase receipt for your License Key to access automatic updates and demo imports.',
      },
      {
        heading: 'Server & WordPress Requirements',
        content: [
          'PHP Version: 7.4 or higher (PHP 8.1+ recommended).',
          'MySQL Version: 5.6 or higher (or MariaDB 10.1+).',
          'WordPress Memory Limit: 256MB minimum (512MB recommended for Elementor demo data import).',
          'Upload Max Filesize: 32MB or higher.',
          'Max Execution Time: 300 seconds.',
        ],
        codeSnippet: `// wp-config.php recommended settings
define( 'WP_MEMORY_LIMIT', '256M' );
define( 'WP_MAX_MEMORY_LIMIT', '512M' );`,
      },
    ],
  },
  {
    id: 'install-theme',
    title: 'Installing WordPress & Theme',
    category: 'Installation',
    readTime: '4 min read',
    summary:
      'Step-by-step instructions on uploading the ryancv.zip theme package via the WordPress dashboard or via FTP.',
    sections: [
      {
        heading: 'Method 1: WordPress Dashboard Installation (Recommended)',
        content: [
          '1. Log into your WordPress administration dashboard (wp-admin).',
          '2. Navigate to Appearance > Themes in the left sidebar.',
          '3. Click the "Add New Theme" button at the top, then click "Upload Theme".',
          '4. Choose the "ryancv.zip" file located in your downloaded ThemeForest package.',
          '5. Click "Install Now" and wait for WordPress to unpack the archive.',
          '6. Once installed, click "Activate" to set OvaSabi CV as your active theme.',
        ],
        tip: 'Ensure you are uploading "ovasabi-cv.zip" (the installable theme file), not the entire unzipped package containing documentation and PSD files.',
      },
      {
        heading: 'Method 2: FTP / SFTP Installation',
        content: [
          '1. Unzip the downloaded "ovasabi-cv.zip" archive on your local computer.',
          '2. Connect to your web hosting server via your favorite FTP client (FileZilla, Cyberduck, etc.).',
          '3. Navigate to the "/wp-content/themes/" directory.',
          '4. Upload the extracted "ovasabi-cv" folder into this directory.',
          '5. Once upload completes, log into wp-admin > Appearance > Themes and click "Activate" under OvaSabi CV.',
        ],
      },
    ],
  },
  {
    id: 'required-plugins',
    title: 'Installing Required & Recommended Plugins',
    category: 'Configuration',
    readTime: '4 min read',
    summary:
      'Overview of core plugins including Elementor, ACF Pro, OvaSabi CV Companion Plugin, One Click Demo Import, and MetForm.',
    sections: [
      {
        heading: 'Required Plugins Overview',
        content: [
          'Immediately upon activating OvaSabi CV, WordPress will display an admin notification prompting you to install recommended plugins.',
          '• Elementor Page Builder (Free): Used to edit all page layouts, vCard cards, and interactive blocks.',
          '• ACF Pro (Advanced Custom Fields PRO): Bundled with the theme at no extra cost; powers repeatable timeline items, skills, and layout options.',
          '• OvaSabi CV Plugin: The companion plugin providing custom Elementor widgets, custom post types (Portfolio, Resume, Testimonials), and theme features.',
          '• One Click Demo Import (OCDI): Powers the instant demo content replication.',
          '• Contact Form 7 / MetForm: Form builders for handling contact requests.',
          '• WooCommerce (Optional): Supported for selling digital products or physical goods.',
        ],
        tip: 'You do NOT need Elementor Pro. All required widgets and visual styles are bundled in the free version + OvaSabi CV companion plugin.',
      },
      {
        heading: 'Bulk Plugin Activation',
        content: [
          '1. In the admin notice, click "Begin installing plugins".',
          '2. Check the box at the top to select all plugins.',
          '3. From the Bulk Actions dropdown, select "Install" and click "Apply".',
          '4. Return to the Required Plugins installer page, select all plugins again, and choose "Activate".',
        ],
      },
    ],
  },
  {
    id: 'demo-import',
    title: 'One-Click Demo Content Import',
    category: 'Setup',
    readTime: '3 min read',
    summary:
      'Replicating the official OvaSabi CV demo layouts (Default, Dark, Minimal, Developer) with a single click.',
    sections: [
      {
        heading: 'How to Import Demo Data',
        content: [
          '1. Ensure OvaSabi CV, Elementor, ACF Pro, and OvaSabi CV Plugin are installed and activated.',
          '2. In the WordPress sidebar, go to Appearance > Import Demo Data.',
          '3. Browse the pre-built demo variations (Default Classic, Dark Developer, Modern Minimalist, Designer).',
          '4. Click the "Import Demo" button under your chosen variation.',
          '5. Review recommended extra plugins (or skip them) and click "Continue & Import".',
          '6. Wait 1–3 minutes while media, posts, portfolios, menus, and widgets are imported.',
        ],
        tip: 'If the import fails or times out, verify your hosting PHP max_execution_time is set to at least 300 seconds and memory_limit is 256M+.',
      },
    ],
  },
  {
    id: 'theme-options',
    title: 'Theme Options & Customizer',
    category: 'Customization',
    readTime: '5 min read',
    summary:
      'Managing global styling, accent colors, background variants, typography, and vCard profile fields.',
    sections: [
      {
        heading: 'Theme Options Navigation',
        content: [
          'Access settings via Dashboard > Appearance > Customize or Dashboard > Theme Options.',
          '• General Settings: Site logo, favicon, preloader animations, and layout style (vCard vs Full Width).',
          '• Styling & Colors: Primary accent color (Green, Orange, Blue, Violet, Rose, Sunset), dark/light default mode, custom CSS.',
          '• Backgrounds: Choose from Static Image, Video Background, Triangles / Polygon Particles, or Gradient Mesh.',
          '• Profile Information: Name, typed roles, avatar image, phone, email, address, and social links.',
          '• Typography: Google Fonts selection for headings and body prose.',
        ],
      },
      {
        heading: 'Configuring Animated Roles (Typewriter)',
        content: [
          'In Theme Options > Profile > Typing Subtitles, enter multiple roles separated by commas (e.g. "Web Designer, Developer, Freelancer").',
          'The front-end typewriter script will automatically cycle through each subtitle with configurable delay and typing speed.',
        ],
        codeSnippet: `// Comma-separated format in Theme Options
Web Designer, Full-Stack Engineer, Creative Technologist`,
      },
    ],
  },
  {
    id: 'elementor-widgets',
    title: 'Elementor Page Builder & Widgets',
    category: 'Page Building',
    readTime: '6 min read',
    summary:
      'Using OvaSabi CV custom Elementor widgets to build and adjust About, Resume, Skills, and Portfolio pages.',
    sections: [
      {
        heading: 'Custom OvaSabi CV Elementor Widgets',
        content: [
          '• OvaSabi: Services Box — Icon, service title, and description.',
          '• OvaSabi: Pricing Table — Plan name, price, feature checklist, and order button.',
          '• OvaSabi: Fun Facts / Milestones — Milestone counter with icon and label.',
          '• OvaSabi: Testimonials Slider — Review quotes with client avatar and company name.',
          '• OvaSabi: Resume Timelines — Chronological cards for experience and education.',
          '• OvaSabi: Skills with Progress Bars — Animated percentage meters with customizable bar color.',
          '• OvaSabi: Portfolio Grid — Filterable grid with isotope masonry and lightbox modal.',
        ],
      },
      {
        heading: 'Editing a Section with Elementor',
        content: [
          '1. Go to Pages > All Pages in WordPress.',
          '2. Find your homepage (e.g., "Home vCard") and click "Edit with Elementor".',
          '3. Click on any section or widget to modify text, upload images, or rearrange blocks.',
          '4. Click "Update" at the bottom of the Elementor panel to save live changes.',
        ],
      },
    ],
  },
  {
    id: 'portfolio-media',
    title: 'Portfolio & Media Types',
    category: 'Portfolio',
    readTime: '4 min read',
    summary:
      'Configuring portfolio items with image lightboxes, video popups (YouTube/Vimeo), and Soundcloud audio.',
    sections: [
      {
        heading: 'Supported Media Formats',
        content: [
          'OvaSabi CV supports 5 interactive portfolio formats:',
          '1. Standard Image / Gallery Lightbox: Opens high-res images in a responsive popup.',
          '2. Video Popup: Embeds YouTube, Vimeo, or HTML5 MP4 videos directly in the modal.',
          '3. Audio / Soundcloud: Plays streaming music or podcast tracks in an embedded player.',
          '4. Direct Link: Navigates straight to an external URL or live web application.',
          '5. Content Modal: Full case study view with client metadata, problem/solution text, and deliverables.',
        ],
      },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting & Support',
    category: 'Support',
    readTime: '3 min read',
    summary:
      'Fixing common errors, PHP memory issues, permalinks, and contacting support.',
    sections: [
      {
        heading: 'Common Solutions',
        content: [
          '• 404 Errors on Pages/Portfolio: Go to Settings > Permalinks and click "Save Changes" to refresh URL rewrite rules.',
          '• Demo Import Failed: Increase upload_max_filesize (32M+) and max_execution_time (300s+) in php.ini.',
          '• Missing Styling after Updates: Clear your browser cache and purge any caching plugin (WP Rocket, LiteSpeed, W3 Total Cache).',
        ],
        tip: 'Submit a ticket or visit our support portal for one-on-one assistance.',
      },
    ],
  },
];

export const gitbookFAQs: FAQItem[] = [
  {
    question: 'How do I install the OvaSabi CV WordPress theme?',
    keywords: ['install', 'installation', 'upload', 'zip', 'wordpress', 'how to install'],
    answer:
      'In your WordPress admin, navigate to Appearance > Themes > Add New > Upload Theme. Select the "ovasabi-cv.zip" file from your downloaded package and click "Install Now". After installation completes, click "Activate".',
    chapterRef: 'install-theme',
  },
  {
    question: 'Do I need Elementor Pro to use all OvaSabi CV features?',
    keywords: ['elementor', 'elementor pro', 'pro version', 'free elementor'],
    answer:
      'No! You only need the free version of Elementor. All custom vCard widgets, portfolio isotope filters, skills progress bars, and timeline blocks are bundled inside the custom OvaSabi CV companion plugin.',
    chapterRef: 'required-plugins',
  },
  {
    question: 'How do I import demo content with one click?',
    keywords: ['demo', 'import demo', 'one click', 'sample data', 'demo content'],
    answer:
      'First activate the theme and required plugins (Elementor, ACF Pro, OvaSabi CV Plugin, One Click Demo Import). Then go to Appearance > Import Demo Data in your WordPress sidebar, choose your preferred demo variation, and click "Import Demo".',
    chapterRef: 'demo-import',
  },
  {
    question: 'How do I change the accent color and dark/light mode?',
    keywords: ['accent color', 'color', 'dark mode', 'light mode', 'styling', 'theme options'],
    answer:
      'Go to Dashboard > Appearance > Customize or Dashboard > Theme Options > Styling & Colors. You can pick from preset accent colors (Emerald, Amber, Sky, Violet, Rose, Orange) or input a custom HEX code, and toggle the default dark or light theme.',
    chapterRef: 'theme-options',
  },
  {
    question: 'How do I configure the typewriter text in the profile card?',
    keywords: ['typewriter', 'typing', 'role', 'subtitle', 'profile', 'animated text'],
    answer:
      'In Theme Options > Profile > Typing Subtitles, enter your desired roles separated by commas (for example: "Web Designer, Full-Stack Developer, Freelancer"). The typing script will automatically cycle through each subtitle with smooth typing and deleting animations.',
    chapterRef: 'theme-options',
  },
  {
    question: 'What are the recommended server and PHP requirements?',
    keywords: ['requirements', 'php', 'memory limit', 'server', 'hosting', 'specs'],
    answer:
      'PHP 7.4 or higher (8.1+ recommended), MySQL 5.6+, WordPress memory limit of 256MB+ (512MB recommended for demo import), max_execution_time of 300 seconds, and upload_max_filesize of 32MB+.',
    chapterRef: 'welcome',
  },
  {
    question: 'How do I set up the contact form in OvaSabi CV?',
    keywords: ['contact form', 'form', 'contact', 'email', 'contact form 7', 'metform'],
    answer:
      'OvaSabi CV supports Contact Form 7 and MetForm. Use the pre-built contact form templates imported with the demo data, or insert the [contact-form-7] shortcode into your Contact page via Elementor.',
    chapterRef: 'required-plugins',
  },
  {
    question: 'Why do I see a 404 error when clicking portfolio or blog links?',
    keywords: ['404', 'error', 'permalink', 'not found', 'page broken'],
    answer:
      'This happens when WordPress rewrite rules have not refreshed. Go to Dashboard > Settings > Permalinks and click "Save Changes" without altering anything. This instantly flushes your rewrite cache and fixes the 404.',
    chapterRef: 'troubleshooting',
  },
];

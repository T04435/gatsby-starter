module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    description:
			'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
        icon_options: {
          // For all the options available, please see the additional resources below.
          purpose: `any maskable`,
        },
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Roboto Slab',
            subsets: ['latin'],
            variants: ['400', '700'],
          },
          {
            family: 'Roboto',
            variants: ['100', '400', '700'],
            subsets: ['latin'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-segment-js',
      options: {
        prodKey: process.env.SEGMENT_WRITE_KEY,
        devKey: process.env.SEGMENT_WRITE_KEY,
        trackPage: true,
      },
    },
  ],
};

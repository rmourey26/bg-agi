/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'Blocksquawk',
    Common: (process.env.NODE_ENV === 'development' ? '[DEV] ' : '') + 'Blocksquawk',
  },
  Meta: {
    Description: 'Blocksquawk custom AI development demo.',
    SiteName: 'Blocksquawk',
    ThemeColor: '#32383E',
    TwitterSite: '@blocksquawk',
  },
  URIs: {
    Home: 'https://blocksquawk.io',
    // App: 'https://blocksquawk.io',
    CardImage: 'https://blocksquawk.io/icons/card-dark-1200.png',
    OpenRepo: 'https://github.com/rmourey26/bg-agi',
    OpenProject: 'https://github.com/users/rmourey26/projects/4',
    SupportInvite: 'https://discord.gg/',
    // Twitter: 'https://www.twitter.com/r_mourey_jr',
    PrivacyPolicy: 'https://blocksquawk.io/privacy',
    TermsOfService: 'https://blocksquawk.io/terms',
  },
  Docs: {
    Public: (docPage: string) => `https://blocksquawk.io/docs/${docPage}`,
  }
} as const;
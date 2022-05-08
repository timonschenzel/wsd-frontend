const description = `Bouwen aan verandering.`
const title = `World Servants Doetinchem`
const url = `https://marketing-websites.withheadlesscms.com`

const seo = {
  title,
  titleTemplate: '%s | World Servants Doetinchem',
  description,
  openGraph: {
    description,
    title,
    type: 'website',
    url
  },
  twitter: {
    handle: '@WorldServants',
    site: '@WorldServants'
  }
}

export { seo as defaultSEO, url as defaultUrl }

// Define Static Page Routes

module.exports = [
  {
    slug: 'index',
    title: 'omar delarosa\'s website',
    template: 'index.pug'
  },
  {
    slug: 'bio',
    title: 'bio',
    markdown: 'bio.md'
  },
  {
    slug: 'code',
    title: 'code',
    template: 'code.pug',
    chunks: [ 'code' ]
  },
  {
    slug: 'contact',
    title: 'contact',
    markdown: 'contact.md'
  }
];

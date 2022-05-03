module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': ['error', {
      'ignores': [
        'Base',
        'Layout',
        'Link',
        'default',
        'Main',
        'Secondary',
        'Contact',
        'Follow',
        'index',
        'Container',
        'Card',
        'Title',
        'Carousel'
      ],
    }],
  },
}

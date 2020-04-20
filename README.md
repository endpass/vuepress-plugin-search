# @endpass/vuepress-plugin-search

> header-based search plugin for VuePress

## Installation

Install package with `npm`:

```
npm i --save @endpass/vuepress-plugin-search
```

Or via `yarn`:

```
yarn add @endpass/vuepress-plugin-search
```

## Usage

Update `plugins` section in your theme `index.js` file or into `.vuepress/config.js`:

```js
module.exports = {
  plugins: [
    '@endpass/vuepress-plugin-search',
    {
      searchMaxSuggestions: 10,
      test: '^(?!.*includes)\\S+.md$'
    }
  ]
}
```

Import and use comonent in your layouts and components:

```vue
<template>
  <search-box />
</template>

<script>
import SearchBox from '@endpass/vuepress-plugin-search/SearchBox'

export default {
  components: {
    SearchBox
  }
}
</script>
```

## Difference between original plugin

`test` accepts `string` or `string[]` and filters all results, not directories.

For example, if you want to leave `.md` files from `foo` directory, you should pass
`'^foo\/\\S+'` to `test` option.

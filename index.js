module.exports = (options) => ({
  define: {
    SEARCH_MAX_SUGGESTIONS: options.searchMaxSuggestions || 5,
    SEARCH_PATHS: options.test || null,
    SEARCH_FILTERS: options.test || null,
    SEARCH_HOTKEYS: options.searchHotkeys || ['s', '/']
  }
})

export const fetchSearches = query => {
  return $.ajax({
    url: `/api/searches`,
    data: {search: {query}}
  })
}
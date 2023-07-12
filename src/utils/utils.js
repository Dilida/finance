export function getQueryString(getString){
  const search = window.location.search;
  const params = new URLSearchParams(search);
  return params.get(getString); // bar
}

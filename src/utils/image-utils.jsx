function getImageURL(category, name) {
  return new URL(`../assets/images/${category}/${name}`, import.meta.url).href;
}

export { getImageURL };

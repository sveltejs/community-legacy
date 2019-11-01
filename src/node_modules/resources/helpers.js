// For now, this returns resources with any tag overlap.
// `tags` is a `Set`
export const filterResourcesByTags = (resources, tags) => {
  if (!tags || !tags.size) return resources;
  return resources.filter(resource => {
    for (const tag of resource.tags) {
      if (tags.has(tag)) return true;
    }
    return false;
  });
};

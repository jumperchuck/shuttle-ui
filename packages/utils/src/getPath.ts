export default function getPath(obj: any, path: unknown) {
  if (typeof path === 'number') {
    return obj?.[path] || null;
  }

  if (path && typeof path === 'string') {
    return (
      obj?.[path] ||
      path.split('.').reduce((acc, item) => (acc && acc[item] ? acc[item] : null), obj)
    );
  }

  return null;
}

export default function getPath(obj: any, path: any) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path
    .split('.')
    .reduce((acc, item) => (acc && acc[item] ? acc[item] : null), obj);
}

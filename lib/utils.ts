export function titleize(value: string) {
  return value
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (s) => s.toUpperCase())
    .replace(/Ui/g, 'UI')
    .replace(/Xr/g, 'XR')
    .replace(/Mdx/g, 'MDX');
}

export function slugToHref(slug: string[]) {
  return slug.length ? `/docs/${slug.join('/')}` : '/docs';
}

export function headingId(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[`]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

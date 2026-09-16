export function EditPageLink({ href }: { href: string }) {
  return (
    <a href={href} className="edit-page-link" target="_blank" rel="noreferrer">
      Edit this page
    </a>
  );
}

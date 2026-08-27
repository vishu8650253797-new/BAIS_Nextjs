type IconProps = { className?: string };

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.5h2.5l.5-3H13.5V8.25c0-.87.24-1.46 1.5-1.46h1.6V4.14C16.3 4.1 15.4 4 14.36 4c-2.2 0-3.86 1.34-3.86 3.8V10.5H8v3h2.5V21h3z" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.9 3H21.7l-6.1 7 7.2 9.5h-5.6l-4.4-5.8-5 5.8H4.9l6.5-7.5L4.5 3h5.7l4 5.3L18.9 3zm-1 15h1.5L8.2 4.7H6.6L17.9 18z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0zM3.34 8.75h3.2V21h-3.2V8.75zM9.5 8.75h3.07v1.68h.04c.43-.8 1.47-1.65 3.02-1.65 3.23 0 3.83 2.08 3.83 4.79V21h-3.2v-5.75c0-1.37-.03-3.13-1.9-3.13-1.92 0-2.21 1.5-2.21 3.03V21H9.5V8.75z" />
    </svg>
  );
}

import DOMPurify from 'dompurify';

export function decodeAndSanitize(input: string): string {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = input;
  const decoded = textarea.value;

  return DOMPurify.sanitize(decoded, {
    ALLOWED_TAGS: ['b', 'strong', 'i', 'u', 'em', 'mark'],
    ALLOWED_ATTR: [],
  });
}

import Link from 'next/link';
import Notice from '@app/components/Notice';

export default function NotFound() {
  return (
    <Notice>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </Notice>
  );
}

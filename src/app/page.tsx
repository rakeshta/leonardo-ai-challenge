import { redirect } from 'next/navigation';

export default async function Page() {
  // redirect to /media
  redirect('/media');

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}

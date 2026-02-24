import { redirect } from 'next/navigation';

export default function RetiraRedirect() {
  // Short/legacy route that forwards to the current pickup/express page.
  redirect('/retirada-expressa');
}


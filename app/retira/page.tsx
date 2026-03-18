import { redirect } from 'next/navigation';
import { ROUTES } from '../../lib/routes';

export default function RetiraRedirect() {
  // Short/legacy route that forwards to the current pickup/express page.
  redirect(ROUTES.pickupExpress);
}


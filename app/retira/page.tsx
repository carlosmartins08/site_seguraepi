import { permanentRedirect } from 'next/navigation';
import { ROUTES } from '../../lib/routes';

export default function RetiraRedirect() {
  // Legacy path kept for backward compatibility.
  permanentRedirect(ROUTES.pickupExpress);
}


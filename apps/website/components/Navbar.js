import * as React from 'react';
import RecodableLogo from './RecodableLogo';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="border-b mx-12 py-4">
      <Link href="/">
        <a>
          <RecodableLogo className="h-8 mx-auto" />
        </a>
      </Link>
    </nav>
  );
}

export default Navbar;

import * as React from 'react';
import RecodableLogo from './RecodableLogo';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="border-b mx-12 py-4">
      <Link to="/">
        <RecodableLogo className="h-8 mx-auto" />
      </Link>
    </nav>
  );
}

export default Navbar;

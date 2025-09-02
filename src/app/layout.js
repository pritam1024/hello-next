import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>
          &copy; {new Date().getFullYear()} Pritam. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;

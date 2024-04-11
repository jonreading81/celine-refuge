const LANGS = {
  'en-gb': 'en-GB',
  'fr-fr': 'fr-FR',
};

const Layout = ({ params, children }) => (
  <html lang={LANGS[params.lang]}>
    <body>{children}</body>
  </html>
);

export default Layout;

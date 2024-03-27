const Layout = ({ params, children }) => (
  <html lang={params.lang}>
    <body>{children}</body>
  </html>
);

export default Layout;

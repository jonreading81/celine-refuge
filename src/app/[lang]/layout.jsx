const Layout = ({ params, children }) => {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
};

export default Layout;

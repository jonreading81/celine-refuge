const Notice = ({ children }) => (
  <div class="flex h-screen">
    <div class="m-auto">
      <div className="max-w-md text-center">{children}</div>
    </div>
  </div>
);

export default Notice;

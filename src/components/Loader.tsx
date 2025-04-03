export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <img
        src="/loader.gif"
        title="loader"
        alt="loader"
        className="w-auto h-[30%]"
      />
    </div>
  );
}

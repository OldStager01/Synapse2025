import Navbar from "@/components/Navbar";

export default function Header() {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full text-center shadow-lg z-50">
      <div className="flex items-center justify-between ">{<Navbar />}</div>
    </div>
  );
}

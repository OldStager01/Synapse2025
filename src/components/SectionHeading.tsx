export default function SectionHeading({ children }: { children: string }) {
  return (
    <h2
      className="text-5xl md:text-6xl font-extrabold uppercase text-yellow-400 text-center relative inline-block
               px-6 py-2 tracking-wide
               before:absolute before:content-['EVENTS'] before:-left-1 before:-top-1 before:text-black 
               before:z-[-1] before:drop-shadow-[3px_3px_0_rgba(255,0,0,1)] 
               after:absolute after:content-['EVENTS'] after:left-1 after:top-1 after:text-white after:z-[-2] 
               after:drop-shadow-[5px_5px_0_rgba(255,255,255,0.2)]"
    >
      {children}
    </h2>
  );
}

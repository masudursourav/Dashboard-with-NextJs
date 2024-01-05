export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grow border-4 border-rose-500 p-6 md:overflow-y-auto md:p-12	">
      {children} Hello world from invoice layout
    </div>
  );
}

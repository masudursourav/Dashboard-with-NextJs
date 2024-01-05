export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grow border-4 border-indigo-500/100 p-6 md:overflow-y-auto md:p-12	">
      {children} Hello world from customer layout
    </div>
  );
}

import { Navbar } from "./_components/navbar";

interface ProtectedlayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedlayoutProps) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-800 to-indigo-950">
        <Navbar/>
      {children}
    </div>
  );
};

export default ProtectedLayout;

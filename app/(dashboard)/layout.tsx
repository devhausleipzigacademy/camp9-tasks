import Sidebar from "@/components/dashboard/Sidebar";
import GlassPane from "@/components/shared/GlassPane";

export default function Layout({ children }: Layout) {
  return (
    <GlassPane className="flex">
      <Sidebar />
      {children}
    </GlassPane>
  );
}

import DashboardContent from "@/components/dashboard-content";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="">
      <Header title={'Dashboard'} />
      <main className="flex-1 bg-gray-100 p-6">
          <DashboardContent />
          
        </main>
    </div>
  );
}

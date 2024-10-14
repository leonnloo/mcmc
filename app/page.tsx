import DashboardContent from '@/components/dashboard-content';
import Header from '@/components/header';

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      <Header title={'Dashboard'} />
      <main className="flex-1 w-full">
        <DashboardContent />
      </main>
    </div>
  );
}

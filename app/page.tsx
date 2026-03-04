import { AppbarChart } from "@/components/AppbarChart";
import { ChartAreaGradient } from "@/components/AreaChart";
import { DashboardListCard } from "@/components/DashBoardList";
import { ChartPieDonutText } from "@/components/PieChart";
import Image from "next/image";


export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
      <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2">
        <AppbarChart />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <ChartPieDonutText/>
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <DashboardListCard title="Latest Transactions"/>
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">Test</div>
      <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2">
        <ChartAreaGradient />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
         <DashboardListCard title="Popular Content"/>
      </div>
    </div>
  );
}

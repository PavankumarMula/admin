import { AppbarChart } from "@/components/AppbarChart";
import { ChartAreaGradient } from "@/components/AreaChart";
import { CardList } from "@/components/DashBoardList";
import { ChartPieDonutText } from "@/components/PieChart";
import {TodoList} from '@/components/TodoList';


export default function Home() {
  return (
  <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-4">

    <div className="bg-primary-foreground p-4 rounded-lg xl:col-span-1">
      <AppbarChart />
    </div>

    <div className="bg-primary-foreground p-4 rounded-lg">
      <CardList title="Latest Transactions" />
    </div>

    <div className="bg-primary-foreground p-4 rounded-lg">
      <ChartPieDonutText />
    </div>

    <div className="bg-primary-foreground p-4 rounded-lg">
      <TodoList />
    </div>

    <div className="bg-primary-foreground p-4 rounded-lg xl:col-span-1">
      <ChartAreaGradient />
    </div>

    <div className="bg-primary-foreground p-4 rounded-lg">
      <CardList title="Popular Content" />
    </div>

  </div>
);
}

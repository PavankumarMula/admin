import { AppbarChart } from "@/components/AppbarChart";
import { ChartAreaGradient } from "@/components/AreaChart";
import { CardList } from "@/components/DashBoardList";
import { ChartPieDonutText } from "@/components/PieChart";
import {TodoList} from '@/components/TodoList';


export default function Home() {
  return (
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
     <div className="bg-primary-foreground p-4 rounded-lg md:col-span-2 xl:col-span-2 2xl:col-span-2">
        <AppbarChart />
      </div>
       <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Latest Transactions"/>
      </div>
     <div className="bg-primary-foreground p-4 rounded-lg">
        <ChartPieDonutText/>
      </div>
    
      <div className="bg-primary-foreground rounded-lg p-2">
        <TodoList/>
      </div>
       <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <ChartAreaGradient />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
         <CardList title="Popular Content"/>
      </div>
    </div>
  );
}

import Features from "../../components/featured/Features";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummy";
import WidgetSmall from "../../components/widgetsmall/WidgetSmall";
import WidgetLarge from "../../components/widgetlarge/WidgetLarge";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Features />
      <Chart
        data={userData}
        dataKey="Active User"
        title="User Analytics"
        grid
      />
			<div className="widgets">
				<WidgetSmall/>
				<WidgetLarge/>
			</div>
    </div>
  );
};

export default Home;

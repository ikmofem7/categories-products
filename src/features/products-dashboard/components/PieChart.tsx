import { FC } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type Props = { options: Highcharts.Options };
const PieChart: FC<Props> = (props) => {
  const { options } = props;
  return (
    <div className="chart-container">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart;

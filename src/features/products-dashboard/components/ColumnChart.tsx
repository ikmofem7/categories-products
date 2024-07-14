import { FC } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

type Props = {
  data: Array<
    number | [string, number | null] | null | Highcharts.PointOptionsObject
  >;
};
const PieChart: FC<Props> = (props) => {
  const { data } = props;
  const options: Highcharts.Options = {
    chart: {
      type: "pie",
      width: 600, // Set the desired width here
    },
    title: {
      text: "Categories",
    },
    series: [
      {
        type: "pie",
        data: data,
      },
    ],
  };
  return (
    <div className="chart-container">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart;

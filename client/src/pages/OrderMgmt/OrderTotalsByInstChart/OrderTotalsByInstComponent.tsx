import './OrderTotalsByInstComponent.css';

export const OrderMgmtOrderTotalsByInstChart: React.FC = () => {
const chartConfig: {
radius: number;
    angleField: string;
    colorField: string;
  } = {
radius: 0.75,
    angleField: 'value',
    colorField: 'groupBy',
  };

  return (
    <rapid-g2plot-chart
      type="pie"
      config={chartConfig}
    >
      <chart-datasource
        resourceName="ALL_ORDER_TOTAL_BY_INSTS"
        server-fields="SYMBOL TOTAL_QUANTITY_ORDERED"
      ></chart-datasource>
    </rapid-g2plot-chart>
  );
};
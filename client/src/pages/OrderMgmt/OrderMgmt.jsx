import './OrderMgmt.css';
import { OrderMgmtOrderMgmtManager } from './OrderMgmtManager';
import { OrderMgmtOrderTotalsByInstChart } from './OrderTotalsByInstChart';

const OrderMgmt = () => {

  return (
    <section className="order-mgmt-page">
      <rapid-layout auto-save-key={process.env.NODE_ENV === 'production' ? "Order Mgmt_1725961883864" : null}>
        <rapid-layout-region>
          <rapid-layout-item title="Order Mgmt">
            <OrderMgmtOrderMgmtManager></OrderMgmtOrderMgmtManager>
          </rapid-layout-item>
          <rapid-layout-item title="Order Totals By Inst">
            <OrderMgmtOrderTotalsByInstChart></OrderMgmtOrderTotalsByInstChart>
          </rapid-layout-item>
        </rapid-layout-region>
      </rapid-layout>
    </section>
  );
};

export default OrderMgmt;

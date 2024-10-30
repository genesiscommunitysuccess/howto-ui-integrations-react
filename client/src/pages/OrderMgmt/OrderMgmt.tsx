import './OrderMgmt.css';
import { persistLayout } from '../../utils';
import { OrderMgmtOrderMgmtManager } from './OrderMgmtManager';
import { OrderMgmtOrderTotalsByInstChart } from './OrderTotalsByInstChart';

const OrderMgmt = () => {
  return (
    <section className="order-mgmt-page">
      <rapid-layout auto-save-key={persistLayout('Order Mgmt_1730290865679')}>
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

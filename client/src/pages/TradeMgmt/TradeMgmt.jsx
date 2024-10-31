import './TradeMgmt.css';
import { TradeMgmtTradeMgmtManager } from './TradeMgmtManager';

const TradeMgmt = () => {

  return (
    <section className="trade-mgmt-page">
      <rapid-layout auto-save-key={process.env.NODE_ENV === 'production' ? "Trade Mgmt_1725961883865" : null}>
        <rapid-layout-region>
          <rapid-layout-item title="Trade Mgmt">
            <TradeMgmtTradeMgmtManager></TradeMgmtTradeMgmtManager>
          </rapid-layout-item>
        </rapid-layout-region>
      </rapid-layout>
    </section>
  );
};

export default TradeMgmt;

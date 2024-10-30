import './TradeMgmt.css';
import { persistLayout } from '../../utils';
import { TradeMgmtTradeMgmtManager } from './TradeMgmtManager';

const TradeMgmt = () => {
  return (
    <section className="trade-mgmt-page">
      <rapid-layout auto-save-key={persistLayout('Trade Mgmt_1730290865680')}>
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

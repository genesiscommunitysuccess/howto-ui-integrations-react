import './RefData.css';
import { persistLayout } from '../../utils';
import { RefDataInstrumentMgmtManager } from './InstrumentMgmtManager';
import { RefDataCounterpartyMgmtManager } from './CounterpartyMgmtManager';

const RefData = () => {
  return (
    <section className="ref-data-page">
      <rapid-layout auto-save-key={persistLayout('Ref Data_1730290865680')}>
        <rapid-layout-region>
          <rapid-layout-item title="Instrument Mgmt">
            <RefDataInstrumentMgmtManager></RefDataInstrumentMgmtManager>
          </rapid-layout-item>
          <rapid-layout-item title="Counterparty Mgmt">
            <RefDataCounterpartyMgmtManager></RefDataCounterpartyMgmtManager>
          </rapid-layout-item>
        </rapid-layout-region>
      </rapid-layout>
    </section>
  );
};

export default RefData;

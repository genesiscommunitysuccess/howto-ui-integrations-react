import './RefData.css';
import { RefDataInstrumentMgmtManager } from './InstrumentMgmtManager';
import { RefDataCounterpartyMgmtManager } from './CounterpartyMgmtManager';

const RefData = () => {

  return (
    <section className="ref-data-page">
      <rapid-layout auto-save-key={process.env.NODE_ENV === 'production' ? "Ref Data_1725961883865" : null}>
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

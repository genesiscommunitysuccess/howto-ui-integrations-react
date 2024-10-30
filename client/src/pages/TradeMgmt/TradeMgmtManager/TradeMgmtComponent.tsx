import { createFormSchema as createFormSchemaTile } from './TradeMgmtCreateFormSchema';
import { updateFormSchema as updateFormSchemaTile } from './TradeMgmtUpdateFormSchema';
import { columnDefs as columnDefsTile } from './TradeMgmtColumnDefs';
import './TradeMgmtComponent.css';

export const TradeMgmtTradeMgmtManager: React.FC = () => {
const createFormSchema: typeof createFormSchemaTile = createFormSchemaTile;
const updateFormSchema: typeof updateFormSchemaTile = updateFormSchemaTile;
const columnDefs: typeof columnDefsTile = columnDefsTile;

  return (
    <entity-management
      design-system-prefix="rapid"
      enable-row-flashing
      enable-cell-flashing
      resourceName="ALL_TRADES"
      createEvent="EVENT_TRADE_MODIFY"
      createFormUiSchema={createFormSchema}
      updateEvent="EVENT_TRADE_MODIFY"
      updateFormUiSchema={updateFormSchema}
      columns={columnDefs}
      modal-position="centre"
      size-columns-to-fit
    ></entity-management>
  );
};
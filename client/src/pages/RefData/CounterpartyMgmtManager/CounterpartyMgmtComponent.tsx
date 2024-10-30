import { createFormSchema as createFormSchemaTile } from './CounterpartyMgmtCreateFormSchema';
import { updateFormSchema as updateFormSchemaTile } from './CounterpartyMgmtUpdateFormSchema';
import { columnDefs as columnDefsTile } from './CounterpartyMgmtColumnDefs';
import './CounterpartyMgmtComponent.css';

export const RefDataCounterpartyMgmtManager: React.FC = () => {
const createFormSchema: typeof createFormSchemaTile = createFormSchemaTile;
const updateFormSchema: typeof updateFormSchemaTile = updateFormSchemaTile;
const columnDefs: typeof columnDefsTile = columnDefsTile;

  return (
    <entity-management
      design-system-prefix="rapid"
      enable-row-flashing
      enable-cell-flashing
      resourceName="ALL_COUNTERPARTIES"
      createEvent="EVENT_COUNTERPARTY_MODIFY"
      createFormUiSchema={createFormSchema}
      updateEvent="EVENT_COUNTERPARTY_MODIFY"
      updateFormUiSchema={updateFormSchema}
      deleteEvent="EVENT_COUNTERPARTY_DELETE"
      columns={columnDefs}
      modal-position="centre"
      size-columns-to-fit
      enable-search-bar
    ></entity-management>
  );
};
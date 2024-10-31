import { createFormSchema as createFormSchemaTile } from './InstrumentMgmtCreateFormSchema';
import { updateFormSchema as updateFormSchemaTile } from './InstrumentMgmtUpdateFormSchema';
import { columnDefs as columnDefsTile } from './InstrumentMgmtColumnDefs';
import './InstrumentMgmtComponent.css';

export const RefDataInstrumentMgmtManager: React.FC = () => {
const createFormSchema: typeof createFormSchemaTile = createFormSchemaTile;
const updateFormSchema: typeof updateFormSchemaTile = updateFormSchemaTile;
const columnDefs: typeof columnDefsTile = columnDefsTile;

  return (
    <entity-management
      design-system-prefix="rapid"
      enable-row-flashing
      enable-cell-flashing
      resourceName="ALL_INSTRUMENTS"
      createEvent="EVENT_INSTRUMENT_MODIFY"
      createFormUiSchema={createFormSchema}
      updateEvent="EVENT_INSTRUMENT_MODIFY"
      updateFormUiSchema={updateFormSchema}
      deleteEvent="EVENT_INSTRUMENT_DELETE"
      columns={columnDefs}
      modal-position="centre"
      size-columns-to-fit
      enable-search-bar
    ></entity-management>
  );
};
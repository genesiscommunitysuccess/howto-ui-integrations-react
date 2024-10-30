import { createFormSchema as createFormSchemaTile } from './OrderMgmtCreateFormSchema';
import { updateFormSchema as updateFormSchemaTile } from './OrderMgmtUpdateFormSchema';
import { columnDefs as columnDefsTile } from './OrderMgmtColumnDefs';
import './OrderMgmtComponent.css';

export const OrderMgmtOrderMgmtManager: React.FC = () => {
const createFormSchema: typeof createFormSchemaTile = createFormSchemaTile;
const updateFormSchema: typeof updateFormSchemaTile = updateFormSchemaTile;
const columnDefs: typeof columnDefsTile = columnDefsTile;

  return (
    <entity-management
      design-system-prefix="rapid"
      enable-row-flashing
      enable-cell-flashing
      resourceName="ALL_ORDERS"
    createEvent="EVENT_ORDER_MODIFY"
    createFormUiSchema={createFormSchema}
    updateEvent="EVENT_ORDER_MODIFY"
    updateFormUiSchema={updateFormSchema}
    columns={columnDefs}
    modal-position="centre"
    size-columns-to-fit
    ></entity-management>
  );
};
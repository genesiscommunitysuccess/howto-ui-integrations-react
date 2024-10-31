import { getUser } from '@genesislcap/foundation-user';
import { getViewUpdateRightComponent } from '../../../utils';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import { createFormSchema as createFormSchemaTile } from './OrderMgmtCreateFormSchema';
import { updateFormSchema as updateFormSchemaTile } from './OrderMgmtUpdateFormSchema';
import { columnDefs as columnDefsTile } from './OrderMgmtColumnDefs';
import './OrderMgmtComponent.css';

export const OrderMgmtOrderMgmtManager = () => {
  const hasUserPermission = (permissionCode) => getViewUpdateRightComponent(getUser(), permissionCode);
  const createFormSchema = createFormSchemaTile;
  const updateFormSchema = updateFormSchemaTile;
  const columnDefs = columnDefsTile;

  return (
    
    <entity-management
        design-system-prefix="rapid"
        enable-row-flashing
        enable-cell-flashing
        resourceName="ALL_ORDERS"
        createEvent={hasUserPermission('') ? 'EVENT_ORDER_INSERT' : undefined}
        createFormUiSchema={createFormSchema}
        updateEvent={hasUserPermission('') ? 'EVENT_ORDER_MODIFY' : undefined}
        updateFormUiSchema={updateFormSchema}
        entityLabel="Order"
        columns={columnDefs}
        modal-position="centre"
        size-columns-to-fit
    ></entity-management>
  );
};

import { getUser } from '@genesislcap/foundation-user';
import { getViewUpdateRightComponent } from '../../../utils';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import { createFormSchema as createFormSchemaTile } from './TradeMgmtCreateFormSchema';
import { updateFormSchema as updateFormSchemaTile } from './TradeMgmtUpdateFormSchema';
import { columnDefs as columnDefsTile } from './TradeMgmtColumnDefs';
import './TradeMgmtComponent.css';

export const TradeMgmtTradeMgmtManager = () => {
  const hasUserPermission = (permissionCode) => getViewUpdateRightComponent(getUser(), permissionCode);
  const createFormSchema = createFormSchemaTile;
  const updateFormSchema = updateFormSchemaTile;
  const columnDefs = columnDefsTile;

  return (
    
    <entity-management
        design-system-prefix="rapid"
        enable-row-flashing
        enable-cell-flashing
        resourceName="ALL_TRADES"
        createEvent={hasUserPermission('') ? 'EVENT_TRADE_INSERT' : undefined}
        createFormUiSchema={createFormSchema}
        updateEvent={hasUserPermission('') ? 'EVENT_TRADE_MODIFY' : undefined}
        updateFormUiSchema={updateFormSchema}
        entityLabel="Trade"
        columns={columnDefs}
        modal-position="centre"
        size-columns-to-fit
    ></entity-management>
  );
};

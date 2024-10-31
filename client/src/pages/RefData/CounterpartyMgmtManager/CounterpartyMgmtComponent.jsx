import { getUser } from '@genesislcap/foundation-user';
import { getViewUpdateRightComponent } from '../../../utils';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import { createFormSchema as createFormSchemaTile } from './CounterpartyMgmtCreateFormSchema';
import { updateFormSchema as updateFormSchemaTile } from './CounterpartyMgmtUpdateFormSchema';
import { columnDefs as columnDefsTile } from './CounterpartyMgmtColumnDefs';
import './CounterpartyMgmtComponent.css';

export const RefDataCounterpartyMgmtManager = () => {
  const hasUserPermission = (permissionCode) => getViewUpdateRightComponent(getUser(), permissionCode);
  const createFormSchema = createFormSchemaTile;
  const updateFormSchema = updateFormSchemaTile;
  const columnDefs = columnDefsTile;

  return (
    
    <entity-management
        design-system-prefix="rapid"
        enable-row-flashing
        enable-cell-flashing
        resourceName="ALL_COUNTERPARTIES"
        createEvent={hasUserPermission('') ? 'EVENT_COUNTERPARTY_INSERT' : undefined}
        createFormUiSchema={createFormSchema}
        updateEvent={hasUserPermission('') ? 'EVENT_COUNTERPARTY_MODIFY' : undefined}
        updateFormUiSchema={updateFormSchema}
        deleteEvent={hasUserPermission('') ? 'EVENT_COUNTERPARTY_DELETE' : undefined}
        entityLabel="Counterparty"
        columns={columnDefs}
        modal-position="centre"
        size-columns-to-fit
        enable-search-bar
    ></entity-management>
  );
};

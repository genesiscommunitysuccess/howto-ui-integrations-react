import { getUser } from '@genesislcap/foundation-user';
import { getViewUpdateRightComponent } from '../../../utils';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import { createFormSchema as createFormSchemaTile } from './InstrumentMgmtCreateFormSchema';
import { updateFormSchema as updateFormSchemaTile } from './InstrumentMgmtUpdateFormSchema';
import { columnDefs as columnDefsTile } from './InstrumentMgmtColumnDefs';
import './InstrumentMgmtComponent.css';

export const RefDataInstrumentMgmtManager = () => {
  const hasUserPermission = (permissionCode) => getViewUpdateRightComponent(getUser(), permissionCode);
  const createFormSchema = createFormSchemaTile;
  const updateFormSchema = updateFormSchemaTile;
  const columnDefs = columnDefsTile;

  return (
    
    <entity-management
        design-system-prefix="rapid"
        enable-row-flashing
        enable-cell-flashing
        resourceName="ALL_INSTRUMENTS"
        createEvent={hasUserPermission('') ? 'EVENT_INSTRUMENT_INSERT' : undefined}
        createFormUiSchema={createFormSchema}
        updateEvent={hasUserPermission('') ? 'EVENT_INSTRUMENT_MODIFY' : undefined}
        updateFormUiSchema={updateFormSchema}
        deleteEvent={hasUserPermission('') ? 'EVENT_INSTRUMENT_DELETE' : undefined}
        entityLabel="Instrument"
        columns={columnDefs}
        modal-position="centre"
        size-columns-to-fit
        enable-search-bar
    ></entity-management>
  );
};

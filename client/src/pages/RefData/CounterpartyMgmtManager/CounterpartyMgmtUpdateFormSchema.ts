import { UiSchema } from '@genesislcap/foundation-forms';

export const updateFormSchema: UiSchema = {
  "type": "VerticalLayout",
  "elements": [
    {
      "type": "Control",
      "label": "Counterparty Id",
      "scope": "#/properties/COUNTERPARTY_ID",
      "options": {
        "readonly": true
      },
      "meta": {
        "updateForm": {
          "mode": "read-only"
        },
        "alias": null,
        "attribute": "COUNTERPARTY_ID",
        "entity": "COUNTERPARTY",
        "id": "COUNTERPARTY_IDID"
      }
    },
    {
      "type": "Control",
      "label": "Counterparty Name",
      "scope": "#/properties/COUNTERPARTY_NAME",
      "options": {},
      "meta": {
        "updateForm": {
          "mode": "visible",
          "type": "string",
          "format": "Input"
        },
        "alias": null,
        "attribute": "COUNTERPARTY_NAME",
        "entity": "COUNTERPARTY",
        "id": "COUNTERPARTY_NAMEID"
      }
    }
  ]
}

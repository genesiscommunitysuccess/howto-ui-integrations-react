import { UiSchema } from '@genesislcap/foundation-forms';

export const createFormSchema: UiSchema = {
  "type": "VerticalLayout",
  "elements": [
    {
      "type": "Control",
      "label": "Counterparty Id",
      "scope": "#/properties/COUNTERPARTY_ID",
      "options": {
        "hidden": true
      },
      "meta": {
        "createForm": {
          "mode": "hidden"
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
        "createForm": {
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

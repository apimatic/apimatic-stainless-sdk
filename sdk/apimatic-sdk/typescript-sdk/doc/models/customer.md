
# Customer

*This model accepts additional fields of type unknown.*

## Structure

`Customer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Optional | - |
| `username` | `string \| undefined` | Optional | - |
| `address` | [`Address[] \| undefined`](../../doc/models/address.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "id": 12,
  "username": "username2",
  "address": [
    {
      "street": "street6",
      "city": "city6",
      "state": "state2",
      "zip": "zip0",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    {
      "street": "street6",
      "city": "city6",
      "state": "state2",
      "zip": "zip0",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    },
    {
      "street": "street6",
      "city": "city6",
      "state": "state2",
      "zip": "zip0",
      "exampleAdditionalProperty": {
        "key1": "val1",
        "key2": "val2"
      }
    }
  ],
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```


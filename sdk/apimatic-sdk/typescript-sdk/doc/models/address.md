
# Address

*This model accepts additional fields of type unknown.*

## Structure

`Address`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `street` | `string \| undefined` | Optional | - |
| `city` | `string \| undefined` | Optional | - |
| `state` | `string \| undefined` | Optional | - |
| `zip` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "street": "street8",
  "city": "city8",
  "state": "state4",
  "zip": "zip2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```


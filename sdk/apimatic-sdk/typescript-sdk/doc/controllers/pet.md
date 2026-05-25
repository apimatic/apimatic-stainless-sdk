# Pet

Everything about your Pets

```ts
const petApi = new PetApi(client);
```

## Class Name

`PetApi`

## Methods

* [Update Pet](../../doc/controllers/pet.md#update-pet)
* [Add Pet](../../doc/controllers/pet.md#add-pet)
* [Find Pets by Status](../../doc/controllers/pet.md#find-pets-by-status)
* [Find Pets by Tags](../../doc/controllers/pet.md#find-pets-by-tags)
* [Get Pet by Id](../../doc/controllers/pet.md#get-pet-by-id)
* [Update Pet with Form](../../doc/controllers/pet.md#update-pet-with-form)
* [Delete Pet](../../doc/controllers/pet.md#delete-pet)
* [Upload File](../../doc/controllers/pet.md#upload-file)


# Update Pet

Update an existing pet by Id

```ts
async updatePet(
  name: string,
  photoUrls: string[],
  id?: bigint,
  category?: Category,
  tags?: Tag[],
  status?: Status1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Pet>>
```

## Authentication

This endpoint requires [api_key](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Form, Required | - |
| `photoUrls` | `string[]` | Form, Required | - |
| `id` | `bigint \| undefined` | Form, Optional | - |
| `category` | [`Category \| undefined`](../../doc/models/category.md) | Form, Optional | - |
| `tags` | [`Tag[] \| undefined`](../../doc/models/tag.md) | Form, Optional | - |
| `status` | [`Status1 \| undefined`](../../doc/models/status-1.md) | Form, Optional | pet status in the store |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successful operation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Pet`](../../doc/models/pet.md).

## Example Usage

```ts
const name = 'doggie';

const photoUrls: string[] = [
  'photoUrls5',
  'photoUrls6',
  'photoUrls7'
];

const id = BigInt(10);

const tags: Tag[] = [
  {
  }
];

try {
  const response = await petApi.updatePet(
    name,
    photoUrls,
    id,
    undefined,
    tags
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid ID supplied | `ApiError` |
| 404 | Pet not found | `ApiError` |
| 422 | Validation exception | `ApiError` |


# Add Pet

Add a new pet to the store

```ts
async addPet(
  name: string,
  photoUrls: string[],
  id?: bigint,
  category?: Category,
  tags?: Tag[],
  status?: Status1,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Pet>>
```

## Authentication

This endpoint requires [api_key](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string` | Form, Required | - |
| `photoUrls` | `string[]` | Form, Required | - |
| `id` | `bigint \| undefined` | Form, Optional | - |
| `category` | [`Category \| undefined`](../../doc/models/category.md) | Form, Optional | - |
| `tags` | [`Tag[] \| undefined`](../../doc/models/tag.md) | Form, Optional | - |
| `status` | [`Status1 \| undefined`](../../doc/models/status-1.md) | Form, Optional | pet status in the store |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successful operation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Pet`](../../doc/models/pet.md).

## Example Usage

```ts
const name = 'doggie';

const photoUrls: string[] = [
  'photoUrls5',
  'photoUrls6',
  'photoUrls7'
];

const id = BigInt(10);

const tags: Tag[] = [
  {
  }
];

try {
  const response = await petApi.addPet(
    name,
    photoUrls,
    id,
    undefined,
    tags
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid input | `ApiError` |
| 422 | Validation exception | `ApiError` |


# Find Pets by Status

Multiple status values can be provided with comma separated strings

```ts
async findPetsByStatus(
  status?: Status2,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Pet[]>>
```

## Authentication

This endpoint requires [api_key](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`Status2 \| undefined`](../../doc/models/status-2.md) | Query, Optional | Status values that need to be considered for filter<br><br>**Default**: `Status2.Available` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful operation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Pet[]`](../../doc/models/pet.md).

## Example Usage

```ts
const status = Status2.Available;

try {
  const response = await petApi.findPetsByStatus(status);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid status value | `ApiError` |


# Find Pets by Tags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

```ts
async findPetsByTags(
  tags?: string[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<Pet[]>>
```

## Authentication

This endpoint requires [api_key](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `tags` | `string[] \| undefined` | Query, Optional | Tags to filter by |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful operation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Pet[]`](../../doc/models/pet.md).

## Example Usage

```ts
try {
  const response = await petApi.findPetsByTags();

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid tag value | `ApiError` |


# Get Pet by Id

Returns a single pet

```ts
async getPetById(
  petId: bigint,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Pet>>
```

## Authentication

This endpoint requires [api_key](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `petId` | `bigint` | Template, Required | ID of pet to return |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful operation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`Pet`](../../doc/models/pet.md).

## Example Usage

```ts
const petId = BigInt(152);

try {
  const response = await petApi.getPetById(petId);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid ID supplied | `ApiError` |
| 404 | Pet not found | `ApiError` |


# Update Pet with Form

```ts
async updatePetWithForm(
  petId: bigint,
  name?: string,
  status?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [api_key](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `petId` | `bigint` | Template, Required | ID of pet that needs to be updated |
| `name` | `string \| undefined` | Query, Optional | Name of pet that needs to be updated |
| `status` | `string \| undefined` | Query, Optional | Status of pet that needs to be updated |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const petId = BigInt(152);

try {
  const response = await petApi.updatePetWithForm(petId);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid input | `ApiError` |


# Delete Pet

delete a pet

```ts
async deletePet(
  petId: bigint,
  apiKey?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [api_key](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `petId` | `bigint` | Template, Required | Pet id to delete |
| `apiKey` | `string \| undefined` | Header, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const petId = BigInt(152);

try {
  const response = await petApi.deletePet(petId);

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid pet value | `ApiError` |


# Upload File

```ts
async uploadFile(
  petId: bigint,
  body: FileWrapper,
  additionalMetadata?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<MApiResponse>>
```

## Authentication

This endpoint requires [api_key](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `petId` | `bigint` | Template, Required | ID of pet to update |
| `body` | `FileWrapper` | Form, Required | - |
| `additionalMetadata` | `string \| undefined` | Query, Optional | Additional Metadata |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful operation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`MApiResponse`](../../doc/models/m-api-response.md).

## Example Usage

```ts
const petId = BigInt(152);

const body = new FileWrapper(fs.createReadStream('dummy_file'));

try {
  const response = await petApi.uploadFile(
    petId,
    body
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
  }
}
```


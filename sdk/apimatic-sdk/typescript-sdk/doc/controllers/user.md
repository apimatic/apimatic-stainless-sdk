# User

Operations about user

```ts
const userApi = new UserApi(client);
```

## Class Name

`UserApi`

## Methods

* [Create User](../../doc/controllers/user.md#create-user)
* [Create Users with List Input](../../doc/controllers/user.md#create-users-with-list-input)
* [Login User](../../doc/controllers/user.md#login-user)
* [Logout User](../../doc/controllers/user.md#logout-user)
* [Get User by Name](../../doc/controllers/user.md#get-user-by-name)
* [Update User](../../doc/controllers/user.md#update-user)
* [Delete User](../../doc/controllers/user.md#delete-user)


# Create User

This can only be done by the logged in user.

```ts
async createUser(
  id?: bigint,
  username?: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
  phone?: string,
  userStatus?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<User>>
```

## Authentication

This endpoint requires [api_key](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `bigint \| undefined` | Form, Optional | - |
| `username` | `string \| undefined` | Form, Optional | - |
| `firstName` | `string \| undefined` | Form, Optional | - |
| `lastName` | `string \| undefined` | Form, Optional | - |
| `email` | `string \| undefined` | Form, Optional | - |
| `password` | `string \| undefined` | Form, Optional | - |
| `phone` | `string \| undefined` | Form, Optional | - |
| `userStatus` | `number \| undefined` | Form, Optional | User Status |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful operation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`User`](../../doc/models/user.md).

## Example Usage

```ts
const id = BigInt(10);

const username = 'theUser';

const firstName = 'John';

const lastName = 'James';

const email = 'john@email.com';

const password = '12345';

const phone = '12345';

const userStatus = 1;

try {
  const response = await userApi.createUser(
    id,
    username,
    firstName,
    lastName,
    email,
    password,
    phone,
    userStatus
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


# Create Users with List Input

Creates list of users with given input array

```ts
async createUsersWithListInput(
  body?: User[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<User>>
```

## Authentication

This endpoint requires [api_key](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`User[] \| undefined`](../../doc/models/user.md) | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successful operation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`User`](../../doc/models/user.md).

## Example Usage

```ts
const body: User[] = [
  {
  }
];

try {
  const response = await userApi.createUsersWithListInput(body);

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
| Default | successful operation | `ApiError` |


# Login User

```ts
async loginUser(
  username?: string,
  password?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<string>>
```

## Authentication

This endpoint requires [api_key](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string \| undefined` | Query, Optional | The user name for login |
| `password` | `string \| undefined` | Query, Optional | The password for login in clear text |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful operation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type `string`.

## Example Usage

```ts
try {
  const response = await userApi.loginUser();

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
| 400 | Invalid username/password supplied | `ApiError` |


# Logout User

```ts
async logoutUser(
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [api_key](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful operation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
try {
  const response = await userApi.logoutUser();

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


# Get User by Name

```ts
async getUserByName(
  username: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<User>>
```

## Authentication

This endpoint requires [api_key](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Template, Required | The name that needs to be fetched. Use user1 for testing. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful operation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`User`](../../doc/models/user.md).

## Example Usage

```ts
const username = 'username0';

try {
  const response = await userApi.getUserByName(username);

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
| 400 | Invalid username supplied | `ApiError` |
| 404 | User not found | `ApiError` |


# Update User

This can only be done by the logged in user.

```ts
async updateUser(
  existingUsername: string,
  id?: bigint,
  username?: string,
  firstName?: string,
  lastName?: string,
  email?: string,
  password?: string,
  phone?: string,
  userStatus?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [api_key](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `existingUsername` | `string` | Template, Required | The username that needs to be replaced |
| `id` | `bigint \| undefined` | Form, Optional | - |
| `username` | `string \| undefined` | Form, Optional | - |
| `firstName` | `string \| undefined` | Form, Optional | - |
| `lastName` | `string \| undefined` | Form, Optional | - |
| `email` | `string \| undefined` | Form, Optional | - |
| `password` | `string \| undefined` | Form, Optional | - |
| `phone` | `string \| undefined` | Form, Optional | - |
| `userStatus` | `number \| undefined` | Form, Optional | User Status |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: successful operation

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const existingUsername = 'existingUsername0';

const id = BigInt(10);

const username = 'theUser';

const firstName = 'John';

const lastName = 'James';

const email = 'john@email.com';

const password = '12345';

const phone = '12345';

const userStatus = 1;

try {
  const response = await userApi.updateUser(
    existingUsername,
    id,
    username,
    firstName,
    lastName,
    email,
    password,
    phone,
    userStatus
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


# Delete User

This can only be done by the logged in user.

```ts
async deleteUser(
  username: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Authentication

This endpoint requires [api_key](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `username` | `string` | Template, Required | The name that needs to be deleted |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const username = 'username0';

try {
  const response = await userApi.deleteUser(username);

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
| 400 | Invalid username supplied | `ApiError` |
| 404 | User not found | `ApiError` |


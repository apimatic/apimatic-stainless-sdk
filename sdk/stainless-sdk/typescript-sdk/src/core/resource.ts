// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { PetstoreSDKStainlessTest } from '../client';

export abstract class APIResource {
  protected _client: PetstoreSDKStainlessTest;

  constructor(client: PetstoreSDKStainlessTest) {
    this._client = client;
  }
}

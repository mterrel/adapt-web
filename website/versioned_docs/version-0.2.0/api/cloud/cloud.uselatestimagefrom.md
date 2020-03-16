---
id: "version-0.2.0-cloud.uselatestimagefrom"
title: "useLatestImageFrom() function"
hide_title: true
parent_id: "version-0.2.0-api/cloud/cloud"
original_id: "cloud.uselatestimagefrom"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [useLatestImageFrom](./cloud.uselatestimagefrom.md)

## useLatestImageFrom() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Hook function to translate an [ImageId](./cloud.imageid.md) (which can be either a Handle or an image name string) into an image name string.

<b>Signature:</b>

```typescript
export declare function useLatestImageFrom(source: ImageId): string | undefined;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  source | [<code>ImageId</code>](./cloud.imageid.md) |  |

<b>Returns:</b>

`string | undefined`
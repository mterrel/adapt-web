---
id: "version-0.2.0-cloud.isnetworkserviceelement"
title: "isNetworkServiceElement() function"
hide_title: true
parent_id: "version-0.2.0-api/cloud/cloud"
original_id: "cloud.isnetworkserviceelement"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [isNetworkServiceElement](./cloud.isnetworkserviceelement.md)

## isNetworkServiceElement() function

Type assertion that tests an element to see if it is a [NetworkService](./cloud.networkservice.md)

<b>Signature:</b>

```typescript
export declare function isNetworkServiceElement(el: AdaptElement): el is AdaptElement<NetworkServiceProps>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  el | <code>AdaptElement</code> | the element to be tested |

<b>Returns:</b>

`el is AdaptElement<`[`NetworkServiceProps`](./cloud.networkserviceprops.md)`>`

`true` if `el` is a NetworkService, `false` otherwise

## Remarks

Also functions as a type assertion for Typescript, so the arguments type will be adjusted to reflect that it is an `AdaptElement<NetworkServiceProps>` instead of a generic `AdaptElement`<!-- -->.
---
id: "version-0.3.0-cloud.targetport"
title: "targetPort() function"
hide_title: true
parent_id: "version-0.3.0-api/cloud/cloud"
original_id: "cloud.targetport"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [targetPort](./cloud.targetport.md)

## targetPort() function

Computes the target port that will be used for a NetworkService

<b>Signature:</b>

```typescript
export declare function targetPort(elemOrProps: NetworkServiceProps | AdaptElement): ServicePort;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  elemOrProps | [<code>NetworkServiceProps</code>](./cloud.networkserviceprops.md)<code> &#124;</code><br/><code>AdaptElement</code> | a [NetworkService](./cloud.networkservice.md) element or its props |

<b>Returns:</b>

[`ServicePort`](./cloud.serviceport.md)

The target port of the [NetworkService](./cloud.networkservice.md) object
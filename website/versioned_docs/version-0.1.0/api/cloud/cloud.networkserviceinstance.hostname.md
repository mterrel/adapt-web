---
id: "version-0.1.0-cloud.networkserviceinstance.hostname"
title: "NetworkServiceInstance.hostname() method"
hide_title: true
parent_id: "version-0.1.0-api/cloud/cloud.networkserviceinstance"
original_id: "cloud.networkserviceinstance.hostname"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [NetworkServiceInstance](./cloud.networkserviceinstance.md) &gt; [hostname](./cloud.networkserviceinstance.hostname.md)

## NetworkServiceInstance.hostname() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Returns the hostname for the service from the given scope

<b>Signature:</b>

```typescript
hostname(scope?: NetworkScope): string | undefined;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  scope | [<code>NetworkScope</code>](./cloud.networkscope.md) | the scope of the desired hostname ("default" cluster/internal, "external" - world accessible) |

<b>Returns:</b>

`string | undefined`

- the requested hostname, or undefined if it is not yet available

## Remarks

This function should return the external, world accessible name if there is no cluster/internal only name. The function should throw an error if an external name is requested, but no name/address is available (e.g., the service is internally acessible only.)
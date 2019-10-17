---
id: version-0.0.6-cloud.networkservice
title: NetworkService class
hide_title: true
original_id: cloud.networkservice
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [NetworkService](./cloud.networkservice.md)

## NetworkService class

An abstract component that represents a network service.

<b>Signature:</b>

```typescript
export declare abstract class NetworkService extends PrimitiveComponent<NetworkServiceProps> implements NetworkServiceInstance 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [defaultProps](./cloud.networkservice.defaultprops.md) | <code>static</code> | <code>{</code><br/><code>        protocol: string;</code><br/><code>        scope: string;</code><br/><code>    }</code> |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [hostname(scope)](./cloud.networkservice.hostname.md) |  | Returns the hostname of the NetworkService, once it is known. |
|  [port()](./cloud.networkservice.port.md) |  | Returns the port number of the NetworkService, once it is known. |
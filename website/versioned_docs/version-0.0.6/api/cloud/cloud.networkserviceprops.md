---
id: version-0.0.6-cloud.networkserviceprops
title: NetworkServiceProps interface
hide_title: true
original_id: cloud.networkserviceprops
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [NetworkServiceProps](./cloud.networkserviceprops.md)

## NetworkServiceProps interface

Props for the [NetworkService](./cloud.networkservice.md) element

<b>Signature:</b>

```typescript
export interface NetworkServiceProps extends WithChildren 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [endpoint](./cloud.networkserviceprops.endpoint.md) | <code>Handle</code> | Endpoint that provides the service |
|  [ip](./cloud.networkserviceprops.ip.md) | <code>string</code> | IP address of the network service |
|  [name](./cloud.networkserviceprops.name.md) | <code>string</code> | Name of the network service |
|  [port](./cloud.networkserviceprops.port.md) | <code>ServicePort</code> | Port on which clients connect to this service |
|  [protocol](./cloud.networkserviceprops.protocol.md) | <code>string</code> | Protocol used by the network service |
|  [scope](./cloud.networkserviceprops.scope.md) | <code>NetworkServiceScope</code> | Scope of the service |
|  [targetPort](./cloud.networkserviceprops.targetport.md) | <code>ServicePort</code> | Port on the endpoint that provides this service |
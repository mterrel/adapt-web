---
id: "version-0.3.0-cloud.docker.networkservice"
title: "docker.NetworkService() function"
hide_title: true
parent_id: "version-0.3.0-api/cloud/cloud.docker"
original_id: "cloud.docker.networkservice"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [docker](./cloud.docker.md) &gt; [NetworkService](./cloud.docker.networkservice.md)

## docker.NetworkService() function

Docker network service component, compatible with the abstract [NetworkService](./cloud.networkservice.md) component.

<b>Signature:</b>

```typescript
export declare function NetworkService(props: SFCDeclProps<NetworkServiceProps, typeof defaultProps>): null;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  props | <code>SFCDeclProps&lt;</code>[<code>NetworkServiceProps</code>](./cloud.networkserviceprops.md)<code>, typeof defaultProps&gt;</code> |  |

<b>Returns:</b>

`null`

## Remarks

Implements the [NetworkServiceInstance](./cloud.networkserviceinstance.md) interface. In a Docker deployment, there is no actual network service object to deploy. So this is a "virtual" component that simply implements the required instance methods for a NetworkService, but renders to null.

This component is typically used by [docker.ServiceContainerSet](./cloud.docker.servicecontainerset.md)<!-- -->. The [docker.ServiceContainerSet](./cloud.docker.servicecontainerset.md) component can be used to ensure the proper network port configuration is applied to the `props.endpoint` container.
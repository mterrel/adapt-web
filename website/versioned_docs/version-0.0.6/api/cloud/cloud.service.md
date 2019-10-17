---
id: version-0.0.6-cloud.service
title: Service class
hide_title: true
original_id: cloud.service
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [Service](./cloud.service.md)

## Service class

An abstract component that represents a group of components that implements a service. Note that this is not necessarily a network service, but will often be.

<b>Signature:</b>

```typescript
export declare abstract class Service extends Component<ServiceProps, {}> 
```

## Remarks

Typical children will be [NetworkService](./cloud.networkservice.md) and [Container](./cloud.container.md) elements.
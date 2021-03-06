---
id: "version-0.1.0-cloud.k8s.serviceport.nodeport"
title: "k8s.ServicePort.nodePort property"
hide_title: true
parent_id: "version-0.1.0-api/cloud/cloud.k8s"
original_id: "cloud.k8s.serviceport.nodeport"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [k8s](./cloud.k8s.md) &gt; [ServicePort](./cloud.k8s.serviceport.md) &gt; [nodePort](./cloud.k8s.serviceport.nodeport.md)

## k8s.ServicePort.nodePort property

The port on each node on which this service is exposed when type=NodePort or LoadBalancer.

<b>Signature:</b>

```typescript
nodePort?: number;
```

## Remarks

Usually assigned by the system.If specified, it will be allocated to the service if unused or else creation of the service will fail.Default is to auto - allocate a port if the ServiceType of this Service requires one.More info: [https://kubernetes.io/docs/concepts/services-networking/service/\#type-nodeport](https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport)

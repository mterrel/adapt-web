---
id: version-0.0.6-cloud.k8s.servicespec.externaltrafficpolicy
title: k8s.ServiceSpec.externalTrafficPolicy property
hide_title: true
original_id: cloud.k8s.servicespec.externaltrafficpolicy
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [k8s](./cloud.k8s.md) &gt; [ServiceSpec](./cloud.k8s.servicespec.md) &gt; [externalTrafficPolicy](./cloud.k8s.servicespec.externaltrafficpolicy.md)

## k8s.ServiceSpec.externalTrafficPolicy property

externalTrafficPolicy denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints.

<b>Signature:</b>

```typescript
externalTrafficPolicy?: string;
```

## Remarks

"Local" preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading. "Cluster" obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading.
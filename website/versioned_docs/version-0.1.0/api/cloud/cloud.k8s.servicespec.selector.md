---
id: "version-0.1.0-cloud.k8s.servicespec.selector"
title: "k8s.ServiceSpec.selector property"
hide_title: true
parent_id: "version-0.1.0-api/cloud/cloud.k8s"
original_id: "cloud.k8s.servicespec.selector"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [k8s](./cloud.k8s.md) &gt; [ServiceSpec](./cloud.k8s.servicespec.md) &gt; [selector](./cloud.k8s.servicespec.selector.md)

## k8s.ServiceSpec.selector property

Route service traffic to pods with label keys and values matching this selector.

<b>Signature:</b>

```typescript
selector?: object;
```

## Remarks

If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify.Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName.More info: [https://kubernetes.io/docs/concepts/services-networking/service/](https://kubernetes.io/docs/concepts/services-networking/service/)

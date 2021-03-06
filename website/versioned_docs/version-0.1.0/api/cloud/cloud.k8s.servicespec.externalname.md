---
id: "version-0.1.0-cloud.k8s.servicespec.externalname"
title: "k8s.ServiceSpec.externalName property"
hide_title: true
parent_id: "version-0.1.0-api/cloud/cloud.k8s"
original_id: "cloud.k8s.servicespec.externalname"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [k8s](./cloud.k8s.md) &gt; [ServiceSpec](./cloud.k8s.servicespec.md) &gt; [externalName](./cloud.k8s.servicespec.externalname.md)

## k8s.ServiceSpec.externalName property

externalName is the external reference that kubedns or equivalent will return as a CNAME record for this service.No proxying will be involved.Must be a valid RFC - 1123 hostname ([https://tools.ietf.org/html/rfc1123](https://tools.ietf.org/html/rfc1123)<!-- -->) and requires Type to be ExternalName.

<b>Signature:</b>

```typescript
externalName?: string;
```
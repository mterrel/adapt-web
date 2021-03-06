---
id: "version-0.3.0-cloud.k8s.servicespec.healthchecknodeport"
title: "k8s.ServiceSpec.healthCheckNodePort property"
hide_title: true
parent_id: "version-0.3.0-api/cloud/cloud.k8s"
original_id: "cloud.k8s.servicespec.healthchecknodeport"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [k8s](./cloud.k8s.md) &gt; [ServiceSpec](./cloud.k8s.servicespec.md) &gt; [healthCheckNodePort](./cloud.k8s.servicespec.healthchecknodeport.md)

## k8s.ServiceSpec.healthCheckNodePort property

Specifies the healthcheck nodePort for the service.

<b>Signature:</b>

```typescript
healthCheckNodePort?: number;
```

## Remarks

If not specified, HealthCheckNodePort is created by the service api backend with the allocated nodePort. Will use user-specified nodePort value if specified by the client. Only affects when Type is set to LoadBalancer and ExternalTrafficPolicy is set to Local.

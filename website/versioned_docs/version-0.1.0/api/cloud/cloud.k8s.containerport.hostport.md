---
id: "version-0.1.0-cloud.k8s.containerport.hostport"
title: "k8s.ContainerPort.hostPort property"
hide_title: true
parent_id: "version-0.1.0-api/cloud/cloud.k8s"
original_id: "cloud.k8s.containerport.hostport"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [k8s](./cloud.k8s.md) &gt; [ContainerPort](./cloud.k8s.containerport.md) &gt; [hostPort](./cloud.k8s.containerport.hostport.md)

## k8s.ContainerPort.hostPort property

Number of port to expose on the host.

<b>Signature:</b>

```typescript
hostPort?: number;
```

## Remarks

If specified, this must be a valid integer port number, `0 < x < 65536`<!-- -->. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.

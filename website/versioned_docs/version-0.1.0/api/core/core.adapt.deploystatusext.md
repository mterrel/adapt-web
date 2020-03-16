---
id: "version-0.1.0-core.adapt.deploystatusext"
title: "Adapt.DeployStatusExt variable"
hide_title: true
parent_id: "version-0.1.0-api/core/core.adapt"
original_id: "core.adapt.deploystatusext"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Core API Overview](overview) &gt; [@adpt/core](./core.md) &gt; [Adapt](./core.adapt.md) &gt; [DeployStatusExt](./core.adapt.deploystatusext.md)

## Adapt.DeployStatusExt variable

<b>Signature:</b>

```typescript
DeployStatusExt: {
    [x: number]: string;
    ProxyDeploying: InternalStatus.ProxyDeploying;
    ProxyDestroying: InternalStatus.ProxyDestroying;
    Initial: DeployStatus.Initial;
    Waiting: DeployStatus.Waiting;
    Deploying: DeployStatus.Deploying;
    Destroying: DeployStatus.Destroying;
    Deployed: DeployStatus.Deployed;
    Failed: DeployStatus.Failed;
    Destroyed: DeployStatus.Destroyed;
}
```
---
id: "version-0.2.0-cloud.k8s.makeclusterinfooptions.registryurl"
title: "k8s.MakeClusterInfoOptions.registryUrl property"
hide_title: true
parent_id: "version-0.2.0-api/cloud/cloud.k8s"
original_id: "cloud.k8s.makeclusterinfooptions.registryurl"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [k8s](./cloud.k8s.md) &gt; [MakeClusterInfoOptions](./cloud.k8s.makeclusterinfooptions.md) &gt; [registryUrl](./cloud.k8s.makeclusterinfooptions.registryurl.md)

## k8s.MakeClusterInfoOptions.registryUrl property

URL to the docker registry that this cluster uses to pull private images.

<b>Signature:</b>

```typescript
registryUrl?: string | DockerSplitRegistryInfo;
```

## Remarks

This is identical to the `registryUrl` field in [k8s.ClusterInfo](./cloud.k8s.clusterinfo.md)<!-- -->. It will be returned verbatim in the resulting [k8s.ClusterInfo](./cloud.k8s.clusterinfo.md) object.

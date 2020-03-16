---
id: "version-0.1.0-cloud.k8s.containerspec"
title: "k8s.ContainerSpec interface"
hide_title: true
parent_id: "version-0.1.0-api/cloud/cloud.k8s"
original_id: "cloud.k8s.containerspec"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [k8s](./cloud.k8s.md) &gt; [ContainerSpec](./cloud.k8s.containerspec.md)

## k8s.ContainerSpec interface

Resource spec for a Kubernetes container. See the Kubernetes [API docs](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.10/#container-v1-core) for more details.

<b>Signature:</b>

```typescript
export interface ContainerSpec 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [args](./cloud.k8s.containerspec.args.md) | <code>string[]</code> |  |
|  [command](./cloud.k8s.containerspec.command.md) | <code>string[]</code> |  |
|  [env](./cloud.k8s.containerspec.env.md) | <code>EnvVar[]</code> |  |
|  [image](./cloud.k8s.containerspec.image.md) | <code>string</code> |  |
|  [imagePullPolicy](./cloud.k8s.containerspec.imagepullpolicy.md) | <code>&quot;Always&quot; &#124;</code><br/><code>&quot;Never&quot; &#124;</code><br/><code>&quot;IfNotPresent&quot;</code> |  |
|  [name](./cloud.k8s.containerspec.name.md) | <code>string</code> |  |
|  [ports](./cloud.k8s.containerspec.ports.md) | <code>ContainerPort[]</code> |  |
|  [tty](./cloud.k8s.containerspec.tty.md) | <code>boolean</code> |  |
|  [workingDir](./cloud.k8s.containerspec.workingdir.md) | <code>string</code> |  |
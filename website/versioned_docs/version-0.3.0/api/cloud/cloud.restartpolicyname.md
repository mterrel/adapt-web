---
id: "version-0.3.0-cloud.restartpolicyname"
title: "RestartPolicyName type"
hide_title: true
parent_id: "version-0.3.0-api/cloud/cloud"
original_id: "cloud.restartpolicyname"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [RestartPolicyName](./cloud.restartpolicyname.md)

## RestartPolicyName type

Names for [RestartPolicy](./cloud.restartpolicy.md)

<b>Signature:</b>

```typescript
export declare type RestartPolicyName = "Always" | "Never" | "OnFailure" | "UnlessStopped";
```

## Remarks

- `Always` - Always restart the container. - `Never` - Do not automatically restart the container. - `OnFailure` - Restart only when the container exit code is non-zero. - `UnlessStopped` - Always restart the container, except if it has been manually stopped by user intervention.

See the [Docker API Reference](https://docs.docker.com/engine/api/v1.40/#operation/ContainerCreate) for more information.

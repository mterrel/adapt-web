---
id: "version-0.1.0-cloud.restartpolicy"
title: "RestartPolicy interface"
hide_title: true
parent_id: "version-0.1.0-api/cloud/cloud"
original_id: "cloud.restartpolicy"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [RestartPolicy](./cloud.restartpolicy.md)

## RestartPolicy interface

The behavior to apply when the container exits.

<b>Signature:</b>

```typescript
export interface RestartPolicy 
```

## Remarks

See the [Docker API Reference](https://docs.docker.com/engine/api/v1.40/#operation/ContainerCreate) for more information.

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [maximumRetryCount](./cloud.restartpolicy.maximumretrycount.md) | <code>number</code> | If <code>OnFailure</code> is used, the number of times to retry before giving up |
|  [name](./cloud.restartpolicy.name.md) | [<code>RestartPolicyName</code>](./cloud.restartpolicyname.md) | The type of behavior to apply |

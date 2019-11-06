---
id: cloud.redis.redis
title: "redis.Redis class"
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [redis](./cloud.redis.md) &gt; [Redis](./cloud.redis.redis.md)

## redis.Redis class

Abstract Redis component

<b>Signature:</b>

```typescript
export declare abstract class Redis extends PrimitiveComponent implements ConnectToInstance 
```

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [connectEnv(\_scope)](./cloud.redis.redis.connectenv.md) |  |  |

## Remarks

This component is used to denote a needed [Redis](https://redis.io) service. Users should use a style sheet to subsitute a concrete Redis instance that provides the service.  is such a component, suitable for test environments.

All implementations of this component should implmenent [ConnectToInstance](./cloud.connecttoinstance.md) that provides a `REDIS_URI` variable of the form `redis://<hostname>:<port>`<!-- -->.
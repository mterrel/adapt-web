---
id: "version-0.1.0-cloud.updateenvvars"
title: "updateEnvVars() function"
hide_title: true
parent_id: "version-0.1.0-api/cloud/cloud"
original_id: "cloud.updateenvvars"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [updateEnvVars](./cloud.updateenvvars.md)

## updateEnvVars() function

Updates the names and/or values of variables in an [Environment](./cloud.environment.md)

<b>Signature:</b>

```typescript
export declare function updateEnvVars(e: Environment, upd: (name: string, value: string) => EnvPair | undefined): Environment;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  e | [<code>Environment</code>](./cloud.environment.md) | The source [Environment](./cloud.environment.md) |
|  upd | <code>(name: string, value: string) =&gt; </code>[<code>EnvPair</code>](./cloud.envpair.md)<code> &#124;</code><br/><code>undefined</code> | Updated function that returns an EnvPair with the new name and value of the variable |

<b>Returns:</b>

[`Environment`](./cloud.environment.md)

- A new [Environment](./cloud.environment.md) that is identical to `e` except for the updates done by `upd`
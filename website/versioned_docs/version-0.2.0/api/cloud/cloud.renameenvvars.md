---
id: "version-0.2.0-cloud.renameenvvars"
title: "renameEnvVars() function"
hide_title: true
parent_id: "version-0.2.0-api/cloud/cloud"
original_id: "cloud.renameenvvars"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [renameEnvVars](./cloud.renameenvvars.md)

## renameEnvVars() function

Renames all variables in `e` based on `mapping`

<b>Signature:</b>

```typescript
export declare function renameEnvVars(e: Environment, mapping: {
    [orig: string]: string;
}): Environment;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  e | [<code>Environment</code>](./cloud.environment.md) | [Environment](./cloud.environment.md) to rename |
|  mapping | <code>{</code><br/><code>    [orig: string]: string;</code><br/><code>}</code> | Object with <code>(key, value)</code> pairs that are <code>(originalName, newName)</code> pairs. |

<b>Returns:</b>

[`Environment`](./cloud.environment.md)

A new [Environment](./cloud.environment.md) object with all variables renamed according to `mapping`

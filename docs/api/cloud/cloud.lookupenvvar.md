---
id: cloud.lookupenvvar
title: "lookupEnvVar() function"
hide_title: true
parent_id: api/cloud/cloud
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [lookupEnvVar](./cloud.lookupenvvar.md)

## lookupEnvVar() function

Find the value of an environment variable in an [Environment](./cloud.environment.md)

<b>Signature:</b>

```typescript
export declare function lookupEnvVar(e: Environment, name: string): string | undefined;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  e | [<code>Environment</code>](./cloud.environment.md) | [Environment](./cloud.environment.md) to search |
|  name | <code>string</code> | variable to search for |

<b>Returns:</b>

`string | undefined`

the value of the variable name in e, or undefined if not found

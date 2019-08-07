---
id: core.adapt.callinstancemethod
title: "Adapt.callInstanceMethod() function"
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Core API Overview](overview) &gt; [@adpt/core](./core.md) &gt; [Adapt](./core.adapt.md) &gt; [callInstanceMethod](./core.adapt.callinstancemethod.md)

## Adapt.callInstanceMethod() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Immediately call method on instance pointed to by handle

<b>Signature:</b>

```typescript
export declare function callInstanceMethod<T = any>(hand: Handle, def: T, methodName: string, ...args: any[]): T;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  hand | <code>Handle</code> |  |
|  def | <code>T</code> |  |
|  methodName | <code>string</code> |  |
|  args | <code>any[]</code> |  |

<b>Returns:</b>

`T`
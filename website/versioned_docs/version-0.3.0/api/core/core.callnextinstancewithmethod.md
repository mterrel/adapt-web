---
id: "version-0.3.0-core.callnextinstancewithmethod"
title: "callNextInstanceWithMethod() function"
hide_title: true
parent_id: "version-0.3.0-api/core/core"
original_id: "core.callnextinstancewithmethod"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Core API Overview](overview) &gt; [@adpt/core](./core.md) &gt; [callNextInstanceWithMethod](./core.callnextinstancewithmethod.md)

## callNextInstanceWithMethod() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Starting with the successor of `hand`<!-- -->, search for a built Element instance in the handle chain that implements method `methodName` and immediately execute it.

<b>Signature:</b>

```typescript
export declare function callNextInstanceWithMethod<T = any>(hand: Handle, def: T, methodName: string, ...args: any[]): T;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  hand | [<code>Handle</code>](./core.handle.md) |  |
|  def | <code>T</code> |  |
|  methodName | <code>string</code> |  |
|  args | <code>any[]</code> |  |

<b>Returns:</b>

`T`

The return value of the called instance method if `hand` is associated and there is an Element in the handle chain (other than `hand`<!-- -->) that has method `methodName`<!-- -->. Otherwise, returns the default value `def`<!-- -->.

## Remarks

If `hand` is not associated with an Element, an error is thrown.

The exact check that is currently used when searching the handle chain is mounted Elements that have an instance method `methodName`<!-- -->. Because only built Elements have an Element instance, this only selects Elements that are mounted and built and will not select Elements that have been replaced by a style sheet rule.

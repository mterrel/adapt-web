---
id: "version-0.3.0-cloud.k8s.isresourcefinalelement"
title: "k8s.isResourceFinalElement() function"
hide_title: true
parent_id: "version-0.3.0-api/cloud/cloud.k8s"
original_id: "cloud.k8s.isresourcefinalelement"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [k8s](./cloud.k8s.md) &gt; [isResourceFinalElement](./cloud.k8s.isresourcefinalelement.md)

## k8s.isResourceFinalElement() function

Type assertion to see if an element is both a [Resource](./cloud.k8s.resource.md) and a `@adpt/core#FinalElement`

<b>Signature:</b>

```typescript
export declare function isResourceFinalElement(e: AdaptElement): e is FinalDomElement<ResourceProps & Adapt.BuiltinProps>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  e | <code>AdaptElement</code> | element to test |

<b>Returns:</b>

`e is FinalDomElement<ResourceProps & Adapt.BuiltinProps>`

`true` if e is both a FinalElement and a [Resource](./cloud.k8s.resource.md)<!-- -->, `false` otherwise

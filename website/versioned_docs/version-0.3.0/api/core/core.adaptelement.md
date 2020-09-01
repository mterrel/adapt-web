---
id: "version-0.3.0-core.adaptelement"
title: "AdaptElement interface"
hide_title: true
parent_id: "version-0.3.0-api/core/core"
original_id: "core.adaptelement"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Core API Overview](overview) &gt; [@adpt/core](./core.md) &gt; [AdaptElement](./core.adaptelement.md)

## AdaptElement interface

An Adapt Element is an instance of an Adapt component.

<b>Signature:</b>

```typescript
export interface AdaptElement<P extends object = AnyProps> 
```

## Remarks

The Adapt DOM is composed of Elements.

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [componentName](./core.adaptelement.componentname.md) | <code>string</code> | The name of the class or function in [AdaptElement.componentType](./core.adaptelement.componenttype.md)<!-- -->, as returned by <code>componentType.name</code> or, the string <code>&quot;anonymous&quot;</code> if no name is available. |
|  [componentType](./core.adaptelement.componenttype.md) | [<code>ComponentType</code>](./core.componenttype.md)<code>&lt;P&gt;</code> | The type of component that is associated with this element. |
|  [displayName](./core.adaptelement.displayname.md) | <code>string</code> | The name that a component author (optionally) associated with the component using the <code>displayName</code> static property. If not set on a component, defaults to [AdaptElement.componentName](./core.adaptelement.componentname.md)<!-- -->. |
|  [props](./core.adaptelement.props.md) | <code>P &amp; </code>[<code>BuiltinProps</code>](./core.builtinprops.md) | A copy of the props that the element was instantiated with |

## Methods

|  Method | Description |
|  --- | --- |
|  [addDependency(dependencies)](./core.adaptelement.adddependency.md) | Adds a dependency for this Element. This Element will wait to deploy until all <code>dependencies</code> have completed deployment. |
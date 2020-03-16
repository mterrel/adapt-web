---
id: "version-0.1.0-core.rulenorematch"
title: "ruleNoRematch() function"
hide_title: true
parent_id: "version-0.1.0-api/core/core"
original_id: "core.rulenorematch"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Core API Overview](overview) &gt; [@adpt/core](./core.md) &gt; [ruleNoRematch](./core.rulenorematch.md)

## ruleNoRematch() function

Marks an element returned by a style rule to not rematch that rule.

<b>Signature:</b>

```typescript
export declare function ruleNoRematch(info: StyleBuildInfo, elem: AdaptElement): AdaptElement<AnyProps>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  info | [<code>StyleBuildInfo</code>](./core.stylebuildinfo.md) | The second argument to a rule callback function. This indicates which rule to ignore matches of. |
|  elem | [<code>AdaptElement</code>](./core.adaptelement.md) | The element that should not match the specified rule. |

<b>Returns:</b>

[`AdaptElement`](./core.adaptelement.md)`<`[`AnyProps`](./core.anyprops.md)`>`

`elem` is returned as a convenience

## Remarks

This function can be used in a style rule build function to mark the props of the passed in element such that the rule associated with the info parameter will not match against the specified element.

This works by copying the set of all rules that have already matched successfully against the original element (origElement) specified in the info parameter onto the passed in elem.

## Example


```tsx
<Style>
  {MyComponent} {Adapt.rule<MyComponentProps>(({ handle, ...props}, info) =>
    ruleNoRematch(info, <MyComponent {...props} />))}
</Style>

```
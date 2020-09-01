---
id: "version-0.3.0-core.component"
title: "Component class"
hide_title: true
parent_id: "version-0.3.0-api/core/core"
original_id: "core.component"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Core API Overview](overview) &gt; [@adpt/core](./core.md) &gt; [Component](./core.component.md)

## Component class

<b>Signature:</b>

```typescript
export declare abstract class Component<Props extends object = {}, State extends object = {}> implements GenericInstanceMethods 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(props)](./core.component._constructor_.md) |  | Constructs a new instance of the <code>Component</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [cleanup](./core.component.cleanup.md) |  | <code>(this: this) =&gt; void</code> |  |
|  [dependsOn](./core.component.dependson.md) |  | <code>DependsOnMethod</code> |  |
|  [deployedWhen](./core.component.deployedwhen.md) |  | <code>DeployedWhenMethod</code> | A derived component's custom <code>deployedWhen</code> method. |
|  [deployedWhenIsTrivial](./core.component.deployedwhenistrivial.md) |  | <code>boolean</code> | A derived component can set this flag to <code>true</code> to indicate to user interfaces that this component's status should not typically be shown to the user, unless requested. |
|  [deployInfo](./core.component.deployinfo.md) |  | [<code>DeployInfo</code>](./core.deployinfo.md) |  |
|  [props](./core.component.props.md) |  | <code>Props &amp; Partial&lt;</code>[<code>BuiltinProps</code>](./core.builtinprops.md)<code>&gt;</code> |  |
|  [state](./core.component.state.md) |  | <code>Readonly&lt;State&gt;</code> |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [build(helpers)](./core.component.build.md) |  |  |
|  [initialState()](./core.component.initialstate.md) |  |  |
|  [setState(stateUpdate)](./core.component.setstate.md) |  |  |
|  [status(observeForStatus, buildData)](./core.component.status.md) |  |  |
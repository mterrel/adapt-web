---
id: "version-0.1.0-cloud.k8s.resource"
title: "k8s.Resource class"
hide_title: true
parent_id: "version-0.1.0-api/cloud/cloud.k8s"
original_id: "cloud.k8s.resource"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [k8s](./cloud.k8s.md) &gt; [Resource](./cloud.k8s.resource.md)

## k8s.Resource class

Primitive Component recognized by the k8s plugin to represent resources

<b>Signature:</b>

```typescript
export declare class Resource extends Action<ResourceProps> 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(props)](./cloud.k8s.resource._constructor_.md) |  |  |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [deployedWhen](./cloud.k8s.resource.deployedwhen.md) |  | <code>(goalStatus: Adapt.GoalStatus, helpers: Adapt.DeployHelpers) =&gt; Promise&lt;true &#124;</code><br/><code>Adapt.Waiting &#124;</code><br/><code>Adapt.Waiting[]&gt;</code> |  |
|  [manifest\_](./cloud.k8s.resource.manifest_.md) |  | <code>Manifest</code> |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [action(op, ctx)](./cloud.k8s.resource.action.md) |  |  |
|  [shouldAct(op, ctx)](./cloud.k8s.resource.shouldact.md) |  |  |
|  [status(observe, buildData)](./cloud.k8s.resource.status.md) |  |  |
|  [validate()](./cloud.k8s.resource.validate.md) |  |  |

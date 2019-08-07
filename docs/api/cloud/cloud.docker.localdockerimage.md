---
id: cloud.docker.localdockerimage
title: "docker.LocalDockerImage class"
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [docker](./cloud.docker.md) &gt; [LocalDockerImage](./cloud.docker.localdockerimage.md)

## docker.LocalDockerImage class

Locally builds a docker image

<b>Signature:</b>

```typescript
export declare class LocalDockerImage extends Action<LocalDockerImageProps, LocalDockerImageState> implements DockerImageInstance 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(props)](./cloud.docker.localdockerimage.(constructor).md) |  |  |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [defaultProps](./cloud.docker.localdockerimage.defaultprops.md) | <code>static</code> | <code>{</code><br/><code>        options: {};</code><br/><code>    }</code> |  |
|  [deployedWhen](./cloud.docker.localdockerimage.deployedwhen.md) |  | <code>(goalStatus: GoalStatus) =&gt; true &#124; import(&quot;@adpt/core/dist/src/deploy/deploy_types&quot;).Waiting</code> |  |
|  [image\_](./cloud.docker.localdockerimage.image_.md) |  | <code>ImageInfo</code> |  |
|  [image](./cloud.docker.localdockerimage.image.md) |  | <code>ImageInfo &#124; undefined</code> |  |
|  [imagePropsJson\_](./cloud.docker.localdockerimage.imagepropsjson_.md) |  | <code>string</code> |  |
|  [imagePropsJson](./cloud.docker.localdockerimage.imagepropsjson.md) |  | <code>string</code> |  |
|  [options\_](./cloud.docker.localdockerimage.options_.md) |  | <code>DockerBuildOptions</code> |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [action(op, \_ctx)](./cloud.docker.localdockerimage.action.md) |  |  |
|  [buildComplete()](./cloud.docker.localdockerimage.buildcomplete.md) |  |  |
|  [initialState()](./cloud.docker.localdockerimage.initialstate.md) |  |  |
|  [latestImage()](./cloud.docker.localdockerimage.latestimage.md) |  |  |
|  [ready()](./cloud.docker.localdockerimage.ready.md) |  |  |
|  [shouldAct(op)](./cloud.docker.localdockerimage.shouldact.md) |  |  |

## Remarks

See [docker.LocalDockerImageProps](./cloud.docker.localdockerimageprops.md)<!-- -->.
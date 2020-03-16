---
id: "version-0.1.0-cloud.docker.localdockerimage"
title: "docker.LocalDockerImage class"
hide_title: true
parent_id: "version-0.1.0-api/cloud/cloud.docker"
original_id: "cloud.docker.localdockerimage"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [docker](./cloud.docker.md) &gt; [LocalDockerImage](./cloud.docker.localdockerimage.md)

## docker.LocalDockerImage class

Locally builds a docker image

<b>Signature:</b>

```typescript
export declare class LocalDockerImage extends Action<LocalDockerImageProps, LocalDockerImageState> implements DockerPushableImageInstance 
```

## Remarks

See [docker.LocalDockerImageProps](./cloud.docker.localdockerimageprops.md)<!-- -->.

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(props)](./cloud.docker.localdockerimage._constructor_.md) |  |  |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [defaultProps](./cloud.docker.localdockerimage.defaultprops.md) | <code>static</code> | <code>{</code><br/><code>        options: {</code><br/><code>            dockerHost: string &#124;</code><br/><code>undefined;</code><br/><code>            forceRm: boolean;</code><br/><code>        };</code><br/><code>    }</code> |  |
|  [deployedWhenIsTrivial](./cloud.docker.localdockerimage.deployedwhenistrivial.md) |  | <code>boolean</code> |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [buildComplete()](./cloud.docker.localdockerimage.buildcomplete.md) |  |  |
|  [displayName()](./cloud.docker.localdockerimage.displayname.md) |  | User-facing name to display in status messages. |
|  [image()](./cloud.docker.localdockerimage.image.md) |  |  |
|  [latestImage()](./cloud.docker.localdockerimage.latestimage.md) |  |  |
|  [pushTo(registryUrl, newTag)](./cloud.docker.localdockerimage.pushto.md) |  |  |
|  [ready()](./cloud.docker.localdockerimage.ready.md) |  |  |
---
id: version-0.0.4-cloud.nodejs.localnodeimage
title: nodejs.LocalNodeImage() function
hide_title: true
original_id: cloud.nodejs.localnodeimage
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [nodejs](./cloud.nodejs.md) &gt; [LocalNodeImage](./cloud.nodejs.localnodeimage.md)

## nodejs.LocalNodeImage() function

Locally builds a docker image for a [Node.js](https://www.nodejs.org) program.

<b>Signature:</b>

```typescript
export declare function LocalNodeImage(props: LocalNodeImageProps): Adapt.AdaptElement<Adapt.AnyProps> | null;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  props | <code>LocalNodeImageProps</code> |  |

<b>Returns:</b>

`Adapt.AdaptElement<Adapt.AnyProps> | null`

## Remarks

Implements [docker.DockerImageInstance](./cloud.docker.dockerimageinstance.md)<!-- -->.

See [nodejs.LocalNodeImageProps](./cloud.nodejs.localnodeimageprops.md)<!-- -->.
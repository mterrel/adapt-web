---
id: "version-0.1.0-cloud.nodejs.localnodeimage"
title: "nodejs.LocalNodeImage() function"
hide_title: true
parent_id: "version-0.1.0-api/cloud/cloud.nodejs"
original_id: "cloud.nodejs.localnodeimage"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [nodejs](./cloud.nodejs.md) &gt; [LocalNodeImage](./cloud.nodejs.localnodeimage.md)

## nodejs.LocalNodeImage() function

Locally builds a docker image for a [Node.js](https://www.nodejs.org) program.

<b>Signature:</b>

```typescript
export declare function LocalNodeImage(props: LocalNodeImageProps): Adapt.AdaptElementOrNull;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  props | <code>LocalNodeImageProps</code> |  |

<b>Returns:</b>

`Adapt.AdaptElementOrNull`

## Remarks

Implements [docker.DockerImageInstance](./cloud.docker.dockerimageinstance.md)<!-- -->.

See [nodejs.LocalNodeImageProps](./cloud.nodejs.localnodeimageprops.md)<!-- -->.
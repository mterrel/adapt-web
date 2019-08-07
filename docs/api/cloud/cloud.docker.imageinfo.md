---
id: cloud.docker.imageinfo
title: "docker.ImageInfo interface"
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [docker](./cloud.docker.md) &gt; [ImageInfo](./cloud.docker.imageinfo.md)

## docker.ImageInfo interface

Information about a specific instance of a Docker image, as identified by its image ID.

<b>Signature:</b>

```typescript
export interface ImageInfo 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [id](./cloud.docker.imageinfo.id.md) | <code>string</code> | Docker image ID, in the form <code>algorithm:hex</code>. |
|  [nameTag](./cloud.docker.imageinfo.nametag.md) | <code>string</code> | Docker image name and optional tag in the form <code>name</code> or <code>name:tag</code>. |
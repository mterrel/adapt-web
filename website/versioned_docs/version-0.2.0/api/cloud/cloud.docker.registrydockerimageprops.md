---
id: "version-0.2.0-cloud.docker.registrydockerimageprops"
title: "docker.RegistryDockerImageProps interface"
hide_title: true
parent_id: "version-0.2.0-api/cloud/cloud.docker"
original_id: "cloud.docker.registrydockerimageprops"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [docker](./cloud.docker.md) &gt; [RegistryDockerImageProps](./cloud.docker.registrydockerimageprops.md)

## docker.RegistryDockerImageProps interface

Props for [docker.RegistryDockerImage](./cloud.docker.registrydockerimage.md)

<b>Signature:</b>

```typescript
export interface RegistryDockerImageProps 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [imageSrc](./cloud.docker.registrydockerimageprops.imagesrc.md) | <code>Handle&lt;DockerPushableImageInstance&gt;</code> | Handle for image source |
|  [newTag](./cloud.docker.registrydockerimageprops.newtag.md) | <code>string</code> | Tag to use for the image in the registry. |
|  [registryUrl](./cloud.docker.registrydockerimageprops.registryurl.md) | <code>string &#124;</code><br/><code>DockerSplitRegistryInfo</code> | URL or string for the registry where the image should be pushed and pulled |
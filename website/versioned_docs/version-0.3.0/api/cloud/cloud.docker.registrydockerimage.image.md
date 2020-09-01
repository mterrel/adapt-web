---
id: "version-0.3.0-cloud.docker.registrydockerimage.image"
title: "docker.RegistryDockerImage.image() method"
hide_title: true
parent_id: "version-0.3.0-api/cloud/cloud.docker"
original_id: "cloud.docker.registrydockerimage.image"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [docker](./cloud.docker.md) &gt; [RegistryDockerImage](./cloud.docker.registrydockerimage.md) &gt; [image](./cloud.docker.registrydockerimage.image.md)

## docker.RegistryDockerImage.image() method

Returns information about the version of the Docker image that reflects the current set of props for the component and has been pushed to the registry.

<b>Signature:</b>

```typescript
image(): ImageInfo | undefined;
```
<b>Returns:</b>

`ImageInfo | undefined`

## Remarks

Returns undefined if the `props.imageSrc` component's `latestImage` method returns undefined (depending on the component referenced by `props.imageSrc`<!-- -->, that may indicate the source image has not been built). Also returns undefined if the current image has not yet been pushed to the registry.
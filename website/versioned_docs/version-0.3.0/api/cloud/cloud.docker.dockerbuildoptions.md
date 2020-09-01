---
id: "version-0.3.0-cloud.docker.dockerbuildoptions"
title: "docker.DockerBuildOptions interface"
hide_title: true
parent_id: "version-0.3.0-api/cloud/cloud.docker"
original_id: "cloud.docker.dockerbuildoptions"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [docker](./cloud.docker.md) &gt; [DockerBuildOptions](./cloud.docker.dockerbuildoptions.md)

## docker.DockerBuildOptions interface

Options for performing Docker image builds.

<b>Signature:</b>

```typescript
export interface DockerBuildOptions extends DockerGlobalOptions 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [buildArgs](./cloud.docker.dockerbuildoptions.buildargs.md) | [<code>Environment</code>](./cloud.environment.md) |  |
|  [deployID](./cloud.docker.dockerbuildoptions.deployid.md) | <code>string</code> | If set, will add a Docker LABEL with the DeployID. |
|  [forceRm](./cloud.docker.dockerbuildoptions.forcerm.md) | <code>boolean</code> |  |
|  [imageName](./cloud.docker.dockerbuildoptions.imagename.md) | <code>string</code> |  |
|  [imageTag](./cloud.docker.dockerbuildoptions.imagetag.md) | <code>string</code> |  |
|  [prevUniqueTag](./cloud.docker.dockerbuildoptions.prevuniquetag.md) | <code>string</code> |  |
|  [stdin](./cloud.docker.dockerbuildoptions.stdin.md) | <code>string</code> |  |
|  [uniqueTag](./cloud.docker.dockerbuildoptions.uniquetag.md) | <code>boolean</code> | If true and the newly built image ID does not match the image ID for prevUniqueTag (or prevUniqeTag is not set), a new unique nameTag is generated for this image (from imageName and imageTag). If true and the newly built image ID does match the image ID for prevUniqueTag, then prevUniqueTag is returned as nameTag. If false, imageName and imageTag are used without modification. |
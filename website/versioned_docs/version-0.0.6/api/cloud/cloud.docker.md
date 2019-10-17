---
id: version-0.0.6-cloud.docker
title: docker namespace
hide_title: true
original_id: cloud.docker
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [docker](./cloud.docker.md)

## docker namespace

Docker library for Adapt.

<b>Signature:</b>

```typescript
export * from "./DockerImage";
export * from "./DockerContainer";
export * from "./labels";
export * from "./LocalDockerImage";
export * from "./LocalDockerRegistry";
export * from "./RegistryDockerImage";
export * from "./types";
//# sourceMappingURL=index.d.ts.map
```

## Classes

|  Class | Description |
|  --- | --- |
|  [default](./cloud.docker.default.md) | Component to instantiate an image container with docker |
|  [DockerContainer](./cloud.docker.dockercontainer.md) | Component to instantiate an image container with docker |
|  [DockerImage](./cloud.docker.dockerimage.md) | <b><i>(BETA)</i></b> Abstract component representing a [Docker](https://docker.com) image that can be used to create containers. |
|  [LocalDockerImage](./cloud.docker.localdockerimage.md) | Locally builds a docker image |
|  [RegistryDockerImage](./cloud.docker.registrydockerimage.md) | Represents a Docker image in a registry. |

## Functions

|  Function | Description |
|  --- | --- |
|  [LocalDockerRegistry(props)](./cloud.docker.localdockerregistry.md) | Runs a Docker registry in a container. |

## Interfaces

|  Interface | Description |
|  --- | --- |
|  [DockerBuildOptions](./cloud.docker.dockerbuildoptions.md) | Options for performing Docker image builds. |
|  [DockerContainerProps](./cloud.docker.dockercontainerprops.md) | Props for [docker.DockerContainer](./cloud.docker.dockercontainer.md) |
|  [DockerContainerStatus](./cloud.docker.dockercontainerstatus.md) |  |
|  [DockerGlobalOptions](./cloud.docker.dockerglobaloptions.md) | Options for interacting with Docker Engine that apply to all operations. |
|  [DockerImageInstance](./cloud.docker.dockerimageinstance.md) | Components that provide a Docker image can implement this interface to allow other components to get information about the Docker image. |
|  [DockerImageProps](./cloud.docker.dockerimageprops.md) | <b><i>(BETA)</i></b> Props for [docker.DockerImage](./cloud.docker.dockerimage.md)<!-- -->. |
|  [DockerPushableImageInstance](./cloud.docker.dockerpushableimageinstance.md) | Components that provide a Docker image can implement this interface to allow other components to get information about the Docker image and to be able to push the image to a registry. |
|  [DockerRegistryInstance](./cloud.docker.dockerregistryinstance.md) |  |
|  [File](./cloud.docker.file.md) | A dynamically-created file that can be used during the build of a Docker image. |
|  [ImageInfo](./cloud.docker.imageinfo.md) | Information about a specific instance of a Docker image, as identified by its image ID. |
|  [LocalDockerImageProps](./cloud.docker.localdockerimageprops.md) | Props for [docker.LocalDockerImage](./cloud.docker.localdockerimage.md) |
|  [LocalDockerRegistryProps](./cloud.docker.localdockerregistryprops.md) | Props for [docker.LocalDockerRegistry()](./cloud.docker.localdockerregistry.md) |
|  [RegistryDockerImageProps](./cloud.docker.registrydockerimageprops.md) | Props for [docker.RegistryDockerImage](./cloud.docker.registrydockerimage.md) |
|  [Stage](./cloud.docker.stage.md) | A stage to be added to a [multi-stage Docker build](https://docs.docker.com/develop/develop-images/multistage-build/)<!-- -->. |

## Type Aliases

|  Type Alias | Description |
|  --- | --- |
|  [ImageIdString](./cloud.docker.imageidstring.md) | Docker image ID, in the form <code>algorithm:hex</code>. |
|  [ImageNameString](./cloud.docker.imagenamestring.md) | A string reference to a Docker image that contains a repo name, and may contain an optional registry and optionally either a tag or a repo digest. |
|  [NameTagString](./cloud.docker.nametagstring.md) | A string reference to a Docker image that contains a repo name, and may contain an optional registry and optional tag. |
|  [RegistryString](./cloud.docker.registrystring.md) | A string that references a Docker registry that contains a hostname and may optionally contain a port and/or path. |
|  [RepoDigestString](./cloud.docker.repodigeststring.md) | A string that contains both a Docker repo and a registry digest. |
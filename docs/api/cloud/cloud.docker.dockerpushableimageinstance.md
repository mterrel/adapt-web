---
id: cloud.docker.dockerpushableimageinstance
title: "docker.DockerPushableImageInstance interface"
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [docker](./cloud.docker.md) &gt; [DockerPushableImageInstance](./cloud.docker.dockerpushableimageinstance.md)

## docker.DockerPushableImageInstance interface

Components that provide a Docker image can implement this interface to allow other components to get information about the Docker image and to be able to push the image to a registry.

<b>Signature:</b>

```typescript
export interface DockerPushableImageInstance extends DockerImageInstance 
```

## Methods

|  Method | Description |
|  --- | --- |
|  [pushTo(registryUrl, newTag)](./cloud.docker.dockerpushableimageinstance.pushto.md) | Pushes the image returned by <code>latestImage</code> to a Docker registry. |
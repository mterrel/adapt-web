---
id: cloud.docker.imageidstring
title: "docker.ImageIdString type"
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [docker](./cloud.docker.md) &gt; [ImageIdString](./cloud.docker.imageidstring.md)

## docker.ImageIdString type

Docker image ID, in the form `algorithm:hex`<!-- -->.

<b>Signature:</b>

```typescript
export declare type ImageIdString = string;
```

## Remarks

The Docker image ID (also known as "Content Hash") is a single value that uniquely identifies a specific image on a local Docker host.

An image ID does not require a registry or repo qualifier to be significant. It is distinct from a Docker image [repo digest](./cloud.docker.repodigeststring.md)<!-- -->.

Example:

```
sha256:199e537da3a86126cd6eb114bd0b13ab178dc291bbb6ea4a4a3aa257b2366b71

```
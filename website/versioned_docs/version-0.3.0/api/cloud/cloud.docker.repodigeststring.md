---
id: "version-0.3.0-cloud.docker.repodigeststring"
title: "docker.RepoDigestString type"
hide_title: true
parent_id: "version-0.3.0-api/cloud/cloud.docker"
original_id: "cloud.docker.repodigeststring"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [docker](./cloud.docker.md) &gt; [RepoDigestString](./cloud.docker.repodigeststring.md)

## docker.RepoDigestString type

A string that contains both a Docker repo and a registry digest.

<b>Signature:</b>

```typescript
export declare type RepoDigestString = string;
```

## Remarks

This is a string that represents a specific image on a specific registry contained in a particular repo on that registry. It's of the form:

```
[registry/]repo@digest

```
`registry` - (optional) The hostname or hostname:port of a Docker registry where the repo is located. If not provided, the official default Docker registry is assumed.

`repo` - The more precise name for what's commonly referred to as an image name. It may include 0 or more slashes to denote namespaces.

`digest` - The repo digest for the image in the form `algorithm:hex`<!-- -->. This digest is specific to the associated registry and repo and has no significance without those additional pieces of information. If this image is pushed to a different registry, it will have a different digest value. The digest is also known as a "distribution hash".

Examples:

```
alpine@sha256:04696b491e0cc3c58a75bace8941c14c924b9f313b03ce5029ebbc040ed9dcd9
localhost:5000/mockdeploy-htws@sha256:899a03e9816e5283edba63d71ea528cd83576b28a7586cf617ce78af5526f209

```

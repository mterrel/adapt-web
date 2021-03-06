---
id: "version-0.2.0-cloud.docker.nametagstring"
title: "docker.NameTagString type"
hide_title: true
parent_id: "version-0.2.0-api/cloud/cloud.docker"
original_id: "cloud.docker.nametagstring"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [docker](./cloud.docker.md) &gt; [NameTagString](./cloud.docker.nametagstring.md)

## docker.NameTagString type

A string reference to a Docker image that contains a repo name, and may contain an optional registry and optional tag.

<b>Signature:</b>

```typescript
export declare type NameTagString = string;
```

## Remarks

This is a string that references a Docker image. It's in the form of one of:

```
[registry/]repo
[registry/]repo:tag

```
`registry` - (optional) The hostname or hostname:port of a Docker registry where the repo is located. If not provided, depending on context, either the official default Docker registry may be assumed or the image may just be present locally and not on any registry.

`repo` - The more precise name for what's commonly referred to as an image name. It may include 0 or more slashes to denote namespaces.

`tag` - A tag string identifying a version of image within the repo.

Examples:

```
alpine
ubuntu:16.04

```

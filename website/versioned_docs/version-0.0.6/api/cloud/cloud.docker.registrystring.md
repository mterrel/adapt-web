---
id: "version-0.0.6-cloud.docker.registrystring"
title: "docker.RegistryString type"
hide_title: true
parent_id: "version-0.0.6-api/cloud/cloud.docker"
original_id: "cloud.docker.registrystring"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [docker](./cloud.docker.md) &gt; [RegistryString](./cloud.docker.registrystring.md)

## docker.RegistryString type

A string that references a Docker registry that contains a hostname and may optionally contain a port and/or path.

<b>Signature:</b>

```typescript
export declare type RegistryString = string;
```

## Remarks

This string is in the form of one of:

```
hostname[:port]
hostname[:port]/path

```
This form does not include the protocol, such as `http:` or `https:` in the string.

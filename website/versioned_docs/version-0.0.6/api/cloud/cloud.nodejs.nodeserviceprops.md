---
id: "version-0.0.6-cloud.nodejs.nodeserviceprops"
title: "nodejs.NodeServiceProps interface"
hide_title: true
parent_id: "version-0.0.6-api/cloud/cloud.nodejs"
original_id: "cloud.nodejs.nodeserviceprops"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [nodejs](./cloud.nodejs.md) &gt; [NodeServiceProps](./cloud.nodejs.nodeserviceprops.md)

## nodejs.NodeServiceProps interface

Props for [nodejs.NodeService()](./cloud.nodejs.nodeservice.md)<!-- -->.

<b>Signature:</b>

```typescript
export interface NodeServiceProps 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [connectTo](./cloud.nodejs.nodeserviceprops.connectto.md) | <code>Handle&lt;</code>[<code>ConnectToInstance</code>](./cloud.connecttoinstance.md)<code>&gt; &#124;</code><br/><code>Handle&lt;</code>[<code>ConnectToInstance</code>](./cloud.connecttoinstance.md)<code>&gt;[]</code> | Handles for services that this component connects to. |
|  [deps](./cloud.nodejs.nodeserviceprops.deps.md) | <code>Handle &#124; Handle[]</code> | Dependencies that must be deployed before the Container image will build. |
|  [env](./cloud.nodejs.nodeserviceprops.env.md) | [<code>Environment</code>](./cloud.environment.md) | Object containing environment variables that the Container will be started with. |
|  [externalPort](./cloud.nodejs.nodeserviceprops.externalport.md) | <code>number</code> | The port that the NetworkService will expose. |
|  [port](./cloud.nodejs.nodeserviceprops.port.md) | <code>number</code> | The port number that the Node Container will use. |
|  [scope](./cloud.nodejs.nodeserviceprops.scope.md) | [<code>NetworkServiceScope</code>](./cloud.networkservicescope.md) | Scope within which the NetworkService will be exposed. |
|  [srcDir](./cloud.nodejs.nodeserviceprops.srcdir.md) | <code>string</code> | Root directory (which contains package.json) for the Node.js app source code. |

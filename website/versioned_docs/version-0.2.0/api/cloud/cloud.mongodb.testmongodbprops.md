---
id: "version-0.2.0-cloud.mongodb.testmongodbprops"
title: "mongodb.TestMongoDBProps interface"
hide_title: true
parent_id: "version-0.2.0-api/cloud/cloud.mongodb"
original_id: "cloud.mongodb.testmongodbprops"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [mongodb](./cloud.mongodb.md) &gt; [TestMongoDBProps](./cloud.mongodb.testmongodbprops.md)

## mongodb.TestMongoDBProps interface

Props for [mongodb.TestMongoDB()](./cloud.mongodb.testmongodb.md)

<b>Signature:</b>

```typescript
export interface TestMongoDBProps 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [image](./cloud.mongodb.testmongodbprops.image.md) | <code>string</code> | Image used for TestMongoDB container, defaults to mongo:latest |
|  [imagePullPolicy](./cloud.mongodb.testmongodbprops.imagepullpolicy.md) | <code>&quot;Always&quot; &#124;</code><br/><code>&quot;IfNotPresent&quot; &#124;</code><br/><code>&quot;Never&quot; &#124;</code><br/><code>undefined</code> | Specifies when to pull image, defaults to <code>&quot;Always&quot;</code> |
|  [port](./cloud.mongodb.testmongodbprops.port.md) | <code>number</code> | Port on which the Mongo DB service is exposed |
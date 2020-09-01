---
id: "version-0.3.0-cloud.containerstatus"
title: "ContainerStatus interface"
hide_title: true
parent_id: "version-0.3.0-api/cloud/cloud"
original_id: "cloud.containerstatus"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [ContainerStatus](./cloud.containerstatus.md)

## ContainerStatus interface

Status of a [Container](./cloud.container.md)<!-- -->.

<b>Signature:</b>

```typescript
export interface ContainerStatus 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [AppArmorProfile](./cloud.containerstatus.apparmorprofile.md) | <code>string</code> |  |
|  [Args](./cloud.containerstatus.args.md) | <code>string[]</code> |  |
|  [Config](./cloud.containerstatus.config.md) | [<code>Config</code>](./cloud.config.md) |  |
|  [Created](./cloud.containerstatus.created.md) | <code>string</code> |  |
|  [Driver](./cloud.containerstatus.driver.md) | <code>string</code> |  |
|  [ExecIDs](./cloud.containerstatus.execids.md) | <code>string</code> |  |
|  [GraphDriver](./cloud.containerstatus.graphdriver.md) | <code>FIXME_NeedsProperType</code> |  |
|  [HostConfig](./cloud.containerstatus.hostconfig.md) | [<code>HostConfigStatus</code>](./cloud.hostconfigstatus.md) |  |
|  [HostnamePath](./cloud.containerstatus.hostnamepath.md) | <code>string</code> |  |
|  [HostsPath](./cloud.containerstatus.hostspath.md) | <code>string</code> |  |
|  [Id](./cloud.containerstatus.id.md) | <code>string</code> |  |
|  [Image](./cloud.containerstatus.image.md) | <code>string</code> |  |
|  [MountLabel](./cloud.containerstatus.mountlabel.md) | <code>string</code> |  |
|  [Mounts](./cloud.containerstatus.mounts.md) | [<code>MountStatus</code>](./cloud.mountstatus.md)<code>[]</code> |  |
|  [Name](./cloud.containerstatus.name.md) | <code>string</code> |  |
|  [NetworkSettings](./cloud.containerstatus.networksettings.md) | [<code>ContainerNetworkSettings</code>](./cloud.containernetworksettings.md) |  |
|  [Node](./cloud.containerstatus.node.md) | <code>FIXME_NeedsProperType</code> |  |
|  [Path](./cloud.containerstatus.path.md) | <code>string</code> |  |
|  [ProcessLabel](./cloud.containerstatus.processlabel.md) | <code>string</code> |  |
|  [ResolvConfPath](./cloud.containerstatus.resolvconfpath.md) | <code>string</code> |  |
|  [RestartCount](./cloud.containerstatus.restartcount.md) | <code>number</code> |  |
|  [SizeRootFs](./cloud.containerstatus.sizerootfs.md) | <code>number</code> |  |
|  [SizeRw](./cloud.containerstatus.sizerw.md) | <code>number</code> |  |
|  [State](./cloud.containerstatus.state.md) | [<code>ContainerState</code>](./cloud.containerstate.md) |  |
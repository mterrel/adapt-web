---
id: "version-0.0.6-cloud.k8s.servicespec"
title: "k8s.ServiceSpec interface"
hide_title: true
parent_id: "version-0.0.6-api/cloud/cloud.k8s"
original_id: "cloud.k8s.servicespec"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [k8s](./cloud.k8s.md) &gt; [ServiceSpec](./cloud.k8s.servicespec.md)

## k8s.ServiceSpec interface


<b>Signature:</b>

```typescript
export interface ServiceSpec 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [clusterIP](./cloud.k8s.servicespec.clusterip.md) | <code>string</code> | Cluster IP for a [k8s.Service()](./cloud.k8s.service.md) |
|  [externalIPs](./cloud.k8s.servicespec.externalips.md) | <code>string[]</code> | externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service. |
|  [externalName](./cloud.k8s.servicespec.externalname.md) | <code>string</code> | externalName is the external reference that kubedns or equivalent will return as a CNAME record for this service.No proxying will be involved.Must be a valid RFC - 1123 hostname ([https://tools.ietf.org/html/rfc1123](https://tools.ietf.org/html/rfc1123)<!-- -->) and requires Type to be ExternalName. |
|  [externalTrafficPolicy](./cloud.k8s.servicespec.externaltrafficpolicy.md) | <code>string</code> | externalTrafficPolicy denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints. |
|  [healthCheckNodePort](./cloud.k8s.servicespec.healthchecknodeport.md) | <code>number</code> | healthCheckNodePort specifies the healthcheck nodePort for the service. |
|  [loadBalancerIP](./cloud.k8s.servicespec.loadbalancerip.md) | <code>string</code> | Only applies to Service Type: LoadBalancer LoadBalancer will get created with the IP specified in this field. |
|  [loadBalancerSourceRanges](./cloud.k8s.servicespec.loadbalancersourceranges.md) | <code>string[]</code> | If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. |
|  [ports](./cloud.k8s.servicespec.ports.md) | <code>ServicePort[]</code> | The list of ports that are exposed by this service. |
|  [publishNotReadyAddresses](./cloud.k8s.servicespec.publishnotreadyaddresses.md) | <code>boolean</code> | publishNotReadyAddresses, when set to true, indicates that DNS implementations must publish the notReadyAddresses of subsets for the Endpoints associated with the Service. |
|  [selector](./cloud.k8s.servicespec.selector.md) | <code>object</code> | Route service traffic to pods with label keys and values matching this selector. |
|  [sessionAffinity](./cloud.k8s.servicespec.sessionaffinity.md) | <code>string</code> | Used to maintain session affinity |
|  [type](./cloud.k8s.servicespec.type.md) | <code>string</code> | type determines how the Service is exposed. |

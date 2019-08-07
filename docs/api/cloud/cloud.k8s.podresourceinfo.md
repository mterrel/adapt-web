---
id: cloud.k8s.podresourceinfo
title: "k8s.podResourceInfo variable"
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [k8s](./cloud.k8s.md) &gt; [podResourceInfo](./cloud.k8s.podresourceinfo.md)

## k8s.podResourceInfo variable

<b>Signature:</b>

```typescript
podResourceInfo: {
    kind: string;
    apiName: string;
    deployedWhen: typeof deployedWhen;
    statusQuery: (props: ResourceProps, observe: Adapt.ObserveForStatus<unknown>, buildData: Adapt.BuildData) => Promise<any>;
    specsEqual: typeof podSpecsEqual;
}
```
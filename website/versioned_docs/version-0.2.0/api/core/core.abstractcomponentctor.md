---
id: "version-0.2.0-core.abstractcomponentctor"
title: "AbstractComponentCtor type"
hide_title: true
parent_id: "version-0.2.0-api/core/core"
original_id: "core.abstractcomponentctor"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Core API Overview](overview) &gt; [@adpt/core](./core.md) &gt; [AbstractComponentCtor](./core.abstractcomponentctor.md)

## AbstractComponentCtor type

<b>Signature:</b>

```typescript
export declare type AbstractComponentCtor<P extends object = AnyProps, S extends object = AnyState, T extends Component<P, S> = Component<P, S>> = Function & {
    prototype: T;
};
```
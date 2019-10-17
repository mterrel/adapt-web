---
id: version-0.0.6-core.handleinstancetype
title: HandleInstanceType type
hide_title: true
original_id: core.handleinstancetype
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Core API Overview](overview) &gt; [@adpt/core](./core.md) &gt; [HandleInstanceType](./core.handleinstancetype.md)

## HandleInstanceType type

Extracts the instance type associated with a [Handle](./core.handle.md)<!-- -->.

<b>Signature:</b>

```typescript
export declare type HandleInstanceType<H extends Handle> = H extends Handle<infer I> ? I : never;
```
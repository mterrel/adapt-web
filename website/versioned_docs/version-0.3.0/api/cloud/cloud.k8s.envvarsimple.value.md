---
id: "version-0.3.0-cloud.k8s.envvarsimple.value"
title: "k8s.EnvVarSimple.value property"
hide_title: true
parent_id: "version-0.3.0-api/cloud/cloud.k8s"
original_id: "cloud.k8s.envvarsimple.value"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [k8s](./cloud.k8s.md) &gt; [EnvVarSimple](./cloud.k8s.envvarsimple.md) &gt; [value](./cloud.k8s.envvarsimple.value.md)

## k8s.EnvVarSimple.value property

Variable references $(VAR\_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR\_NAME) syntax can be escaped with a double $$, ie: $$(VAR\_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".

<b>Signature:</b>

```typescript
value: string;
```
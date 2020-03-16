---
id: "version-0.1.0-cloud.k8s.kubeconfig"
title: "k8s.Kubeconfig interface"
hide_title: true
parent_id: "version-0.1.0-api/cloud/cloud.k8s"
original_id: "cloud.k8s.kubeconfig"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [k8s](./cloud.k8s.md) &gt; [Kubeconfig](./cloud.k8s.kubeconfig.md)

## k8s.Kubeconfig interface


<b>Signature:</b>

```typescript
export interface Kubeconfig 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  ["current-context"](./cloud.k8s.kubeconfig._current-context_.md) | <code>string</code> |  |
|  [apiVersion](./cloud.k8s.kubeconfig.apiversion.md) | <code>&quot;v1&quot;</code> |  |
|  [clusters](./cloud.k8s.kubeconfig.clusters.md) | <code>{</code><br/><code>        name: string;</code><br/><code>        cluster: {</code><br/><code>            &quot;certificate-authority-data&quot;: string;</code><br/><code>            server: string;</code><br/><code>        };</code><br/><code>    }[]</code> |  |
|  [contexts](./cloud.k8s.kubeconfig.contexts.md) | <code>{</code><br/><code>        name: string;</code><br/><code>        context: {</code><br/><code>            cluster: string;</code><br/><code>            user: string;</code><br/><code>        };</code><br/><code>    }[]</code> |  |
|  [kind](./cloud.k8s.kubeconfig.kind.md) | <code>&quot;Config&quot;</code> |  |
|  [preferences](./cloud.k8s.kubeconfig.preferences.md) | <code>unknown</code> |  |
|  [users](./cloud.k8s.kubeconfig.users.md) | <code>{</code><br/><code>        name: string;</code><br/><code>        user: {</code><br/><code>            &quot;client-certificate-data&quot;?: string;</code><br/><code>            &quot;client-key-data&quot;?: string;</code><br/><code>            &quot;username&quot;?: string;</code><br/><code>            &quot;password&quot;?: string;</code><br/><code>        };</code><br/><code>    }[]</code> |  |
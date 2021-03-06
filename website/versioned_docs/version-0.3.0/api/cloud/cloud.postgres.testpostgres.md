---
id: "version-0.3.0-cloud.postgres.testpostgres"
title: "postgres.TestPostgres() function"
hide_title: true
parent_id: "version-0.3.0-api/cloud/cloud.postgres"
original_id: "cloud.postgres.testpostgres"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Cloud API Overview](overview) &gt; [@adpt/cloud](./cloud.md) &gt; [postgres](./cloud.postgres.md) &gt; [TestPostgres](./cloud.postgres.testpostgres.md)

## postgres.TestPostgres() function

A component suitable for creating test scenarios that creates a simple, temporary Postgres database that loads test data from a .sql file and which implements the abstract [postgres.Postgres()](./cloud.postgres.postgres.md) interface.

<b>Signature:</b>

```typescript
export declare function TestPostgres(props: SFCDeclProps<TestPostgresProps>): Adapt.AdaptElement<Adapt.AnyProps>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  props | <code>SFCDeclProps&lt;TestPostgresProps&gt;</code> |  |

<b>Returns:</b>

`Adapt.AdaptElement<Adapt.AnyProps>`

## Remarks

Implements the [ConnectToInstance](./cloud.connecttoinstance.md) interface.

Instance methods:

- `connectEnv(scope?: NetworkScope): Environment | undefined`

Returns the set of environment variables that have all the information needed for a Postgres client to connect to this database. The returned environment variables are named such that some common Postgres clients can use them directly:

`PGHOST`<!-- -->: The host to connect to.

`PGDATABASE`<!-- -->: The name of the database.

`PGUSER`<!-- -->: Username to use to authenticate to the database server or service.

`PGPASSWORD`<!-- -->: Password to use to authenticate to the database server or service.

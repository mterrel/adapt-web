---
id: "version-0.3.0-core.adapt"
title: "Adapt namespace"
hide_title: true
original_id: "core.adapt"
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Core API Overview](overview) &gt; [@adpt/core](./core.md) &gt; [Adapt](./core.adapt.md)

## Adapt namespace

## Classes

|  Class | Description |
|  --- | --- |
|  [DomError](./core.adapt.domerror.md) |  |
|  [Group](./core.adapt.group.md) |  |
|  [WidgetPlugin](./core.adapt.widgetplugin.md) |  |

## Enumerations

|  Enumeration | Description |
|  --- | --- |
|  [ChangeType](./core.adapt.changetype.md) |  |
|  [DeployOpStatusExt](./core.adapt.deployopstatusext.md) |  |
|  [DeployStatus](./core.adapt.deploystatus.md) |  |
|  [InternalStatus](./core.adapt.internalstatus.md) |  |

## Functions

|  Function | Description |
|  --- | --- |
|  [AllOf(h, deps)](./core.adapt.allof.md) |  |
|  [AnyOf(h, deps)](./core.adapt.anyof.md) |  |
|  [buildPrinter()](./core.adapt.buildprinter.md) |  |
|  [createDeployment(options)](./core.adapt.createdeployment.md) |  |
|  [destroyDeployment(optionsIn)](./core.adapt.destroydeployment.md) |  |
|  [domActiveElems(diff)](./core.adapt.domactiveelems.md) | Given a DomDiff, generated from an old and new DOM, returns an Array of the Elements that will be active if this DomDiff is deployed. That means all of the Elements in the new DOM plus the deleted Elements from the old DOM. |
|  [domDiff(oldDom, newDom, idFunc)](./core.adapt.domdiff.md) |  |
|  [domForEach(dom, f)](./core.adapt.domforeach.md) |  |
|  [domMap(dom, f)](./core.adapt.dommap.md) |  |
|  [fetchStatus(options)](./core.adapt.fetchstatus.md) |  |
|  [goalToInProgress(stat)](./core.adapt.goaltoinprogress.md) |  |
|  [isDeployStatus(val)](./core.adapt.isdeploystatus.md) |  |
|  [isDomErrorElement(element)](./core.adapt.isdomerrorelement.md) |  |
|  [isFinalStatus(ds)](./core.adapt.isfinalstatus.md) |  |
|  [isGoalStatus(ds)](./core.adapt.isgoalstatus.md) |  |
|  [isInProgress(stat)](./core.adapt.isinprogress.md) |  |
|  [isProxying(stat)](./core.adapt.isproxying.md) |  |
|  [isRelation(v)](./core.adapt.isrelation.md) |  |
|  [listDeployments(options)](./core.adapt.listdeployments.md) |  |
|  [logElements(msg, elements, logger)](./core.adapt.logelements.md) |  |
|  [None()](./core.adapt.none.md) |  |
|  [Only(h, dep)](./core.adapt.only.md) |  |
|  [registerPlugin(plugin)](./core.adapt.registerplugin.md) |  |
|  [Sequence(props)](./core.adapt.sequence.md) | Component that deploys its children sequentially. |
|  [toDeployStatus(stat)](./core.adapt.todeploystatus.md) |  |
|  [updateDeployment(options)](./core.adapt.updatedeployment.md) |  |

## Interfaces

|  Interface | Description |
|  --- | --- |
|  [ActComplete](./core.adapt.actcomplete.md) |  |
|  [Action](./core.adapt.action.md) |  |
|  [ActionChange](./core.adapt.actionchange.md) | Describes the effect an Action has on a specific Element |
|  [ActionInfo](./core.adapt.actioninfo.md) | Describes the overall effect that an Action is performing. |
|  [ActOptions](./core.adapt.actoptions.md) |  |
|  [BuildOpAscend](./core.adapt.buildopascend.md) |  |
|  [BuildOpBuildDeferred](./core.adapt.buildopbuilddeferred.md) |  |
|  [BuildOpDefer](./core.adapt.buildopdefer.md) |  |
|  [BuildOpDescend](./core.adapt.buildopdescend.md) |  |
|  [BuildOpDone](./core.adapt.buildopdone.md) |  |
|  [BuildOpElementBuilt](./core.adapt.buildopelementbuilt.md) |  |
|  [BuildOpElementDone](./core.adapt.buildopelementdone.md) |  |
|  [BuildOpError](./core.adapt.buildoperror.md) |  |
|  [BuildOpStart](./core.adapt.buildopstart.md) |  |
|  [BuildOpStep](./core.adapt.buildopstep.md) |  |
|  [CreateOptions](./core.adapt.createoptions.md) |  |
|  [DeployHelpers](./core.adapt.deployhelpers.md) |  |
|  [DeploymentInfo](./core.adapt.deploymentinfo.md) |  |
|  [DestroyOptions](./core.adapt.destroyoptions.md) |  |
|  [DomDiff](./core.adapt.domdiff.md) |  |
|  [DomErrorProps](./core.adapt.domerrorprops.md) |  |
|  [ExecuteComplete](./core.adapt.executecomplete.md) |  |
|  [ExecuteOptions](./core.adapt.executeoptions.md) |  |
|  [ExecutionPlan](./core.adapt.executionplan.md) |  |
|  [ExecutionPlanOptions](./core.adapt.executionplanoptions.md) |  |
|  [GroupProps](./core.adapt.groupprops.md) |  |
|  [ListOptions](./core.adapt.listoptions.md) |  |
|  [ListResponse](./core.adapt.listresponse.md) |  |
|  [Observed](./core.adapt.observed.md) |  |
|  [Plugin](./core.adapt.plugin.md) |  |
|  [PluginConfig](./core.adapt.pluginconfig.md) |  |
|  [PluginManager](./core.adapt.pluginmanager.md) |  |
|  [PluginManagerStartOptions](./core.adapt.pluginmanagerstartoptions.md) |  |
|  [PluginModule](./core.adapt.pluginmodule.md) |  |
|  [PluginObservations](./core.adapt.pluginobservations.md) |  |
|  [PluginOptions](./core.adapt.pluginoptions.md) |  |
|  [PluginRegistration](./core.adapt.pluginregistration.md) |  |
|  [QueryDomain](./core.adapt.querydomain.md) |  |
|  [Relation](./core.adapt.relation.md) | Relations are used to describe the logic of when an object will be ready. |
|  [RelationExt](./core.adapt.relationext.md) |  |
|  [SequenceProps](./core.adapt.sequenceprops.md) | Props for [Adapt.Sequence()](./core.adapt.sequence.md)<!-- -->. |
|  [StatusOptions](./core.adapt.statusoptions.md) |  |
|  [UpdateOptions](./core.adapt.updateoptions.md) |  |
|  [Waiting](./core.adapt.waiting.md) |  |
|  [WidgetChange](./core.adapt.widgetchange.md) |  |
|  [WidgetPair](./core.adapt.widgetpair.md) |  |

## Namespaces

|  Namespace | Description |
|  --- | --- |
|  [internal](./core.adapt.internal.md) |  |
|  [JSX](./core.adapt.jsx.md) |  |

## Variables

|  Variable | Description |
|  --- | --- |
|  [And](./core.adapt.and.md) |  |
|  [defaultDomDiffId](./core.adapt.defaultdomdiffid.md) |  |
|  [DeployOpStatus](./core.adapt.deployopstatus.md) |  |
|  [DeployStatusExt](./core.adapt.deploystatusext.md) |  |
|  [Edge](./core.adapt.edge.md) |  |
|  [False](./core.adapt.false.md) |  |
|  [GoalStatus](./core.adapt.goalstatus.md) |  |
|  [Identity](./core.adapt.identity.md) |  |
|  [isDependsOn](./core.adapt.isdependson.md) |  |
|  [Not](./core.adapt.not.md) |  |
|  [Or](./core.adapt.or.md) |  |
|  [True](./core.adapt.true.md) |  |
|  [Value](./core.adapt.value.md) |  |
|  [waiting](./core.adapt.waiting.md) |  |

## Type Aliases

|  Type Alias | Description |
|  --- | --- |
|  [BoolVal](./core.adapt.boolval.md) |  |
|  [BuildListener](./core.adapt.buildlistener.md) |  |
|  [BuildOp](./core.adapt.buildop.md) |  |
|  [Defaultize](./core.adapt.defaultize.md) |  |
|  [Dependency](./core.adapt.dependency.md) |  |
|  [DependsOn](./core.adapt.dependson.md) |  |
|  [DependsOnMethod](./core.adapt.dependsonmethod.md) |  |
|  [DeployedWhenMethod](./core.adapt.deployedwhenmethod.md) | A function that gives information about whether an Element has finished deploying. |
|  [DeployOpStatus](./core.adapt.deployopstatus.md) |  |
|  [DeployStatusExt](./core.adapt.deploystatusext.md) |  |
|  [DomDiffIdFunc](./core.adapt.domdiffidfunc.md) |  |
|  [FinalStatus](./core.adapt.finalstatus.md) |  |
|  [GoalStatus](./core.adapt.goalstatus.md) | During a deploy operation for a resource or set of resources, the intended final status for the resource. |
|  [IsDeployedFunc](./core.adapt.isdeployedfunc.md) |  |
|  [PluginInstances](./core.adapt.plugininstances.md) |  |
|  [PluginKey](./core.adapt.pluginkey.md) |  |
|  [PluginModules](./core.adapt.pluginmodules.md) |  |
|  [RelationOp](./core.adapt.relationop.md) |  |
|  [WaitStatus](./core.adapt.waitstatus.md) |  |

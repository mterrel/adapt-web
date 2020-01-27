---
title: "Declarative Infrastructure is Broken"
author: Manish Vachharajani
authorTitle: Co-founder, Unbounded Systems
authorURL: https://twitter.com/mvachhar
authorTwitter: mvachhar
authorImageURL: /img/profiles/manish.jpg
image: blog/assets/broken-window-960188.jpg
description: "Declarative Infrastructure Specifications are all the rage, but they’re not the whole solution."
---

![Broken Window](assets/broken-window-960188.jpg)

Right now declarative infrastructure specifications are all the rage.
[Kubernetes](https://kubernetes.io) and its vast array of YAML is the poster child of the declarative movement.
All of the other popular, recent tools in this space, like [Terraform](https://terraform.io) and AWS [CloudFormation](https://aws.amazon.com/cloudformation/) are also on trend.

Yet, in practice, these declarative specifications aren’t sufficient.<!--truncate-->
They’re often stitched together with imperative code, or at least declarative specifications of imperative constructs, like deployment pipelines.
For example, once your Kubernetes deployments start to get more complex, you’ll most likely need [Operators](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/), which are imperative [Go](https://golang.org/) code
When you get frustrated at how difficult it is to create and maintain your CloudFormation templates, there’s [AWS CDK](https://aws.amazon.com/cdk/), which lets you write an imperative program to generate those.
If you need to define a sequence of steps to deploy your new code, you can add [Spinnaker](https://www.spinnaker.io/) to the mix.
Or, for the classic approach, just ask a DevOps engineer about their custom scripts that orchestrate the deployment workflow (which this [insightful article](https://medium.com/@archisgore/can-we-just-cut-to-infrastructure-as-declarative-code-3b0b44fa02) calls "control scripts").

Unfortunately, no purely declarative approach will ever solve the infrastructure problem.
Declarative specifications are perfect when the only thing we care about is the final outcome, without regard for how we get there or what happened along the way.
But in infrastructure, there are times when we care a lot about how we arrive at various deployment states.

A few examples:
- Deploy this new code. Check that it’s running successfully. Then stop running the old code.
- Deploy a single instance of this new code and wait for manual approval to go further ([Canary deploy](https://octopus.com/docs/deployment-patterns/canary-deployments))
- Deploy the new code to some of the instances, and slowly age out old ones. Automatically roll back if problems are detected. ([blue/green deploy](https://www.martinfowler.com/bliki/BlueGreenDeployment.html))
- Bring up a new version of the database, sync the data, then tear down the old version.
- Start the new availability zone. Once all services in the zone are up, then update DNS.

## Learning from SQL

We can see some of the problems with declarative approaches if we take a step back and look at a space that has long been dominated by what is now a fairly mature, declarative-only, specification language - relational databases and the ubiquitous Structured Query Language, or SQL.
SQL is a semantic successor to [Datalog](https://en.wikipedia.org/wiki/Datalog), which itself is a subset of the granddaddy of declarative languages - [Prolog](https://en.wikipedia.org/wiki/Prolog).
But even these more powerful declarative variants don’t really solve the core problem.

Consider:

```sql
SELECT (firstName, lastName) FROM customers ORDER BY lastName
```

This is a purely declarative specification that says, "give me the first and last names of all the customers ordered by last name".
Pretty straight forward, right?  This works well because, as a consumer of the data, we really don't care how the database gets the data, as long as we get the information we want...  in a timely fashion.

And there's the problem.
We may care a lot about how the database performs this computation for performance reasons.
There are [books full of ways to make SQL queries fast](https://www.amazon.com/s?k=sql+performance+tuning).
Some of them, like indexing, are common to all modern relational databases.
Others like storage architecture and volume allocation, are specific to each different database.

Moreover, declarative specifications of complex things can get pretty hairy.
For example, why does the [following SQL statement](https://stackoverflow.com/questions/13758690/tricky-sql-join-query) have a `CROSS JOIN` where it does, and a `LEFT JOIN` where it does instead of some other type of `JOIN`?  How would the results differ if you were to change the `JOIN` type in each case?  What are the odds that everyone who uses SQL in their job can reliably answer these questions without running the query first?

```sql
SELECT DISTINCT x.*
FROM
    (
        SELECT  a.Email, b.Certificate
        FROM    (SELECT DISTINCT Email FROM StudentCerts) a
                CROSS JOIN
                (SELECT DISTINCT Certificate FROM CertReqs) b
    ) x LEFT JOIN studentCerts y
        ON x.Email = y.Email AND
            x.Certificate = y.Certificate
WHERE  y.Email IS NULL
ORDER BY x.EMAIL
```

Oh, and how many of those people can reliably state what indexes and other database trickery will be needed to get it to execute well?

If you've ever worked with code that queries a database, how many times have you seen code that just issues a sequence of SQL calls to do a job rather than having a proper, efficient, single query?

Ultimately, a large group of people decided that SQL and the declarative approach itself was really the problem.
SQL didn't let the users of the database express what really mattered, nor control how the data was traversed.
And thus the rise of [NoSQL](https://en.wikipedia.org/wiki/NoSQL) databases, which dispense with declarative queries and allow the user to interact with the database as they see fit, with a very simple underlying storage model.
Unfortunately, this approach loses many of the benefits of the declarative approach.

## Cracks in the Declarative Facade

For infrastructure, we are also just starting to see the cracks in the declarative approach based on the direction of several new technologies.
First, most deployment workflows run a template processor to generate the final declarative specifications.
[Helm](https://helm.sh/) uses Go template syntax, AWS Cloud Formation uses a funky pseudo-language and parameters, and Terraform also has parameters.

Inevitably, you’ll find that templates aren’t sufficient either.
You'll want "More Power!" So the next logical step is to generate your declarative specification using a full-blown programming language.
If you like JavaScript, there's [Pulumi](https://www.pulumi.com/).
AWS CDK supports JavaScript too, along with C#, Python, and Java.
Hashicorp [just added some programming constructs](https://www.hashicorp.com/blog/terraform-0-1-2-preview/) to Terraform's description language as well.

Of course, all of these approaches just tell you what to deploy right now.
As I described earlier, we care a lot about the sequence of events that lead to a deployment.
Are we going to use a blue/green strategy, rolling deployment? 
What strategy will be needed to roll a database update forward?  
When is it alright to decommission old instances?
How do we bring up a new availability zone?

For these processes, you'll see a lot of custom scripts written in a variety of languages that tie together various systems.
These custom scripts are then orchestrated using other tools like [Jenkins](https://jenkins.io/).
If you work in Kubernetes, you can write an operator to expose a declarative interface to your imperative code, and then install and manage that on top of everything else in your cluster.
But don't ask how you'd automate the update of the operator itself.

Or, you can forgo these custom scripts if you’re willing to lock yourself in to a single vendor-specified approach and their prescribed application architecture.
[Google Firebase](https://firebase.google.com/) and [Heroku](https://www.heroku.com/) have simple push commands that work great for certain application architectures.
Of course, you'll eventually need to do something these tools don't support, and so you'll be writing a bunch of custom scripts orchestrated by some other tool anyway.
Or you'll just have a manual process to deal with that one outlier.
Or 3 outliers.
Or 10.

## A Better Approach (Learning from Others)

The good news is that there is a software development community that has spent the last 20 years or so trying to address these same problems.
The front-end web development community started out with a purely declarative specification system, namely HTML.
They found it lacking and added template-based generation of HTML (early PHP, for example).
The shortcomings of that approach, in turn led to  programmatic generation of HTML with what we recognize today as modern PHP.
The community has since iterated on a number of other concepts based on HTML+JavaScript (e.g., JQuery, Backbone) that eventually evolved into the modern frameworks (e.g., React) that nicely blend declarative specifications, templating, and state-based evolution.

The best part of this modern approach is that it isn’t nearly as complex as some modern deployment systems have become.
Modern web development approaches allow developers with a wide variation in skill to generate great custom applications.

Infrastructure specification can leverage these lessons.
We should have a system where we can write simple declarative snippets for when we don’t care about the details of how things deploy...just that they do.
We can stitch these snippets together with an imperative language and a structured component-based approach.
And then we can make it easy to specify the state machine that controls what happens when new code is pushed, how to recover from errors, bring up new availability zones, and other operational tasks.

I’ll explain in more detail what the infrastructure community can learn from web developers about how to mix a declarative and programmatic approach in [this article](./what-react-devs-know).
Or you can just skip to an implementation of that approach in the open source [Adapt.js](https://adaptjs.org) project.

---
title: "What DevOps Can Learn from Web Developers"
author: Manish Vachharajani
authorTitle: Co-founder, Unbounded Systems
authorURL: https://twitter.com/mvachhar
authorTwitter: mvachhar
authorImageURL: /img/profiles/manish.jpg
image: blog/assets/annie-spratt-9VpI3gQ1iUo-unsplash-1280.jpg
description: "Declarative specifications are all the rage for DevOps, but the web has been declarative since day one.  What can DevOps learn from web development today?"
---

![Helping Up](assets/annie-spratt-9VpI3gQ1iUo-unsplash-1280.jpg)

Declarative specifications are all the rage in infrastructure today, the more declarative the better.
In [the article linked here](/blog/2020/01/27/limits-of-declarative-infrastructure), I talk about why this approach falls short.
In a nutshell, declarative approaches are really good when we don't care about the details of how something happens, just that it does.
For many DevOps operations, this is true.
We don't really care about how a container makes it to a particular server and starts accepting traffic.
We only care that it does.
But in many other cases, we care a great deal about how things happen.
Consider some examples:

- Deploy this new code.
Check that it’s running successfully first.
Then stop running the old code.
- Deploy a single instance of this new code and wait for manual approval to go further ([Canary deploy](https://octopus.com/docs/deployment-patterns/canary-deployments))
- Deploy the new code to some of the instances, and slowly age out old ones.
Automatically roll back if problems are detected.
([blue/green deploy](https://www.martinfowler.com/bliki/BlueGreenDeployment.html))
- Bring up a new version of the database, sync the data, then tear down the old version.
- Start the new availability zone.
Once all services in the zone are up, then update DNS.

It turns out that the web development community has been dealing with many of the problems that modern declarative infrastructure systems face, and they've been doing it for 25 years.
In this article, I want to talk a bit about how web developers have addressed these problems, and how we can apply these lessons to infrastructure.
As it turns out, many of the lessons and solutions apply quite directly.

<!--truncate-->

## Hypertext Markup Language (or HTML)

Declarative specification is at the heart of the web.
Every web page rendered by a web browser can be represented in HTML (and CSS, which is another declarative specification for the appearance and style of a page).
This model works pretty well because outside of high-performance graphics, we don't really care about the details of how various buttons and dialog boxes appear on the screen, just that they appear when and where we want them to, and when they do they have the right look and feel.

The same thing is true of many parts of infrastructure deployment.
In the various examples above, declarative syntax is great for each step.

We don't care about the details of how DNS is updated, or how containers get started, just that these things happen.
Declarative is great for this kind of thing.

## The Control Plane

On the other hand, declarative-only systems are really bad at specifying the state machine that runs a deployment or error recovery process.

For example, in many cases we only want to stop the old containers after the new ones have run successfully for a while.

During a database upgrade, there is a very precise set of steps that has to take place, with specific actions to take if there is an error during any one of them.

We can (and often do) think of these steps as a sequence of infrastructure snapshots.

- First we have a database.
- Then we have a new database along with the old.
- Now the old database transfers data to the new.
- Finally we have only the new database and shut down the old.

Each snapshot can easily be represented using a declarative model.

But it’s not so trivial to use a declarative model to control the sequence of snapshots we need to traverse to get to the desired end state.

Web developers have exactly the same problem.
Each screen we see is easily specified via a declarative syntax, but what happens when we click a link, or a button, a table column heading?
There is now a sequence of steps that have to take place to generate the next snapshot.
Some of the updates can just be specified declaratively (HTML) but many such things cannot, such as API requests, data transformations, and so on.

Again, we have this exact problem in building our infrastructure control plane.
We need a good way to specify what should happen in response to certain events, like new code pushed to git, an availability zone outage, a server failure, or increased CPU load. We need to specify what should happen and in what order, all while retaining a simple way to drop back to a declarative specification for each step.

It is this area in particular that most declarative systems either don't do at all or do very badly.
Kubernetes addresses this issue with operators, but managing a stack of operators that all depend on each other is difficult, with various approaches using different tools to handle the problem.
Fluidly moving between declarative specification of the state, and imperative specification of data fetches and transforms is incredibly painful.
Doing so in a modular, reusable way, even worse.
Systems like [Pulumi](https://pulumi.com), [Terraform](https://www.terraform.io), and [Cloud Formation](https://aws.amazon.com/cloudformation/) don't even try to address this.
Instead it is punted to purpose built systems for deployment ([Jenkins](https://jenkins.io), [Spinnaker](https://www.spinnaker.io), etc.), and custom scripts for any error recovery and outage handling.

## A Web-inspired Infrastructure Approach

Fortunately, it doesn't need to be this way, and web developers have come a very long way in addressing these issues in powerful ways.
A tour of modern web development frameworks (React, Angular, Svelte, and Vue) show some commonalities.

- Each makes it easy to build a component with a declarative specification of its behavior.
- Each makes it easy to have imperative logic that generates the parameters to instantiate that declarative specification.
- Each makes it easy to write code that interacts with the declarative components (formally the DOM elements in web-speak) to control their behavior, query their state, get status, and respond to events from each element.

The most important part of all these systems is that you can easily move back and forth between building a component declaratively and describing how to respond to events imperatively.

I am partial to React, and so the system that we've built, called [Adapt, or Adapt.js](https://adaptjs.org), is based on these principles looks a lot like React.
For the rest of this article, I'll explain how this system works and how it leverages lessons learned from web development to solve today's infrastructure management issues.
These lessons can be implemented in different ways and in different languages, so even if you hate JavaScript or React, read on.

## Infrastructure as Code via JSX

One of the key lessons from web development is that it gets really hard to specify your declarative structure using only declarative syntax.
Very quickly, you want to have parameterized specifications, and shortly thereafter you want to manipulate those parameters, and then have the parameter values change the structure of what you declare.
Theoretically, you can do this with a pure functional programming approach, but in practice it is really helpful to have an imperative language.
This is why so many declarative specifications end up defined via some kind of more powerful template preprocessing.

In Adapt, we use the same mechanism that React does.
JavaScript code intertwined with HTML-like syntax that lets you interleave declarative and imperative specifications.
For example, a simple `App` components would look as follows:

```tsx
function App() {
    const pg = handle();
    return <Group>
        <Postgres handle={pg}>
        <NodeService srcDir="../backend" connectTo={pg} port={8080}>
    </Group>;
}
```

Here, we see that a simple function definition serves to define a component that can later be reused with the `<App />` syntax common to HTML and JSX.
We imperatively construct a `handle` object called `pg` that we can use to link up the `<NodeService>` component with the `<Postgres>` database component.

We can easily add more components based on a parameter value.
For example, perhaps we want an `App` component that can instantiate a series of `<NodeServices>` based on an array of source code directories.
For that we can do:

```tsx
function App(props) {
    return <Group>
        {props.services.map((svc) => <NodeService srcDir={svc.srcDir} port={svc.port} />)}
    </Group>
}
```

Here we've used JavaScript's map function for arrays to turn an array of `{ srcDir, port }` objects into `<NodeService />` elements.
Terraform 0.12 now has expression and for-each constructs that can be used for similar sorts of tasks, so clearly the infrastructure world is catching onto the power of this approach as well.

## Make Components Easy

It should be easy to build a reusable component so that the best logic for how to perform a task can be written once and shared.
Moreover, components need to survive beyond the life of just the deployment phase.
For a component to be really useful, it should encapsulate all the requisite behavior needed by deployment **and** operations.
This means that the component should be able to report status, logs, debugging endpoints, or anything else that the developers and operators need.

With a web-based approach this is easy.
As I mentioned above, in our Adapt approach creating a component is just a function declaration in JavaScript.
Other web frameworks have different mechanisms for this but they all try to make this easy, with the trend being towards simpler and simpler specification.

For example, a simplified version of the `<NodeService>` component might look like this:

```tsx
function NodeService(props) {
    const img = handle();
    return <Group>
      <LocalNodeImage handle={img} srcDir={props.srcDir} />
      <docker.Container image={img} expose={props.port} />
    </Group>;
}
```

Moreover, using the notion of a [hook](https://reactjs.org/docs/hooks-intro.html), you can add methods to `<NodeService />` to do extra work.

```tsx
function NodeService(props) {
    const img = handle();
    const container = handle();

    useImperativeMethods(() => {
        status: () => {
            if(imageIsReady(img)) return callInstanceMethod(container, "status");
            else return { status: "Waiting for image" };
        }
    })

    return <Group>
      <LocalNodeImage handle={img} srcDir={props.srcDir} />
      <docker.Container image={img} expose={props.port} />
    </Group>;
}
```

This adds the status method which will return the status of the Docker container, unless the image is building in which case it returns `"Waiting for image"`.
Of course, in practice, you'll want to have more structured output for machine consumption (like Kubernetes does), and more detailed information, such as the status of the image build process.
You might also want methods to fetch logs, or get a debug port to attach a debugger.

## Managing State and Encapsulating Changes

One of the most powerful things about React, and web frameworks in general, is their management of state and how the framework updates the declarative specification in response to state changes.
For web pages this state can be obvious, such as the values filled in in form fields, or the state of check boxes, but can also be internal state, such as the status of a sequence of API calls.


With React, each component (or element) can have its own state.
Components can then render themselves based on this state, changing their behavior as appropriate.
Whenever the state changes, React will re-render that component.
In the same way Adapt allows components to declare state and will then re-render the component when the state changes.
The example below uses an `imageIsReady` state variable to track when the Docker image needed by the container is ready.
If the image is not ready, NodeService doesn't deploy the container.

```tsx
function NodeService(props) {
    const img = handle();
    const [imageIsReady, setImageIsReady] = useState(false);
    setImageIsReady(() => isDeployed(img));
    return <Group>
        <LocalNodeImage handle={img} srcDir={props.srcDir}>
        {
            imageIsReady ?
            <docker.Container image={img} /> :
            null
        }
    <Group>
}
```

In this way, the `<NodeService>` component can completely hide the details of how the `<NodeService>` component updates.
In practice you'll want a more sophisticated bit of logic here, so that the old image continues to run if an old image is available.
Fortunately, by combining some web-framework concepts this is pretty easy to do, as we'll see below.

## Combining Concepts to Reuse Complex Behavior

One of the more powerful aspects of web development frameworks is that all these various concepts are contained in a single programming environment - JavaScript within the browser.
That is important because it lets you mix the various approaches to build powerful new constructs.


We just saw that we want the `<NodeService>` component to wait until its Docker image is built before using it.
However, we also want to use the old version of the image while we wait for the new one to build.
In Adapt (which, recall, is based on the React web framework) we can build this logic into a component, called `<Sequence>` that can then be reused whenever this "keep the old until the new is ready" behavior is needed.
With `<Sequence>`, `<NodeService>` might look like this:

```tsx
function NodeService(props) {
    const img = handle();
    return <Sequence>
        <LocalNodeImage handle={img} srcDir={props.srcDir}>
        <docker.Container image={img} />
    </Sequence>
}
```

The `<Sequence>` component here is leveraging component definition (obviously), state, and the "imperative methods" abstraction to test when each child element of the sequence, `<LocalNodeImage>` and `<docker.Container>`, are deployed and ready (via the `isDeployed` method).

However, `<Sequence>` is just the tip of the iceberg.
You could create a reusable `<BlueGreen>` component that could blue green anything you wanted, DNS entries, containers, availability zones, etc.

## Moving Forward while Getting the Details Right

So far, we've covered some of the big concepts that web frameworks leverage to manage declarative specification of browser display.
But there are a lot of little things they get right as well.
For example, JSX, has some subtlety around how it manages array children in the declarative DOM.
This makes it easy to generate and include arrays of elements as we saw in the `<App>` component we defined using `map`.


Another important detail is package management.
Kubernetes has [operators](https://kubernetes.io/docs/concepts/extend-kubernetes/operator/) that define custom resources, and you can manage them using Helm.
However, JavaScript has a standardized way of dealing with packages, distributing packages, and dealing with conflicting versions.
Eventually, infrastructure systems will have to deal with all these same issues.

For these reasons, Adapt is a very literal application of web development lessons as applied to infrastructure.
Adapt looks and feels like React, a top web development library.
It has the same package management strategy, state specification system, and other high-level concepts.
In many cases the React way to solve a problem applies directly to Adapt, so much so that you can often just refer to the React docs.

However, there is no need to take such a literal approach.
Many folks hate JavaScript.
There is no reason you can't apply many of these lessons to Go, or Python.
The challenge will be getting the declarative syntax and other details right.
Web developers have had years to get it right, but that's all the more reason to look to these systems when building new infrastructure specification systems.

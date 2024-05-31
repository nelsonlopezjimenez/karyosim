---
title: My Zero
date: 5/31/2024
myData: This is my data myData
---

# Clean up the site

This Markdown file creates a page at [localhost:4321/blog/my](#)

It probably isn't styled much, but Markdown does support:

- **bold** and _italics._
- lists
- [Modules](/blog)
- and more!

## Content

1. [Introduction to the module](#introduction-to-the-module)
2. [The app requirements](#the-app-requirements)
1. [top](#)

[← back to all modules](/blog)

## Goals

[&rarr; top](#)

Fresh start with jupyter/JavaScript flow

## Introduction

[&rarr; top](#)

The goal is to build from scratch a complex application that will allow you to explore techniques and challenges solving problems that may include:

1. Finding relevant data
1. keeping track of sources
1. keeping track of resources
1. storing data
1. gathering data with the correct permissions
1. authenticating users
1. handling payments and subscriptions
1. caching
1. security

among others.

The focus will be on what the application requirements are, how to sum up what has been done, how to rediscover the sources for raw data, how to rediscover publicly available tools and resources, with references included, how to track what has been done and organize it. 

I will build a SaaS app: a project management SaaS app for individuals and teams. 

"Software as a Service" is an app we distribute on the Web, and people instead of downloading it will use it from the website. Sometimes you can download the app into different devices, but it is still a SaaS app.


## The app requirements

[&rarr; top](#)

There some user stories you will have to solve in the app:

1. Loggin into the app with email and password (no dependency on 3d party providers)
1. Once the user is logged in, he/she can manage multiple personal projects
1. Once a project is created, people can add a 'task', for example project 'my website' has a task called 'create personal page'
1. The app allows to mark a task as done and remove it from the list of tasks to be done
1. A task can be starred to mark it as important and visually separate it from all the other tasks
1. A project has status, so it starts as 'not started', and change the status as the project move along until it is 'done'.
1. The app allows to attach pictures to a task.

For everything the app will have a responsive design so it looks nice no matter what device is being used to run it.

## How we are going to store the data

[&rarr; top](#)

PocketBase

## Data modeling

[&rarr; top](#)

Earlier in this document we talked about projects, tasks, users.

So please the following user stories that your code will tackle and resolve:

1. A user can create one (or many) projects. He/she is the project owner. No one else can see that project, or add tasks to it.
1. A project has multiple tasks assigned to it. It could be zero tasks, or 10000
1. A task is assigned to a single project. The user cannot have a task that belongs to multiple projects.
1. As admin you will track all the activites across projects

## PocketBase installation

[&rarr; top](#)

Download the installation binaries are into favorite location of your laptop.
The file is 'pocketbase_0.22.8_windows_amd64.zip'. Extract the file into your favorite folder. "cd" into the folder, open a terminal, start pocketbase by typing in the command line

```

./pocketbase serve (gitbash)

or

.\pocketbase.exe serve (windows command line or powershell).

```

Once the serve starts, go to chrome browser, type either URL

```

'http://localhost:8090/_/'

or

'http://127.0.0.1:8090/_/'

```

to access the Admin UI.

The first time you will see the setup screen with the text

```

'Create your first admin account in order to continue'.

```

For the email field use your

```

lastName first initial @ voced dot ed.

```

Enter an easy to remember password. Choose a not very complex password since we are not going to store anything important, just we want to practice. If you forget your admin password there are ways to recover it, so do not worry. Once you create your admin account, click the 'Create and login' button.

If you are a night owl, PocketBase does not offer a dark mode feature, but you can use a browser extension to display it dark, like 'Dark Reader'. Please remind me to pass it to you in class.


[&rarr; top](#)

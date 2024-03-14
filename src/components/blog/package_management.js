/*

A package is a collection of a software, it's dependencies plus some metadata
about the package. A package may either hold a system software or an
application software and are stored in a repository. A repository essentially
is the cloud, backed by some sort of version control, usually git. 

A package manager is a tool that communicates with this repository and makes it easy to handle these packages on a local system. But a package manger needs to recognize a packages when it comes across one, and the way that it does it is by looking at the format. For example, the package manger on debina systems prefer '.deb' package format. A package may contain pre-compiled binary software, or source code,  installation scripts, build scripts, configuration files, details about the dependencies, and other meta data about the software.

Linux System boradly can be classified as (i) Rolling relase (ii) Stable release. 

Rolling release systems have regular updates (every one or two days).
Bledding edge technology.
Beta testing.
Examples - Kali Linux, Arch Linux, Tumbleweed.

Fixed release systems
Periodic updates.

What Linux systems do is that they keep track of these repos and have a support system .


1. Debian based systems

dpkg and apt .deb packages


2. Red Hat Enteprise based systems

yum and dnf .rpm packages

3. Arch based 

pacman is both a package manager and a format

4. Gentoo

Portage

5. ZYpp/ZENwors





 */

import React from 'react';

function PackageMangement() {
    return (
        <div className="master blog">
        <h1 className="main_heading">Nikin Baidar Posts</h1>
        </div>
    );
}

export default PackageMangement;



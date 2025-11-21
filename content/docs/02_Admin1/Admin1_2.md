---
title: Admin 1-2
description: Semaine 2 - DNS + Powershell + AD
layout: libdoc_page.liquid
permalink: /{{ title | slugify }}/index.html
eleventyNavigation:
  key: Admin 1-2
  parent: Admin 1
tags:
  - Scripting
  - DNS
  - AD
  - HyperV
---

# Active Directory

Slides : [MODULE_ADGPO](Admin1_2/MODULE_ADGPO.pdf)

Schéma Active Directory
- Classes
- Attributs

Il est très vivement déconseillé de modifier le schéma Active Directory.
Il sers à contenir les informations sur les types d'objets et les attributs des utilisateurs.

La structure de l'AD
- Partitions d'annuaires
	- Partition de Schéma
	-  de domaine
	- de configuration

Groupe de travail et domaine
Workgroup : 
- Base d'utilisateurs par machine (base SAM)

Contrôleur de domaine :
- Le serveur qui crée le domaine est par défaut le contrôleur de domaine.
- Doit être accessible en permanence

![](./Admin1_2/Admin1_2_image.png)

![](./Admin1_2/Admin1_2_image-1.png)

Deux types de groupes : 
- Sécurité -> les accès
	- Groupe domaine local -> n'existe que dans le domaine local
	- Groupe global -> s'applique sur un arbre
	- Universel -> englobe toute la forêt
- Distribution -> mail

![](./Admin1_2/Admin1_2_image-2.png)

![](./Admin1_2/Admin1_2_image-3.png)



![](./Admin1_2/Admin1_2_image-4.png)

Stratégies de groupe.
GPO

![](./Admin1_2/Admin1_2_image-5.png)

![](./Admin1_2/Admin1_2_image-6.png)

![](./Admin1_2/Admin1_2_image-7.png)

L'ordre de priorité des GPO dépends de la position géographique de la GPO. Le plus proche va s'appliquer en premier.

AGDLP
Account Global Domain Local Permissions

Utilisateur 
Groupe Global
Groupe domaine local (GDL) lecture écriture

![](./Admin1_2/Admin1_2_image-8.png)

RO = Read Only
RW = Read Write

## TP

- Installer le serveur AD en mode graphique

![](./Admin1_2/Admin1_2_image-10.png)





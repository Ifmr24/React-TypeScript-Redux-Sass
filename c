[33mcommit 60dcb9029eb28416414d13a8ff83a7b2668455f1[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m, [m[1;31morigin/master[m[33m)[m
Author: Fabian Mesias <ing.ifmr@gmail.com>
Date:   Tue May 28 07:51:26 2019 -0400

    Arreglado Layout base

[1mdiff --git a/public/index.html b/public/index.html[m
[1mindex fea94dc..cefebc4 100644[m
[1m--- a/public/index.html[m
[1m+++ b/public/index.html[m
[36m@@ -14,8 +14,8 @@[m
 [m
 <body>[m
 	<noscript>You need to enable JavaScript to run this app.</noscript>[m
[31m-	[m
[31m-	[m
[32m+[m
[32m+[m
 	<div id="root"></div>[m
 [m
 [m
[1mdiff --git a/src/components/Index/index.tsx b/src/components/Index/index.tsx[m
[1mindex 188ba8a..76277fd 100644[m
[1m--- a/src/components/Index/index.tsx[m
[1m+++ b/src/components/Index/index.tsx[m
[36m@@ -3,7 +3,7 @@[m [mimport React from 'react'[m
 const Index = () => {[m
     return ( [m
         <div>[m
[31m-            <b>Hola desde index</b>[m
[32m+[m
         </div>[m
     );[m
 }[m
[1mdiff --git a/src/layouts/Base.tsx b/src/layouts/Base.tsx[m
[1mindex 29c3577..b7893e6 100644[m
[1m--- a/src/layouts/Base.tsx[m
[1m+++ b/src/layouts/Base.tsx[m
[36m@@ -3,7 +3,7 @@[m [mimport React from 'react'[m
 const Base = ({children}:any) => {[m
     return ( [m
         <React.Fragment>[m
[31m-            {children}ff[m
[32m+[m[32m            {children}[m
         </React.Fragment>[m
     );[m
 }[m

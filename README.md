# wdio_mocha_chanda_2021
It is a wdio automation project with mocha framwork

1. How to do a basic setup for a webdriver io project ??
it is a java script test automation frame work using which we can do ui automation,and to do a set up we need to
install node.js in our machine.then we need to trigger installation commands.

in intellij ide we have to create a node js project.
in the project terminal,we have to install the webdriver io cli(command line integration)
npm i --save-dev @wdio/cli   --It will install all the nodejs packages  required for wdio, we can 
see all the packages in package.json file

we have to create wdio.js file by using below command  "npx wdio config"
the above command will install all the required packages which we can see in package.json
and also it will create a wdio.conf.js file 
and wdio.conf is the heart of the project

to run the project just use below command
npx wdio wdio.conf.js

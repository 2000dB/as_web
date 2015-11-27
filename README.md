To create the wifi network and redirect all the traffic to the local server:

- enable a web server (i.e. apache2 on os x) at the root level
- create a wifi network and point the DNS on the router to the IP of the server 
- install dnsmasq and reroute all traffic with by having "address=/#/ip.of.the.server and no-resolv
- make sure dnsmasq is running as deamon on startup
- should work

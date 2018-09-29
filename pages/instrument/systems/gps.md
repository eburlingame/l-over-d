---
layout: instrument
title: GPS
---

## GPS and WAAS

- GPS = Global Positioning System
- WAAS = Wide Area Augmentation System
- GNSS = Global Navigation Satellite System

- Non-WAAS GPSes can provide IFR guidance, but require an alternate formate of navigation installed, like a VOR receiver
- WAAS-Navigators may be the *only* IFR navigation source
- RNAV = Random Area Navigation 
- WAAS uses two additional satellite to improve the GPS accuracy
	- These transmit a correction signal that is uploaded from two ground stations that are connected to a network of monitoring stations throughout the US
	- Usually you can get 2-3 meter accuracy

- When not flying on airways, no *minimum altitude* is published
	- Instead, use the Off-Route Obstruction Clearance Altitude (OROCA), found on IFR Enroute chart
	- These routes provide clearance of:
		- 1,000 feet in non-mountainous areas
		- 2,000 feet in mountainous areas
	- However, it does not guarantee radio or radar coverage

- You do *not* need a current database in the navigator for use in the enroute and terminal environments
	- However, you need to determine the waypoints used have not been changed within the databases
	- To fly IFR approaches:
		- You *need* up-to-date databases 
		- Your GPS must also have a functioning RAIM feature (Random Autonomous Integrity Monitoring)
- RAIM requires: 
	- A minimum of 5 GPS satellites in view
	- 4 GPS satellites in view with a barometric altitude input
	- 4 GPS satellites in view plus one WAAS GPS


## Navigator Fields 

- Common User-Fields on GPSes:
	- BRG: Bearing to your next wapoint
	- TRK: Your current GPS track over the ground
	- DTK: Desired track, the track from your previous waypoint to the next
	- XTK: Cross-track error, distance (in miles) off course
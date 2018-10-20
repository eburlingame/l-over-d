---
layout: instrument
title: Instruments
---

## Pitot-Static System

> The pitot-static system will drive the altimeter, vertical speed indicator, and the airspeed indicator. 

### Altimeter

- The altimeter should be set to the local altimeter setting before each flights.
	- If the airport elevation differs from the altimeter readout by more than **75 feet**, the instrument should be checked
	- Be sure you know what your current elevation is
- When the altimeter Kollsman setting is *lowered* the indicated altitude will be *lower*, and vis-versa
	- 1" Hg is roughly 1000 feet
	- Temperatures *higher* than standard will read an altitude *lower* than actual
	- Temperatures *lower* than standard will read an altitude *higher* than actual
	- "From high to low, look out below"

### Issues

#### Static Source Blockage

- Altimeter: Show the altitude where the blockage occurred
- VSI: Display 0
- Airspeed: Will continue to function, however will be erroneous
	- Lower altitude than the blockage: Show a **higher** than actual airspeed
	- Higher altitude than the blockage: Shows a **lower** than actual airspeed
- In this situation, use the *alternate static source*
	- This is vented to the cabin
	- Usually cause airspeed and altimeter to be higher than actual
	- VSI will show a momentary climb

#### Pitot Blockage

- Indicated airspeed drops to zero
- The airspeed indicator shall become a sort of altimeter
	- Decrease as the aircraft is lowered
	- Increase as the aircraft climbs

## Vacuum and Pressure Instruments

- Attitude and heading indicators are the **vacuum instruments**
	- Each contain a gyro, which is spun by a partial vacuum
	- Some attach a vacuum pump to create negative pressure (drawing air in to spin the gyro), while some force air in with a positive pressure pump
	- For light aircraft, this is usually done using a vacuum system
	- Most dry vacuum pumps have a lifetime between 500-1000 hours
	- Dirty air filters can slow the spinning of the gyros
	- Be sure to include the **suction gauge** as part of your instrument scan

### Attitude Indicator

- Acceleration errors
	- Acceleration causes the AI to momentarily show a *climb*
	- Deceleration causes the AI to momentarily show a *descent*

## Partial Panel Flight

- 3 main categories of failure
	- Vacuum
		- Heading and attitude indicator becomes inoperative
			- The AI is usually the first to go, and often show a nose-low, banking attitude as the gyro loses momentum
			- Cross-check instruments to corroborate evidence of a failure
		- In a glass cockpit, partial failures may cause the loss of a single component
	- Pitot/Static
		- Erroneous altimeter, vertical speed, or airspeed readings
	- Electrical
		- The turn coordinator is usually electrically powered

## Magnetic Compass

- On *northerly* headings, the compass will **lag** behind the actual heading
- On *southernly* headings, the compass will **lead** the actual heading
- On any heading other than north or south, *acceleration* will show a header **north** of the real heading, and a *deceleration* will shown a heading **south** of the real heading

## Transponders

- Primary radar simply shows airborne objects (which could be a flock of birds)
- Traditional transponders broadcast on 1090 MHz, and respond to interrogation from a *secondary* radar station or another aircraft's TCAS system
	- Mode C adds altitude reporting, so your aircraft altitude is send back with your response
- ADBS-B is part of the NextGen ATC system
	- ADS-B Out: Transmits your GPS positions, altitude, and ground speed to one of over 700 ground stations
		- This is done either with either a new protocol on top of 1090 MHz, or using a new technology called UAT that uses 978 MHz
	- ADS-B In: An optional data link that allows your aircraft to receive ADBS-B out data from other aircraft, and receive FIS-B weather data from ground stations:
		- Allows aircraft to receive traffic information (TIS-B)
		- Allows aircraft to receive weather information (FIS-B)

### ADBS-B 2020 Mandate

- Required in Class A airspace
- Within 30nm of a Class B airport
- Within and above Class C airspace
- Above 10,000 MSL but not below 2,500 AGL in Class E airspace


## Flight Director

> A flight director is a visual depiction of the control inputs that are needed for the airplane to fly on a particular path. 

- They exist in mechanical and electronic varieties
- Electronic FDs use a magenta or green miniature airplane
- Single cue FDs: An arrow that you match with the AI's arrow
- Dual cue: Two bars, one vertical and one horizontal

![Cues](https://i.ytimg.com/vi/z0DUrjCqzkA/maxresdefault.jpg)

- Some FDs have a "go-around" mode

## HSI

> A horizontal situation indicator is a combination of a heading indicator, a omni-bearing selector (OBS), and a course deviation indicator (CDI). 

![HSI Example](https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Horizontal_situation_indicator-en.svg/1012px-Horizontal_situation_indicator-en.svg.png)

- Also includes a heading bug, and may also show the glideslope 
- Mechanical gyros often have a "slave" switch
- Flying a backcourse localizer is much easier, as there is no reverse interpretation required

## Autopilot

![KAP 140 Install](https://airfactsjournal.com/files/2013/02/kap-140.jpg)

- Dual axis autopilots use electric trim, and will attempt to keep the airplane always in trim
	- Thus, if you pitch the nose up manually, the autopilot will command now *down* trim, fighting against you
- Don't help the autopilot fly the airplane
- Two primary kinds of system drive the autopilot:
	- Rate-based (Like the KAP 140)
		- Rate-based APs will still work in a wing-leveler mode if the vacuum system has failed
	- Attitude-based (Like the GFC-700)
- Be careful not to command a vertical speed climb that the airplane cannot maintain
- Autopilot modes:
	- Roll mode: Maintains the starting roll attitude (if it's between 6 and 22 degrees)
	- Pitch mode: Maintain the starting pitch attitude (if it's between -15 degree to 20 degrees)
	- Vertical speed mode: Maintains a specified climb or descent
	- Airspeed hold (FLC, Flight Level Change): Holds the starting airspeed
	- Heading mode: Turns and maintains a specified heading
- GPSS: GPS Steering
	- GPS connection directly with the autopilot, bypassing the CDI
	- Allows the GPS to command more exact turns, and avoids overshooting waypoints

> Autopilots must be disengaged below 200' AGL during approach operations. 

> Auto pilots cannot be engaged below 800' AGL, *except* when in the approach mode.


## Engine Instruments

- Variable pitch propellers
	- Akin to a transmission	
		- "High gear" is the largest "bite" of air
			- This is used during cruise and descents
		- "Low gear" is the smallest "bite" of air
			- This is used to start out and climb
	- Using a high power setting with a low RPMcan cause engine damage
		- This causes high cylinder temps
		- Can cause:
			- Preignition
				- Premature ignition caused by hot spots in the combustion chamber
			- Detonation
				- Can occur when power output is high, and the mixture is lean
	- Manifold pressure guages are required
		- Measures the pressure of the fuel-air mixture just before it enters the cylinder
- Air-fuel mixture
	- A large range of ratios will burn:
		- 8 pounds of air to 1 pound of fuel, to
		- 18 pounds of air to 1 pound of fuel
	- 15 to 1 has been shown to be ideal, as all the fuel is burned in the process (but this also produces the most heat)
	- Because of this, exhaust gas temperature is a good indicator of fuel-air mixture (cylinder head temperature, CHT)
	- The POH will prescribe which operation is best for the engine:
		- rich-of-peak (ROP), or
		- lean-of-peak (LOP)
	- Adjust to maintain a specific CHT:
		- Mixture
		- Cowl flaps
		- Pitch attitude
- Turbine inlet temperature (TIT)
	- Monitors the temperature of the exhaust gas entering the turbine of the turbo charger
	- You'll use this gauge to lean the engine instead of CHT

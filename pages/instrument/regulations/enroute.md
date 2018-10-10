---
layout: instrument
title: Enroute IFR
---

## ATS Routes

> ATS routes are **Air Traffic Services** Routes that include: 
- Victor (VOR) airways
- Jet (VOR) airways
- Q/T (RNAV) routes
- Colored (NDB) airways
- Arrival / Departure routes

### Victor Airways

> Extend from 1,200 AGL and up to (but not including) 17,999 MSL. 

- Note: The highest practical altitude is 17,000 feet on victor airways. 
- Also known as VOR Federal Airways
- 8nm wide, 4nm on either side of the airway
- Obstacle and terrain clearance is guaranteed
	- 1,000 feet in non-mountainous areas
	- 2,000 feet in mountainous areas

### Jet Routes

> Extend 18,000 MSL and up to and including 45,000 feet. 

### RNAV Routes

Painted in blue on IFR enroute charts. 

- "Q" Routes are *high-altitude* RNAV routes
- "T" Routes are *low-altitude* RNAV routes
	- Used for transition around busy terminal airspace
	- Also serve as replacements for other airways when underlying navaids were decommissioned

### Colored Airways

- Based on low and medium frequency navaids
- Named for colors:
	- Red
	- Green
	- Amber
	- Blue

## VORs

- All VORs have approximately the same *power* output, but are classified differently based on their *standard service volume*: 
	- Terminal VORs:
		- Usually on airports and used for insturment approaches
		- Lower power output than enroute VORs
		- Usable within **25nm** between 1000 AGL up to 12,000 AGL
	- Low VORs:
		- Usable within **40nm**: Above 1000 AGL, up to 18,000 MSL
		- Used for Victor airways
	- High VORs:
		- Usable within **40nm**: Above 1000 AGL, up to 14,500 MSL
		- Usable within **100nm**: Between 14,500 MSL and 17,999 MSL
		- Usable within **130nm**: Between 18,000 MSL and 45,000 MSL
		- Usable within **100nm**: Between 45,000 MSL and 60,000 MSL

> Always identify the VOR station you are using, as their are only aroudn 80 frequencies for VORs in the U.S.

- "Direct flights" are flights between navaids that do not have an airway between them. 
	- Up to 18,000 MSL with low VORs, the longest "direct" leg between two Low VORs is 80nm (2x the service volume of each Low VOR)
	- Between 14,500 and 17,999 MSL between two High VORs is 200m (100nm + 100nm service volume)

Note: Some airways may use VORs that are outside their standard service volume, but these will have been flight checked. 

- CDIs display *angular* deviation **when using VORs**
	- A full scale deflection of the CDI needle is 10 degrees off course (usually 2.5 degrees per dot)
	- 60 nm from the station: 
		- 1 degree deflection = 1 mile off course
		- 10 degree deflection = 10 miles off course
	- 30nm from the station: 
		- 1 degree deflection = 1/2 mile off course
		- 5 degree deflection = 2.5 miles off course
- When using **GPS**, the deviation is linear (not angular)

## Enroute IFR

- MEAs: Enroute IFR charts show miniumu enroute altitude for airways
	- These guarantee VOR coverage
	- These no *not* guarantee communications or radar coverage
- MOCAs: Minimum Obstruction Clearance Altitudes
	- Guarantees VOR coverage within you are in 22nm 
	- Also guarantees obstruction clearance

> Use the standard East/West Odd/Even altitude rule when planning your IFR flight, or when flying through class G (uncommon). 
- ATC will be the last word on which altitude you fly. 

- In general, TRACONS handle the airspace within 30nm of an airport and up to 10,000-12,000 feet.
- ARTCC divide airspace between low sectors and high sectors at FL230
- Note: Wait a few minutes after frequency change before requesting a new altitude. 
- Inform ATC
	- If you are unable to maintain at least of 500 FPM
	- If your airspeed varies within 10 knots
	- If you have lost GPS or navigation equipment
- Plan flights around prohibited or restricted airspace by at least 3nm, unless you have permission
- Some MOAs have vertical extensions that extend up into Class A airspace called *air traffic control-assigned airspace*
	- Go ahead and file direct, and let ATC change your routing if necessary

## Charts

### Enroute Planning Charts

- Small scale
- FAA has a low level (under 18,000) planning chart
- Jeppesen has both high and low level planning charts
- Legend
	- Number in the square box: Distance between reporting points/navigational aids
	- Letter under the airway line: segment distance
	- Brown facilities: Low or Medium frequency facilities
	- Black facilities: VHF facilities
	- Blue stars: RNAV 
	- Solid facilities: Compulsory reporting points
	- Unshaded facilities: Non-compulsory/on-request reporting points
- Reporting points
	- If you are not in radar contact, you must make position reports 
- Altitudes
	- * asterisks prefix MOCAs
		- MOCAs give you 1000 foot (2000 foot mountainous) obstacle clearance within 4nm of the centerline
		- There is at least 500 foot obstacle clearance the two miles beyond that
		- Also ensures navigational signal within 22nm of the facility
			- This means you must fly above the MOCA if you are using VORs for navigation, and are more than 22 miles from the station
			- If you are using GPS however, you can fly at the MOCA the entire route
	- OROCA (Off-Route Obstruction Clearance Altitude)
		- List in large brown numbers in each lat/lon grid
		- Same obstacle clearance as a MOCA, but no guarantee for VOR reception, radar coverage, or communication coverage
	- MEA (Minimum Enroute Altitude)
		- Obstacle clearance
		- Navigation signal
		- Identification of fixes on the airway
		- May be directional, shown with arrows
	- MRA (Minimum Reception Altitude)
		- Minimum signal required to receive a side signal (not the main VOR signal for the airway)
		- Flag with an "R" on the chart tells you there is an MRA
		- ![Enroute MRA flag](http://www.cfijapan.com/study/Figures/Figures-4/IFR-MRA.gif)
	- MEA Gap
		- Indicates that there is a gap in navigation coverage if flying at the MEA
		- The maximum gap is 1.44 miles per 1000 feet of altitude
		- Thus, at 14,000 the largest gap is less than 21 miles
		- ![Enroute MEA Gap](http://www.boldmethod.com/images/blog/lists/2018/03/7-chart-symbols-you-may-have-never-seen-before/5.jpg)
	- MAA (Maximum Authorized Altitude)
		- May have a time when they are active 
		- ![Enroute MAA](http://www.boldmethod.com/images/blog/lists/2018/07/10-minimum-ifr-altitudes/maa.jpg)
	- Cross-bars at a navigational fix indicate that one of the altitudes changes
		- Obstacle clearance is assured as along as you start climbing *at* the fix 
		- Minimum climb rates by altitude: 
			- Up to 5,000 feet:
				- 150 feet per mile
				- 375 FPM at 150 knots
			- 5,000 to 10,000 feet:
				- 120 feet per mile
				- 120 FPM at 150 knots
			- 10,000 feet and above:
				- 100 feet per mile
				- 250 FPM at 150 knots
		- ![Change-over example](https://www.boldmethod.com/images/blog/lists/2017/10/7-things-that-can-be-easily-missed-in-ifr-flying/2.jpg)
	- MCA (Minimum Crossing Altitude)
		- Exception to the climb after fix rule
		- Aircraft must *cross* the fix at or above the MCA for the direction listed
		- "12,000 W" = Cross at or above 12,000 if *westbound*
- Navigation changeover
	- On a straight away you usually changeover at the *mid-point*
		- If the changeover should be made somewhere other than the mid-point, an "S" is listed on the airway
		- ![Changeover Point](http://www.boldmethod.com/images/blog/quizzes/ifr/2014/10/can-you-answer-these-6-enroute-chart-questions/stem-1.jpg)
	- Changeover on a "dog-leg" airway is wherever the airway bends
- "D" arrows show DME distances
	- Open arrows with no "D" indicate that the DME matches the leg distance on the chart
- Airports
	- Green airports: Have instrument approaches
	- Brown airports: Do **not** have instrument approaches, but have at least a 3000 foot runway

![Airport Legend](http://www.cfinotebook.net/graphics/navigation-and-flight-planning/ifr-en-route-charts/en-route-airport-legend.png)

- GPS/RNAV Routes
	- Printed in Blue, and are preceded with the letter "T"
	- ![RNAV Route](http://www.askacfi.com/wordpress/wp-content/uploads/2008/08/t-route-maa.png)

![IFR Enroute Chart Legend](http://wiki.ke4ktz.com/images/7/73/Ifr-enroute-legend.jpg)

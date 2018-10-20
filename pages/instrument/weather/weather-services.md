---
layout: instrument
title: Weather Services
---

### Convective Outlook

> The convective outlook is a national forecast for areas of general and severe thunderstorms. 

- Thunderstorm forecast
- 8 day forecasts are available
- Day 1 and 2 outlooks also give areas with a 10% or greater change of thunderstorm activity
- Shading
	- Green: General
	- Yellow: Slight (meaning small number or low coverage of storms)
	- Red: Moderate/severe
	- Magenta: Highly severe

### Low-Level Significant Weather Prognosis Chart

> Low-level prog charts predict weather from the surface to 25,000 feet.

### High-Level Significant Weather Prognosis Chart

> High-level prog charts predict weather from the 25,000 feet to 63,000 feet.

- The *height of the tropopause* is shown in 100's of feet inside a rectangle
- The chart shows bases and tops for major cloud cover
	- XXX means the base is below the bottom of the chart (25,000 feet)
- Hatching across the jet stream line means wind speed changes of more than 20 knots
- Cumulonimbus coverage:
	- ISOL: < 1/8
	- OCNL: 1/8 to 4/8
	- FRQ: 5/8 to 8/8

### Winds Aloft Forecast

The graphical winds aloft chart uses barbs and pennets to show wind speed:
- Half barb: 5 knots
- Full barb: 10 knots
- Pennet: 50 knots

The textual product encodes the direction, speed, and temperature aloft: 

- 2518+06 = 250 degrees at 18 knots, temperature +6 degrees C
- For wind speeds > 50 knots:
	- 50 is added to the wind direction (making it an impossible direction)
	- The 1 is left off of the wind speed
	- Thus, 731960 = 230 degrees at 119 knots, at -60 degrees C
		- 73 - 50 = 23 => 230 degrees
		- 19 + 100 = 119 knots
		- 60 => -60 degrees C 
- For wind speeds > 199 knots:
	- They will place 99 in the wind direction, and still add 50 to the direction
		- Thus, 779960 = 270 degrees at >199 knots, and -60 degree C
- Winds that are "light and variable"
	- 9900+09 = Light and variable, +9 degree C

- Note:
	- All *texual* reports (METARs, TAFS, FAs): Wind direction is in **true** degrees
	- All *radius recieved* wind reports (ATIS, ASOS, AWOS, Tower): Wind direction is in **magnetic** degrees

### Terminal Aerodrome Forecast (TAF)

- Doesn't really tell you what's going on in the clouds

### METARs

- METARs are old information
- Compare with forecast and see if they were


### PIREPS

- Beware of old pilot reports
- The type of aircraft should color your interpretation of the report
	- Larger airplanes can handle more turbulence
	- Faster airplanes will spend far less time in icing, and their skin is usually warmer due to the the friction of fast moving air

### Area Forecasts

- Occluded fronts usually means *wind shear*
- Look for mountain wave
	- Winds increasing with altitude above a ridge and above 20-30 knots

## Cockpit Systems

- Airborne Weather Radar
	- Reflects off precipitation
	- Look for a steep change in precipitation return
	- Adjust the tilt
		- Note that snow (which usually occurs high in clouds) does not give much radar return
	- Attenuation occurs when heavy rainfall returns most of the radar signal
		- Then, you may only be able to see 5-10 miles ahead
		- You have no idea what lingers beyond the effective range
		- To help, adjust the tilt to pick up some ground returns
			- If you aren't getting ground return in the area behind the storm, you know you can't pick precip either
- Stormscope/Strikefinder
	- Detects lighting
	- Don't point the airplane towards discharges
	- Isn't affected by attenuation
	- Clear the screen and observe the rate of reappearing strikes
- NextRAD weather radar
	- They are always history
	- Lower resolution than airborne radar
	
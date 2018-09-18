---
layout: airplane
title: Fight Operations
---

## Aircraft Categories and Classes

The FARs regulate aircraft differently based on their category. 

Aircraft categories: 

- Airplanes
- Rotorcraft
- Powered-lift
- Gliders
- Lighter-than-air
- Weight-shift control
- Powered parachute

The airplane and rotorcraft categories are further broken down into *classes*

- Airplane category
	- Single Engine Land (SEL)
	- Multi-Engine Land (MEL)
	- Single-Engine Sea (SES)
	- Multi-Engine Sea (MES)
- Rotorcraft: 
	- Helicopters
	- Gyrocopters

### Right-of-Way Rules

- Aircraft in distress have right of way over any other aircraft
- All powered aircraft must give way to balloons, and all heavier-than-air aircraft must give way to all lighter-than-air vehicles
- Any aircraft that is refueling or towing another aircraft has right-of-way over all other powered aircraft

- If two aircraft are approaching head on at the same altitude, then each aircraft shall alter course to the right. 
- If two aircraft are converging at the same altitude, the aircraft on the right has the right-of-way. 
- If an aircraft is over-taking another aircraft then they shall do so by passing on the right
- Aircraft landing have right-of-way over aircraft over all other aircraft in the air or on the ground
- If two aircrafts are approaching to land, the aircraft at the lower altitude has right-of-way
	- Pilots shall not take advantage of this rule to cut in front of another aircraft. 


## Light-Gun Signals

In the event of a radio failure, you may be required to use light-gun signals to receive directions from a towered airport.

- If you suspect that your radio receiver has failed, broadcast over the radio and request light-gun signals from the tower. 
- If both your receiver and transmitter has failed: 
	- Stay outside and above the traffic pattern and observe the flow of traffic
	- Squawk 7500
	- Join the traffic pattern and watch for lightgun signals
	- Acknowledge the signals by rocking your wings

<table class='ui table'>
	<thead>
		<tr>
			<th>Signal</th>
			<th></th>
			<th>On the Ground</th>
			<th>In the Air</th>
		</tr>
	</thead>
	<tr>
		<style type="text/css">
			.lightgun {
				height: 15px;
				width: 15px;
				border-radius: 10px;
				display: inline-block;
				border: 1px solid black;
			}
			@keyframes flashing_green {
				0% { background-color: white; }
				50% { background-color: green; }
				100% { background-color: white; }
			}
			@keyframes flashing_red {
				0% { background-color: white; }
				50% { background-color: red; }
				100% { background-color: white; }
			}
			@keyframes flashing_white {
				0% { background-color: white; }
				50% { background-color: #DDD; }
				100% { background-color: white; }
			}
			@keyframes red_green {
				0% { background-color: red; }
				50% { background-color: green; }
				100% { background-color: red; }
			}
		</style>
		<td>Steady Green</td>
		<td>
			<div class='lightgun' style="background-color: green"/>
		</td>
		<td>Cleared for takeoff</td>
		<td>Cleared to land</td>
	</tr>
	<tr>
		<td>Flashing Green</td>
		<td>
			<div class='lightgun' 
				 style="animation: flashing_green 1500ms infinite ease-in-out;"> </div>
		</td>
		<td>Cleared to taxi</td>
		<td>Return for landing</td>
	</tr>
	<tr>
		<td>Steady Red</td>
		<td>
			<div class='lightgun' style="background-color: green"/>
		</td>
		<td>STOP</td>
		<td>Continue circling</td>
	</tr>
	<tr>
		<td>Flashing Red</td>
		<td>
			<div class='lightgun' 
				 style="animation: flashing_red 1500ms infinite ease-in-out;"> </div>
		</td>
		<td>Taxi clear of the active</td>
		<td>Airport unsafe</td>
	</tr>
	<tr>
		<td>Flashing White</td>
		<td>
			<div class='lightgun' 
				 style="animation: flashing_white 1500ms infinite ease-in-out;"> </div>
		</td>
		<td>Return to parking area</td>
		<td>N/A</td>
	</tr>
	<tr>
		<td>Alternating red and green</td>
		<td>
			<div class='lightgun' 
				 style="animation: red_green 1500ms infinite ease-in-out;"> </div>
		</td>
		<td>Use extreme caution</td>
		<td>Use extreme caution</td>
	</tr>

</table>
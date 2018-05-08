---
layout: post
title: Flight Instruments
---


# Pitot-Static Instruments

## Altimeter

Here is short video about some of the intricacies of the altimeter.

<iframe style='width: 100%; height: 400px' src="https://www.youtube.com/embed/LgcedQ-FoSQ" frameborder="0" allowfullscreen></iframe>

### Basic Principles

The altimeter operates by measuring the *static pressure* of the ambient air. 

The instrument uses the pressure lapse rate of the standard atmosphere, and is not corrected for changes in the pressure lapse rate of the *actual* atmosphere. 

When transition to different atmospheric conditions in flight, you can utilize this mnemonic:

>"From high to low, look out below. From hot to cold, don't be bold."

![Altimeter in different conditions](/public/img/systems/altimeter_conditions.png)

### Types of Altitudes

<table class='ui table'>
    <tr>
        <td style="width: 20%">Indicated altitude</td>
        <td>Altitude read directly from the instrument, after the Kollsman window is set</td>
    </tr>
    <tr>
        <td>True altitude</td>
        <td>The true distance from the aircraft to mean sea level</td>
    </tr>
    <tr>
        <td>Absolute altitude</td>
        <td>The true distance from the aircraft to the terrain</td>
    </tr>
    <tr>
        <td>Pressure altitude</td>
        <td>Altitude read off the altimeter when it is set to 29.92" Hg in the Kollsman window</td>
    </tr>
    <tr>
        <td>Density altitude</td>
        <td>Pressure altitude corrected for nonstandard temperature and pressure;  Used in aircraft performance calculations</td>
    </tr>
</table>

### Using the Altimeter

The altimeter should be set before every flight according to the local altimeter setting, or the field elevation if unavailable.

If the altimeter differs from the field elevation by more than **75** feet, then the altimeter should be recalibrated. 

There are three types of altimeter settings that can be used:


<table class='ui table'>
    <tr>
        <td style="width: 10%">Q<strong>NH</strong></td>
        <td>"Home"</td>
        <td>Reads altitude above MSL</td>
    </tr>
    <tr>
        <td style="width: 10%">Q<strong>FE</strong></td>
        <td>"Field elevation"</td>
        <td>Reads altitude above the field elevation</td>
    </tr>
    <tr>
        <td style="width: 10%">Q<strong>NE</strong></td>
        <td>"Never enough"</td>
        <td>Reads pressure altitude</td>
    </tr>
</table>


--- 

## Airspeed Indicator

The airspeed indicator approximates the speed of the relative wind using impact air and static air pressure. 

### Operation

The difference in pressure between the pitot tube and static port determines the airspeed indicator's reading.

### Types of Airspeed

<table class='ui table'>
    <tr>
        <td style="width: 24%">Indicated airspeed (IAS)</td>
        <td>Airspeed as read from the airspeed indicator.</td>
        <td>Read from the instrument.</td>
    </tr>
    <tr>
        <td>Calibrated airspeed (CAS)</td>
        <td>Airspeed that is corrected for instrumentation errors in a given flight configuration</td>
        <td>POH/GFM correction table</td>
    </tr>
    <tr>
        <td>True airspeed (TAS)</td>
        <td>The true speed of the aircraft relative to the airmass</td>
        <td>Flight computer</td>
    </tr>
</table>

### Effects of Altitude

As an aircraft climbs, the ambient air density decreases. This causes the difference between ram impact air pressure and static air pressure to decrease, so a *lower* airspeed is indicated on the dial. 

> As the aircraft ascends, the airspeed indicator **underreads** the true airspeed.

![Airspeed vs altitude](/public/img/systems/airspeed_vs_altitude.png)

Fortunately, the amount the airspeed indicator underreads approximately cancels out the air density-related changes to the flight dynamics. An aircraft will stall at different *true* airspeeds depending on its altitude, but will always stall at approximately the same *indicated* airspeed. 

### Airspeed Indicator Markings

There are a standardized set of markings for airspeed indicators that show important speeds. 

![Airspeed vs altitude](/public/img/systems/airspeed_markings.png)


# Magnetic Compass

The magnetic compass is an incredibly simple direction indicator. It is constructed from two small magnets attached to a metal float that holds a compass card. 

Note that as a pilot, you are looking on the back of the compass card. 

> As the aircraft turns, the card remains stationary, and the cockpit turns around the card. 

## Magnetic compass errors

### Variation

As you probably know, the Earth's magnetic pole does not coincide with it's geographical north pole. Thus there is a difference between *magnetic* north, and *true* north. 

**Isogonic** lines are lines of equal magnetic variation. There are shown on sectional charts as dashed magenta lines. 

![Sectional isogonic lines](/public/img/systems/isogonic_sectional.png)

To find your *true* heading, you will add or subtract the variation from your magnetic heading:

<table class='ui table'>
    <tr>
        <td style="width: 24%">For western variations:</td>
        <td><strong>Subtract</strong> the variation</td>
        <td>(e.g. 12 degree 30 minutes W)</td>
        <td>West of Chicago</td>
    </tr>
    <tr>
        <td style="width: 24%">For eastern variations:</td>
        <td><strong>Add</strong> the variation</td>
        <td>(e.g. 12 degree 30 minutes E)</td>
        <td>East of Chicago</td>
    </tr>
</table>

### Deviation

The magnet that drives the compass will align will be influence by any magnetic fields. Other cockpit instruments, or any source of current flow nearby, may create a magnetic field that induces an error in the compass reading. 

To account for this, magnetic compasses mount a **compass card** nearby, which shows calibrated compass readings.

![Compass](http://www.defineaviation.info/wp-content/uploads/The-Magnetic-Compass-of-an-Aircraft3-604x270.jpg)

### Dip Errors

The lines of magnetic flux are parallel with the Earth's surface at the equator, and are perpendicular at the magnetic poles. 

![Magnetic flux of the poles](http://www.boldmethod.com/images/learn-to-fly/aircraft-systems/how-your-magnetic-compass-works/magnetic-dip.jpg)

Because of this, the magnetic "pull" on the compass' magnet is slightly downward in the mid-latitudes of the northern hemisphere, and a counterweight is added to compensate. This "dip" and weight can cause northerly turning, and acceleration errors.

#### Northernly Turning Errors

On **northern** headings, when a turn is made the compass may momentarily indicate a turn in the opposite direction and will lag behind the actual heading. 

Consider flying on a north heading, and turning right (to the east):

![North to east error](/public/img/systems/north_east_turning_error.png)

The lines of magnetic flux are "pulling" the card downward (into the turn) while the aircraft is banked, thus biasing the compass to **lag behind** the aircraft's actual course.

---

On **southern** headings, when a turn is made the compass will lead or exaggerate the turn being made. 

Consider flying on a south heading, and turning left (to the east):

![South to west error](/public/img/systems/south_east_turning_error.png)

The lines of magnetic flux are "pulling" the card downward (into the turn) while the aircraft is banked, thus biasing the compass to **lead** the aircraft's actual course.

### Acceleration Errors

The dip-correction weight, as mentioned above, also causes errors when accelerating or decelerating of east/west headings.

Since the northern-labeled side of the compass card contains the dip compensation weight, it is "held back" when accelerating. This may cause an indication of turning toward.

![Compass acceleration](/public/img/systems/Compass.jpg)

Likewise, when you are decelerating, the compensation weight is "pulled" forward, indicating a fictitious turn to the south. 

> Remember ANDS: **A**ccelerate-**N**orth, **D**eceleration-**S**outh
# Moviematch

Howdy fellow spacerock traveler,

This is a node based utility cli tool that if you do this:


```
moviematch --names "steven spielberg" "tom hanks"
```

Returns this: 

```
Results for:
	Steven Spielberg
	Tom Hanks

Productions they've worked in:
	And the Oscar Goes To... [4 years ago]
	Steven Spielberg as Himself - Interviewee and Tom Hanks as Himself - Interviewee

	The Terminal [13 years ago]
	Steven Spielberg as Viktor Navorski and Tom Hanks as Director

	The Pacific [8 years ago]
	Steven Spielberg as Executive Producer and Tom Hanks as Executive Producer

	A Timeless Call [9 years ago]
	Steven Spielberg as Himself - Narrator and Tom Hanks as Director

	Spielberg [2 months ago]
	Steven Spielberg as Himself and Tom Hanks as Himself

	The Post [in a month]
	Steven Spielberg as Ben Bradlee and Tom Hanks as Director

	Inventing David Geffen [5 years ago]
	Steven Spielberg as Himself and Tom Hanks as Himself

	Bridge of Spies [2 years ago]
	Steven Spielberg as James B. Donovan and Tom Hanks as Director

	The Concert for Valor [3 years ago]
	Steven Spielberg as Himself and Tom Hanks as Himself

    ... (and a lot more)

```

And...

```
moviematch --revenue "gal gadot"
```

Returns...

```
Revenue for Gal Gadot
The total revenue so far has been $5,450,713,368.00
	Furious 7 [3 years ago]
	$1506249360
	Batman v Superman: Dawn of Justice [2 years ago]
	$873260194
	Wonder Woman [6 months ago]
	$821760975
	Fast & Furious 6 [5 years ago]
	$788679850
	Fast Five [7 years ago]
	$626137675
	Fast & Furious [9 years ago]
	$363164265
	Knight and Day [7 years ago]
	$261930431
	Date Night [8 years ago]
	$152263880
	Keeping Up with the Joneses [a year ago]
	$29918745
	Criminal [2 years ago]
	$14708696
	Triple 9 [2 years ago]
	$12639297
```

(so far!)


You get the point. :)

# Installation

Just run: 

```
npm install -g moviematch
```

# Usage

```
moviematch --names [2 names, use quotes for full names] ||  --revenue [name, use quotes for full names]
```

If you just put _tom_ it will find the most popular Tom (Hanks).


# Disclaimer

It uses a free heroku app that I put together what matches movie people with each other.

I might upgrade it in the future but for now the free tier is good enough.


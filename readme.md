# Moviematch

Howdy fellow spacerock traveler,

This is a node based utility cli tool that if you do this:


```
moviematch -names "steven spielberg" "tom hanks"
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

You get the point. :)

# Installation

Just run: 

```
npm install -g moviematch
```

# Usage

```
moviematch -names [2 names, use quotes for long names]
```

If you just put _tom_ it will find the most popular Tom (Hanks).


# Disclaimer

It uses a free heroku app that I put together what matches movie people with each other.

I might upgrade it in the future but for now the free tier is good enough.


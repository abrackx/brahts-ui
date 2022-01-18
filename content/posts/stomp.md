---
title: "stomp"
date: 2022-01-17T13:25:22-05:00
# bookComments: false
# bookSearchExclude: false
---

# so i've been trying to make a stomp client and server using rust

It's been an experience to say the least.

## starting off

First order of business is to find what already exists.

1. [tokio-stomp](https://github.com/adwhit/tokio-stomp )
2. [stomp-rs](https://github.com/zslayton/stomp-rs)

I'm sure there are others but both of these have not been updated in a few years. Looks like it's time for a new stomp websocket handler built in rust. [Don't say it](https://xkcd.com/927/).

## moving forward

Lets look at _just_ websockets. Maybe there are some well maintained crates out there. Remember we want both a client and a server in our crate to enable rapid development.

1. [rust-websocket]([https://link](https://github.com/websockets-rs/rust-websocket))
2. [tungstenite-rs](https://github.com/snapview/tungstenite-rs)
3. [tokio-tungstenite](https://github.com/snapview/tokio-tungstenite)
4. [actix](https://github.com/actix/examples/tree/master/websockets/websocket)

Rust-websocket recommends that you do not use their crate and instead suggests tungstenite-rs or tokio-tungstenite. Actix-web apparently _can_ handle websockets, [however it does not seem straightforward](https://actix.rs/docs/websockets/). Because I'm lazy and want a single executable capable (but not necessarily good) at handling both the client and the server it made sense to utilize tokio-tungstenite. Tokio can let me do things like spawning a thread for both the client and the server. And I'd rather not coerce actix into handling websockets - that seems like a recipe for disaster.

Let's try out some examples.

## this should be easy

Tokio-tungstenite has an examples directory so it should be straightforward to get things going. Just kidding this is rust of course not. [This should save you some time](https://github.com/snapview/tokio-tungstenite/issues/141). Running the examples in your own project is not as simple as just a copy and paste in the rust world. With no cargo.toml provided you need to figure out your own.

## so what is stomp

Glad you asked, I'm not really sure. [Here's the definition of the protocol](https://stomp.github.io/stomp-specification-1.2.html). This has a lot of text. Instead of trying to understand any of that why not get started right away.

Introducing [wade](https://github.com/abrackx/wade). A soon-to-be-work-in-progress rust based STOMP websocket client and server. Currently all it does is actually make the client and server examples found in tokio-tungstenite runnable in a single executable.

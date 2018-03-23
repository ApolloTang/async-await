#!/bin/bash

http-server ./resources -p 9091 &
browser-sync start --server 'lab' --files 'lab' --directory &
wait;




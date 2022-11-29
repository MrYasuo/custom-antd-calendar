#!/bin/bash
shopt -s nullglob ## as recommended and explained in the comments
shopt -s globstar
shopt -s dotglob
for fname in **/*.tsx; do
	mv -- "${fname}" "${fname%.tsx}.jsx"
done

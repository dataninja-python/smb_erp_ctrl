#!/bin/bash

intro () {
	echo "This function makes working with git easier. I hope."
	echo "For simplicity: "
	echo "Most questions will require 'yes' or 'no' answers."
	echo "To answer yes, enter: 'y.' Yes, a lowercase 'y.'"
	echo "Anything else is considered no. Period. I don't have time to code all the edge cases right now."
	echo "At least for this first iteration, this particular file will be added to the git ignore. I haven't thought about it in depth but I imagine that should cause an infinite loop somewhere. [Work around: copy this file to another one with .txt instead of .sh to avoid gitignore rule]"
}

commit () {
	git add .
	read -p "what is the commit message: " msg

	echo "committing $msg"

	git commit -a -m "$msg"

}

pushIt () {
	check=$1
	echo "Remember to answer yes to any question. Enter a lowercase $check. Anything else means no."

	read -p "push to origin main" ans
	if [ $ans = $check ]; then
		res="to move forward."
	fi
	echo "You entered $ans. Hope you want $res"

	if [$ans = $check]; then
		git push origin main
	fi
}

main () {
	tmp=$1
	# run the entire script
	# 1) intro
	intro
	# 2) commit
	commit
	# 3) pushing to origin main
	pushIt $tmp
}

main 'y'

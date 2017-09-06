# chmod +x ./merge.sh

echo "enter merge commit message"
read commitMessage

function deleteInit() {
	if [ -e init.sh ]
	then
		rm -rf init.sh
	fi
}
deleteInit

function commitToBranch() {
	git add .
	git commit -m "$commitMessage"
	git push
}

gulp --prod --merge
commitToBranch
git checkout master

deleteInit

git checkout dev site
mv site/* .
rm -rf site
commitToBranch

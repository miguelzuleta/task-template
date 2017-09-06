# chmod +x ./merge.sh

function deleteInit() {
	if [ -e init.sh ]
	then
		rm -rf init.sh
	fi
}

deleteInit

gulp --prod --merge
git add .
git commit -m 'merge'
git push
git checkout master

deleteInit

git checkout dev site
mv site/* .
rm -rf site

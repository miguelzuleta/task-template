# chmod +x ./merge.sh

gulp --prod
git add .
git commit -m 'merge'
git checkout master-TEST
git checkout dev-TEST site

.PHONY: deploy

deploy:
	rsync --compress --human-readable --human-readable --progress --recursive --stats --times --verbose --verbose --verbose --verbose output/ davetown@davetownsend.org:/home3/davetown/public_html

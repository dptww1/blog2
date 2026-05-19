.PHONY: deploy

deploy:
	rsync --dry-run --compress --exclude=_bridgetown --human-readable --human-readable --progress --recursive --stats --times --verbose --verbose --verbose --verbose output/ davetown@davetownsend.org:/home3/davetown/public_html
